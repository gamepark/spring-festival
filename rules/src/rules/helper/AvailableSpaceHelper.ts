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
      const left = { ...item.location, x: item.location.x! - 1 }
      if (this.canPlaceItemInLocation(left, locations)) locations.push(left)
      const right = { ...item.location, x: item.location.x! + 1 }
      if (this.canPlaceItemInLocation(right, locations)) locations.push(right)
      const top = { ...item.location, y: item.location.y! - 1 }
      if (this.canPlaceItemInLocation(top, locations)) locations.push(top)
      const bottom = { ...item.location, y: item.location.y! + 1 }
      if (this.canPlaceItemInLocation(bottom, locations)) locations.push(bottom)
    }


    return locations
  }

  canPlaceItemInLocation(location: Location, allowedLocations: Location[]): boolean {
    return !this.panorama.getItems().some((item) => equal(item.location, location))
      && !allowedLocations.some((l) => equal(l, location))
  }

  get panorama() {
    return this.material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }
}