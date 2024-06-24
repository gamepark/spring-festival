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
    this.game.players.forEach((p) => this.forget(Memory.Placed, p))
    if (!this.piles.length) return [this.rules().startSimultaneousRule(RuleId.GrandeFinale, this.game.players)]
    this.forget(Memory.HasRotated)
    return []
  }

  getPlayerMoves() {
    const moves: MaterialMove[] = []
    moves.push(this.rules().customMove(CustomMoveType.RotateStore, 1))
    moves.push(this.rules().customMove(CustomMoveType.RotateStore, -1))
    moves.push(this.rules().startSimultaneousRule(RuleId.PlaceFirework, this.game.players))
    return moves
  }

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.RotateStore)(move) || !move.data) return []
    const pile = new SearchPileHelper(this.game, this.player).pile
    let clockwise = this.getClockwise(pile)
    let counterClockwise = this.getCounterClockwise(pile)
    if (move.data > 0) {
      if (this.store.location.rotation === clockwise) {
        clockwise = this.getClockwise(clockwise)
      }
      return [this.material(MaterialType.FireworksStore).rotateItem(clockwise)]
    }

    if (move.data < 0) {
      if (this.store.location.rotation === counterClockwise) {
        counterClockwise = this.getCounterClockwise(counterClockwise)
      }
      return [this.material(MaterialType.FireworksStore).rotateItem(counterClockwise)]
    }

    return []
  }

  getClockwise(pile: number) {
    return (((pile - 1) + 4 - 1) % 4) + 1
  }

  getCounterClockwise(pile: number) {
    return (pile + 1 % 4)
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
