import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule, PlayMoveContext } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { SearchPileHelper } from './helper/SearchPileHelper'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class RotateStoreRule extends PlayerTurnRule {
  onRuleStart() {
    this.game.players.forEach((p) => this.forget(Memory.Placed, p))
    if (!this.piles.length) {
      return [...this.autoRotateStoreMoves(), this.startSimultaneousRule(RuleId.GrandeFinale, this.game.players)]
    }
    this.forget(Memory.HasRotated)
    return this.moveFirstPlayer()
  }

  moveFirstPlayer() {
    const firstPlayerToken = this.material(MaterialType.FirstPlayerToken)
    if (firstPlayerToken.getItem()!.location.player !== this.player) {
      return [firstPlayerToken.moveItem({
        type: LocationType.FirstPlayerToken,
        player: this.player
      })]
    }

    return []
  }

  getPlayerMoves() {
    const moves: MaterialMove[] = []
    const store = this.store
    moves.push(
      ...[1, 2, 3, 4].map((id) => store.rotateItem(id))
    )

    return moves
  }

  afterItemMove(move: ItemMove, context: PlayMoveContext) {
    if (!isMoveItemType(MaterialType.FireworksStore)(move) || move.location.rotation === undefined) return []
    if (context?.local) {
      this.memorize(Memory.RotationPreview, true)
    } else {
      this.forget(Memory.RotationPreview)
      this.memorize(Memory.HasRotated, true)
      return [...this.autoRotateStoreMoves(), this.startSimultaneousRule(RuleId.PlaceFirework, this.game.players)]
    }
    return []
  }

  /**
   * If the active player leaves this rule without having rotated the store himself, automatically rotate it so it
   * faces his search pile.
   *
   * This consequence used to be returned from `onRuleEnd`, but consequences returned there are played inside the
   * *next* rule step (see MaterialRulesPart#onRuleEnd doc). We now play it from the move handlers that leave this
   * rule, so it runs within the RotateStore context, before transitioning.
   */
  autoRotateStoreMoves(): MaterialMove[] {
    if (this.remind(Memory.HasRotated)) return []
    const newRotation = new SearchPileHelper(this.game, this.player).pile
    if (this.storeItem.location.rotation === newRotation) return []
    return [this.store.rotateItem(newRotation)]
  }

  get storeItem() {
    return this.store.getItem()!
  }

  get store() {
    return this.material(MaterialType.FireworksStore)
  }

  get piles() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
  }
}
