import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { ApplauseHelper } from '../ApplauseHelper'
import { SignScoring } from './SignScoring'

export class RoosterScoring extends SignScoring {

  get score() {
    return this.extinguishCount * 3
  }

  get extinguishCount() {
    let extinguished = 0
    const treatedIndexes: number[] = []
    const exploded = this.explodedFireworks.filter((item) => fireworkDescriptions[item.id.front].explosions.length === 3)
    for (const index of exploded.getIndexes()) {
      const item = exploded.getItem(index)!
      const applauseCount = new ApplauseHelper(this.game, this.player).getExtinguishesCount(item, treatedIndexes)
      treatedIndexes.push(index)
      extinguished += applauseCount
    }

    return extinguished
  }


}