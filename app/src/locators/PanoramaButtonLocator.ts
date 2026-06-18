import { LocationContext, Locator, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { Location } from '@gamepark/rules-api'
import { PanoramaButtonDescription } from './description/PanoramaButtonDescription'
import { panoramaLocator } from './PanoramaLocator'

export class PanoramaButtonLocator extends Locator {
  getLocations({ player, rules }: MaterialContext) {
    if (player !== undefined && rules.game.rule?.id === RuleId.PlaceBaseFirework
      && rules.game.rule?.players?.includes(player)
      && rules.material(MaterialType.Firework).location(LocationType.Panorama).player(player).length === 4) {
      return [{ type: LocationType.PanoramaButton }]
    }
    return []
  }

  locationDescription = new PanoramaButtonDescription()

  getCoordinates(_location: Location, context: LocationContext) {
    const { rules } = context
    const maxYLocation = rules
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(context.player!)
      .maxBy((item) => item.location.x!)
      .getItem()!
      .location

    const coordinates = panoramaLocator.getCoordinates(maxYLocation, context)
    return {
      x: coordinates.x + 5,
      y: coordinates.y,
      z: 0.5
    }
  }

  getPositionDependencies(_location: Location, context: MaterialContext) {
    return context.rules
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(context.player!)
      .getItems()
      .map((item) => item.location)
  }
}

export const panoramaButtonLocator = new PanoramaButtonLocator()