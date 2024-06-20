import { isMoveItemType, ItemMove, Material, MaterialGame, MaterialMove, MaterialRulesPart, XYCoordinates } from '@gamepark/rules-api'
import equal from 'fast-deep-equal'
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

  getApplauseMoves(tile: Material): MaterialMove[] {
    const item = tile.getItem()!
    const panorama = this.panorama
    const location = { x: item.location.x!, y: item.location.y! }
    const fireworks = panorama
      .location((l) => {
        return l.rotation !== true
          && fireworkDescriptions[item.id.front].extinguishes.some((e: XYCoordinates) => {
            return equal(
              { x: l.x, y: l.y },
              { x: location.x + e.x, y: location.y + e.y }
            )
          })
      })

    const applauseWon = fireworks.length
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