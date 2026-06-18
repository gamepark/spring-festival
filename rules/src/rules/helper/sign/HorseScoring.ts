import { uniqBy } from 'es-toolkit'
import { FireworkId } from '../../../material/Firework'
import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { SignScoring } from './SignScoring'

export class HorseScoring extends SignScoring {

  get score() {
    return this.countColumnWithDifferentColors * 5
  }

  get countColumnWithDifferentColors() {
    let lineCount = 0
    const fireworks = this.panorama
    const boundaries = this.boundaries
    for (let i = boundaries.minY; i <= boundaries.maxY; i++) {
      const column = fireworks.location((l) => l.x === i)
      if (column.length < 4) continue
      const uniqColors = uniqBy(column.getItems<FireworkId>(), (item) => fireworkDescriptions[item.id.front].color)
      if (uniqColors.length >= 4) lineCount++
    }

    return lineCount
  }
}