import { Color } from '../../../material/Color'
import { SignScoring } from './SignScoring'

export class MonkeyScoring extends SignScoring {

  get score() {
    return this.countCardsWithSameColorForCoordinates(
      Color.Green,
      [
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
      ]
    ) * 2
  }
}