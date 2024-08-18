import { MaterialGame } from '@gamepark/rules-api'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'
import { Color } from '../../../material/Color'
import { PlayerSymbol } from '../../../PlayerSymbol'
import { PlayerBoundaries } from '../PlayerBoundaries'
import { SignScoring } from './SignScoring'

export class TigerScoring extends SignScoring {

  constructor(game: MaterialGame, readonly playerId: PlayerSymbol) {
    super(game, playerId)
    this.initializeArea()
  }

  get score() {
    return this.maxAreaSize * 3
  }

  get maxAreaSize(): number {
    const areaNumbers = this.areas.flat()
    const areaLength = mapValues(groupBy(areaNumbers, (areaNumber) => areaNumber), (v) => v.length)
    let maxArea: string | undefined = undefined
    for (const key of Object.keys(areaLength)) {
      if (+key === 0) continue
      if (!maxArea || areaLength[key] > areaLength[maxArea]) maxArea = key
    }

    if (maxArea === undefined || areaLength[maxArea] === 1) return 0
    return areaLength[maxArea] ?? 0
  }

  areas: number[][] = [
  ]

  initializeArea() {
    const boundaries = new PlayerBoundaries(this.game, this.player).boudaries
    let areaCount = 1
    const panorama = this.getCardWithColor(Color.Blue)
    for (let yIndex = 0; yIndex <= boundaries.deltaY; yIndex++) {
      for (let xIndex = 0; xIndex <= boundaries.deltaX; xIndex++) {
        const x = boundaries.minX + xIndex
        const y = boundaries.minY + yIndex
        const item = panorama.location((l) => l.x === x && l.y === y)
        if (!item.length) continue

        if (!this.areas[yIndex]) this.areas[yIndex] = []
        const topArea = this.areas[yIndex - 1]?.[xIndex]
        if (topArea && !this.areas[yIndex][xIndex]) this.areas[yIndex][xIndex] = topArea

        const leftArea = this.areas[yIndex]?.[xIndex - 1]
        if (leftArea) this.areas[yIndex][xIndex] = leftArea

        if (topArea && leftArea) {
          this.replaceArea(boundaries, leftArea, topArea)
        }
        if (!topArea && !leftArea) {
          this.areas[yIndex][xIndex] = ++areaCount
        }

      }
    }
  }

  replaceArea(boundaries: any, a: number, b: number) {
    for (let yIndex = 0; yIndex <= boundaries.deltaY; yIndex++) {
      for (let xIndex = 0; xIndex <= boundaries.deltaX; xIndex++) {
        const x = boundaries.minX + xIndex
        const y = boundaries.minY + yIndex
        if (this.areas[y]?.[x] === a) {
          this.areas[y][x] = b
        }
      }
    }
  }
}