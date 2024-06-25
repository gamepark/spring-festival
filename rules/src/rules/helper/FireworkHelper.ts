import { isMoveItemType, ItemMove, Material, MaterialGame, MaterialMove, MaterialRulesPart, XYCoordinates } from '@gamepark/rules-api'
import isEqual from 'lodash/isEqual'
import { fireworkDescriptions } from '../../material/FireworkDescription'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerSymbol } from '../../PlayerSymbol'

export class FireworkHelper extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)

  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama) return []
    const tile = this.panorama.index(move.itemIndex)!
    return this.getExplosionMoves(tile)
  }

  getExplosionMoves(tile: Material) {
    const treatedIndex: number[] = [tile.getIndex()]
    const moves: MaterialMove[] = [tile.rotateItem(true)]
    const item = tile.getItem()!
    const originalCoordinates = { x: item.location.x!, y: item.location.y!}
    this.fillAdjacentFireworks(moves, treatedIndex, tile, originalCoordinates)
    return moves
  }

  fillAdjacentFireworks(moves: MaterialMove[], treatedIndex: number[], tile: Material, originalCoordinates: XYCoordinates) {
    const panorama = this.panorama
    const item = tile.getItem()!
    const location = { x: item.location.x!, y: item.location.y! }
    const fireworks = panorama
      .location((l) => {
        return l.rotation !== true
          && (l.x !== originalCoordinates.x || l.y !== originalCoordinates.y)
          && fireworkDescriptions[item.id.front].explosions.some((e: XYCoordinates) => {
            return isEqual(
              { x: l.x, y: l.y },
              { x: location.x + e.x, y: location.y + e.y }
            )
          })
      })
      .index((i) => !treatedIndex.includes(i))

    if (fireworks.length) {
      treatedIndex.push(...fireworks.getIndexes())
      for (const index of fireworks.getIndexes()) {
        treatedIndex.push(index)
        const firework = fireworks.index(index)
        moves.push(firework.rotateItem(true))
        this.fillAdjacentFireworks(moves, treatedIndex, firework, originalCoordinates)
      }
    }
  }

  get panorama() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }
}