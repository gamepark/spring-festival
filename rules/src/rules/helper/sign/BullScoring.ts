import uniqBy from 'lodash/uniqBy'
import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { SignScoring } from './SignScoring'

export class BullScoring extends SignScoring {

  get score() {
    return this.countColumnWithFourDifferentExplosions * 5
  }

  get countColumnWithFourDifferentExplosions() {
    let columnsCount = 0
    const exploded = this.explodedFireworks
    const boundaries = this.boundaries
    for (let i = boundaries.minX; i <= boundaries.maxX; i++) {
      const column = exploded.location((l) => l.x === i)
      if (column.length < 4) continue
      const uniqExplosions = uniqBy(column.getItems(), (item) => fireworkDescriptions[item.id.front].explosions.length)
      if (uniqExplosions.length >= 4) columnsCount++
    }

    return columnsCount
  }
}