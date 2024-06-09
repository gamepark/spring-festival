import { CustomMove, isCustomMoveType, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { CustomMoveType } from './CustomMoveType'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class RotateStoreRule extends PlayerTurnRule {
  getPlayerMoves() {
    return [
      this.rules().customMove(CustomMoveType.RotateStore),
      this.rules().startSimultaneousRule(RuleId.PlaceFirework, this.game.players)
    ]
  }

  onCustomMove(move: CustomMove): MaterialMove[] {
    if (!isCustomMoveType(CustomMoveType.RotateStore)(move)) return []


    this.memorize<number>(Memory.StoreRotation, this.nextPile)
    return []
  }

  get nextPile(): number {
    const rotation = this.remind(Memory.StoreRotation)
    return (rotation ?? 0) + 1
  }
}
