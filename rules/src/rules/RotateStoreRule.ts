import { CustomMove, isCustomMoveType, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { CustomMoveType } from './CustomMoveType'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class RotateStoreRule extends PlayerTurnRule {
  getPlayerMoves() {
    return [
      this.rules().customMove(CustomMoveType.RotateStore),
      this.rules().startSimultaneousRule(RuleId.PlaceFirework)
    ]
  }

  onCustomMove(move: CustomMove): MaterialMove[] {
    if (!isCustomMoveType(CustomMoveType.RotateStore)(move)) return []
    this.memorize<number>(Memory.StoreRotation, (rotation) => (rotation ?? 0) + 1)
    return []
  }
}
