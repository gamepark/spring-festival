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

    this.memorize<number>(Memory.ChosenPile, this.nextPile)
    return []
  }

  get nextPile(): number {
    const pile = this.remind(Memory.ChosenPile)
    const piles = [1, 2, 3, 4]
    return piles[(piles.indexOf(pile) + piles.length - 1) % piles.length]
  }

  get previousPile(): number {
    const pile = this.remind(Memory.ChosenPile)
    const piles = [1, 2, 3, 4]
    return piles[(piles.indexOf(pile) + 1) % piles.length]
  }
}
