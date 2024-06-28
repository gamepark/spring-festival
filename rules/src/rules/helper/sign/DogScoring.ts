import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { SignScoring } from './SignScoring'

export class DogScoring extends SignScoring {

  get score() {
    return this.periphericalFourFire * 3
  }

  get periphericalFourFire() {
    let count = 0
    const fourExplosionFireworks = this.panorama.filter((item) => fireworkDescriptions[item.id.front].explosions.length === 4)
    for (const item of fourExplosionFireworks.getItems()) {
      const adjacent = this.getAdjacentTiles(item)
      if (adjacent.length < 4) count++
    }

    return count++
  }
}