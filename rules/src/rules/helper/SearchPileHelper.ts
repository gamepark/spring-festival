import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { PlayerSymbol } from '../../PlayerSymbol'

export class SearchPileHelper extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)
  }

  get pile() {
    const distance = this.game.players.findIndex(p => this.player === p)
    const startingPile = this.storeRotation
    const step = this.getStepForPosition(distance)
    return (((startingPile - 1 + step)% 4) + 1)
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
        return distance === 1? 2: 0
      case 3:
      case 4:
      default:
        return distance
    }
  }
}