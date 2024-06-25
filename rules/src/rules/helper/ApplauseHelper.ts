import { isMoveItemType, ItemMove, Material, MaterialGame, MaterialItem, MaterialMove, MaterialRulesPart, XYCoordinates } from '@gamepark/rules-api'
import isEqual from 'lodash/isEqual'
import { fireworkDescriptions } from '../../material/FireworkDescription'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerSymbol } from '../../PlayerSymbol'

export class ApplauseHelper extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)

  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama) return []
    const tile = this.panorama.index(move.itemIndex)!
    return this.getApplauseMoves(tile)
  }

  getExtinguishesCount(tile: MaterialItem) {
    const panorama = this.panorama
    const location = { x: tile.location.x!, y: tile.location.y! }
    const fireworks = panorama.getItems()
    let applauseCount = 0
    for (const firework of fireworks) {
      const l = firework.location
      const applause = fireworkDescriptions[tile.id.front].extinguishes.some(
          (e: XYCoordinates) => isEqual({ x: l.x, y: l.y }, { x: location.x + e.x, y: location.y + e.y })
        )
        && fireworkDescriptions[firework.id.front].extinguishes.some(
          (e: XYCoordinates) => isEqual({ x: l.x! + e.x, y: l.y! + e.y }, { x: location.x, y: location.y })
        )

      if (applause) {
        applauseCount++
      }
    }

    return applauseCount
  }

  getApplauseMoves(tile: Material): MaterialMove[] {

    const applauseWon = this.getExtinguishesCount(tile.getItem()!)
    if (applauseWon) {
      return [
        this.material(MaterialType.ApplauseToken).createItem({
          location: {
            type: LocationType.PlayerApplause,
            player: this.player
          },
          quantity: applauseWon
        })
      ]
    }

    return []

  }

  get panorama() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }
}