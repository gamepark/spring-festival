import { getDistanceBetweenSquares, MaterialGame, MaterialItem, MaterialRulesPart, XYCoordinates } from '@gamepark/rules-api'
import isEqual from 'lodash/isEqual'
import uniqWith from 'lodash/uniqWith'
import { Color } from '../../../material/Color'
import { fireworkDescriptions } from '../../../material/FireworkDescription'
import { LocationType } from '../../../material/LocationType'
import { MaterialType } from '../../../material/MaterialType'
import { PlayerSymbol } from '../../../PlayerSymbol'
import { PlayerBoundaries } from '../PlayerBoundaries'

export abstract class SignScoring extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)
  }

  abstract get score(): number

  get panorama() {
    return this.material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }

  get explodedFireworks() {
    return this.panorama.filter((item) => item.location.rotation)
  }

  countCardsWithSameColorForCoordinates(color: Color, coordinates: XYCoordinates[]) {
    const panorama = this.panorama
    const itemIndexes: number[][] = []
    const explodedFireworks = this.panorama.filter((item) => fireworkDescriptions[item.id.front].color === color)
    const indexes = explodedFireworks.getIndexes()
    for (const index of indexes) {
      const item = panorama.getItem(index)!
      if (!item.location.rotation) continue
      for (const coordinate of coordinates) {
        const fireworks = explodedFireworks.filter((i) => i.location.x === (item.location.x! + coordinate.x) && i.location.y === (item.location.y! + coordinate.y))
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

  getTileThatWillExplode(tile: MaterialItem, ignoredTiles: number[] = []) {
    return this
      .panorama
      .filter((item, index) =>
        !ignoredTiles.includes(index)
        && fireworkDescriptions[tile.id.front].explosions.some((e: any) => isEqual(
        { x: item.location.x, y: item.location.y },
        { x: tile.location.x + e.x, y: tile.location.y + e.y }
      )))
  }

  getAdjacentTiles(tile: MaterialItem) {
    return this
      .panorama
      .filter((item) =>
        getDistanceBetweenSquares({ x: tile.location.x!, y: tile.location.y! }, { x: item.location.x!, y: item.location.y! }) === 1)
  }

  getCardWithColor(color: Color) {
    return this.panorama.filter((item) => fireworkDescriptions[item.id.front].color === color)
  }

  get boundaries() {
    return new PlayerBoundaries(this.game, this.player).boudaries
  }
}