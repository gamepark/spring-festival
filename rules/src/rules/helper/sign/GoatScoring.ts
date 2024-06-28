import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { SignScoring } from './SignScoring'

export class GoatScoring extends SignScoring {

  get score() {
    return this.columnsWitOneFireOne * 3
  }

  get columnsWitOneFireOne() {
    const boundaries = this.boundaries
    let count = 0
    const fireworks = this.explodedFireworks
    for (let x = boundaries.minX; x <= boundaries.maxX; x++) {
      const oneFireItems = fireworks
        .location((l) => l.x === x)
        .filter((item) => fireworkDescriptions[item.id.front].explosions.length === 1)

      if (oneFireItems.length === 1) count++
    }

    return count
  }
}