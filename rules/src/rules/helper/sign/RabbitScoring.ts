import { XYCoordinates } from '@gamepark/rules-api'
import isEqual from 'lodash/isEqual'
import uniqWith from 'lodash/uniqWith'
import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { SignScoring } from './SignScoring'

export class RabbitScoring extends SignScoring {

  get score() {
    return this.countCardsWithSameExplosionsForCoordinates(
      2,
      [
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
      ]) * 5
  }

  countCardsWithSameExplosionsForCoordinates(explosionsCount: number, coordinates: XYCoordinates[]) {
    const panorama = this.panorama
    const itemIndexes: number[][] = []
    const treatedIndexes: number[] = []
    const allFireworks = this.panorama.filter((item) => fireworkDescriptions[item.id.front].explosions.length === explosionsCount)
    const indexes = allFireworks.getIndexes()
    for (const index of indexes) {
      const item = panorama.getItem(index)!
      if (!item.location.rotation) continue
      for (const coordinate of coordinates) {
        const fireworks = allFireworks
          .index((i) => !treatedIndexes.includes(i))
          .filter((i) => i.location.x === (item.location.x! + coordinate.x) && i.location.y === (item.location.y! + coordinate.y))
        treatedIndexes.push(index)
        if (!fireworks.length) continue
        for (const firework of fireworks.getIndexes()) {
          itemIndexes.push(
            [index, firework].sort()
          )
        }
      }
    }

    return uniqWith(itemIndexes, isEqual).length
  }
}