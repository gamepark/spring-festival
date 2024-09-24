import { ApplauseHelper } from '../ApplauseHelper'
import { SignScoring } from './SignScoring'

export class DragonScoring extends SignScoring {

  get score() {
    return this.extinguishCount * 2
  }

  get extinguishCount() {
    let extinguished = 0
    const treatedIndexes: number[] = []
    const fireworks = this.panorama
    for (const index of fireworks.getIndexes()) {
      const item = fireworks.getItem(index)
      const applauseCount = new ApplauseHelper(this.game, this.player).getExtinguishesCount(item, treatedIndexes)
      treatedIndexes.push(index)
      extinguished += applauseCount
    }

    return extinguished
  }
}