import { CustomMove, isCustomMoveType, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { CustomMoveType } from './CustomMoveType'
import { Memory } from './Memory'

export class PlayerTurn extends PlayerTurnRule {
  getPlayerMoves() {
    return []
  }

  onCustomMove(move: CustomMove): MaterialMove[] {
    if (!isCustomMoveType(CustomMoveType.RotateStore)(move)) return []
    this.memorize<number>(Memory.StoreRotation, (rotation) => (rotation ?? 0) + 1)
    return []
  }
}
