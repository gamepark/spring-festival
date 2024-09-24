import isEqual from 'lodash/isEqual'
import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { SignScoring } from './SignScoring'

export class PigScoring extends SignScoring {

  get score() {
    return this.arrowPair * 2
  }

  get arrowPair() {
    let count = 0
    const treatedIndexes: number[] = []
    const panorama = this.panorama
    for (const index of panorama.getIndexes()) {
      const item = panorama.getItem(index)
      const adjacent = this
        .getTileThatWillExplode(item, treatedIndexes)
        .filter(
          (a) =>
            fireworkDescriptions[a.id.front].explosions.some((explosion: any) => isEqual(
                { x: item.location.x, y: item.location.y },
                { x: a.location.x + explosion.x, y: a.location.y + explosion.y }
              )
            )
        )

      treatedIndexes.push(index)
      if (adjacent.length) {
        count += adjacent.length
      }

    }

    return count
  }
}