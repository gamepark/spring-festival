import { Color } from '../../../material/Color'
import { SignScoring } from './SignScoring'

export class SnakeScoring extends SignScoring {

  get score() {
    return this.redWithAdjacentCards * 5
  }

  get redWithAdjacentCards() {
    let count = 0
    const panorama = this.getCardWithColor(Color.Red)
    for (const item of panorama.getItems()) {
      const adjacent = this.getAdjacentTiles(item)
      if (adjacent.length === 4) count++
    }

    return count
  }
}