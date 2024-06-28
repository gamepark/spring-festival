import { Color } from '../../../material/Color'
import { SignScoring } from './SignScoring'

export class RatScoring extends SignScoring {

  get score() {
    return this.countCardsWithSameColorForCoordinates(
      Color.Yellow,
      [
        { x: -1, y: -1 },
        { x: -1, y: 1 },
        { x: 1, y: 1 },
        { x: 1, y: -1 },
      ]
    ) * 3
  }
}