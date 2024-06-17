import { Location, MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import equal from 'fast-deep-equal'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerSymbol } from '../../PlayerSymbol'

export class AvailableSpaceHelper extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)
  }

  get availableSpaces() {
    if (!this.panorama.length) {
      return [{
        type: LocationType.Panorama,
        player: this.player,
        x: 0,
        y: 0
      }]
    }

    const locations = []
    const items = this.panorama.getItems()
    for (const item of items) {
      const { location: { rotation, ...l } } = item
      const left = { ...l, x: l.x! - 1 }
      if (this.canPlaceItemInLocation(left, locations)) locations.push(left)
      const right = { ...l, x: l.x! + 1 }
      if (this.canPlaceItemInLocation(right, locations)) locations.push(right)
      const top = { ...l, y: l.y! - 1 }
      if (this.canPlaceItemInLocation(top, locations)) locations.push(top)
      const bottom = { ...l, y: l.y! + 1 }
      if (this.canPlaceItemInLocation(bottom, locations)) locations.push(bottom)
      locations.push(l)
    }

    return locations
  }

  canPlaceItemInLocation(location: Location, allowedLocations: Location[]): boolean {
    return !this.panorama.getItems().some((item) => {
        const { location: { rotation, ...l } } = item
        return equal(l, location)
      })
      && !allowedLocations.some((l) => equal(l, location))
  }

  get panorama() {
    return this.material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }
}