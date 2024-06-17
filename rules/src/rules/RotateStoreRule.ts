import { CustomMove, isCustomMoveType, isEndGame, isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule, RuleMove } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { CustomMoveType } from './CustomMoveType'
import { SearchPileHelper } from './helper/SearchPileHelper'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class RotateStoreRule extends PlayerTurnRule {
  onRuleStart() {
    // TODO : return [this.rules().startSimultaneousRules(RuleId.GrandFinale, this.game.players)]
    if (!this.piles.length) return [this.rules().endGame()]
    this.forget(Memory.HasRotated)
    return []
  }

  getPlayerMoves() {
    const moves: MaterialMove[] = []
    if (this.starting !== this.player) {
      const pile = new SearchPileHelper(this.game, this.player).pile
      const newPile = (((pile - 1) + 4 - 1) % 4) + 1
      if (this.store.location.rotation === newPile) {
        moves.push(this.rules().customMove(CustomMoveType.RotateStore))
      } else {
        moves.push(this.material(MaterialType.FireworksStore).rotateItem(newPile))
      }

    } else {
      moves.push(
        this
          .material(MaterialType.FireworksStore)
          .rotateItem((item) => (((item.location.rotation - 1) + 4 - 1) % 4) + 1)
      )
    }

    moves.push(this.rules().startSimultaneousRule(RuleId.PlaceFirework, this.game.players))
    return moves
  }

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.RotateStore)(move)) return []
    this.memorize(Memory.HasRotated, true)
    this.memorize(Memory.StartPlayer, this.player)
    return []
  }

  get starting() {
    return this.remind(Memory.StartPlayer)
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.FireworksStore)(move) || move.location.rotation === undefined) return []
    this.memorize(Memory.HasRotated, true)
    this.memorize(Memory.StartPlayer, this.player)
    return []
  }

  get store() {
    return this.material(MaterialType.FireworksStore).getItem()!
  }

  get piles() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
  }

  onRuleEnd(move: RuleMove) {
    if (isEndGame(move)) return []
    if (!this.remind(Memory.HasRotated)) {
      const newRotation = new SearchPileHelper(this.game, this.player).pile
      if (this.store.location.rotation === newRotation) return []
      this.memorize(Memory.StartPlayer, this.player)
      return [
        this.material(MaterialType.FireworksStore).rotateItem(newRotation)
      ]
    }

    return []
  }
}
