import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { PlayerSymbol } from '../../PlayerSymbol'
import { Memory } from '../Memory'

export class SearchPileHelper extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)
  }

  get pile() {
    const position = this.game.players.findIndex(p => this.player === p)
    const starting = this.remind(Memory.StartPlayer)
    const startingPile = this.storeRotation
    const startingPosition = this.game.players.findIndex(p => p === starting)
    const distance = position - startingPosition
    const step = this.getStepForPosition(distance)
    return distance < 0 ? (((startingPile - 1 + 4 + step) % 4) + 1): (((startingPile - 1 + step)% 4) + 1)
  }

  get storeRotation() {
    return this
      .material(MaterialType.FireworksStore)
      .getItem()!
      .location
      .rotation
  }

  getStepForPosition(distance: number) {
    switch (this.game.players.length) {
      case 2:
        return Math.abs(distance) === 1? 2: 0
      case 3:
      case 4:
      default:
        return distance
    }
  }
}