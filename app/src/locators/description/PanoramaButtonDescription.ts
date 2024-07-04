/** @jsxImportSource @emotion/react */
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { PanoramaButton } from '../component/PanoramaButton'
import { panoramaLocator } from '../PanoramaLocator'

export class PanoramaButtonDescription extends LocationDescription {
  height = 2
  width = 2
  borderRadius = 1

  getCoordinates(_location: Location, context: LocationContext) {
    const { rules } = context
    const maxYLocation = rules
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(context.player!)
      .maxBy((item) => item.location.x!)
      .getItem()!
      .location

    const coordinates = panoramaLocator.locationDescription.getCoordinates(maxYLocation, context)
    return {
      x: coordinates.x + 5,
      y: coordinates.y,
      z: 0.5
    }
  }

  isAlwaysVisible(_location: Location, context: MaterialContext): boolean {
    const { player, rules } = context
    if (!player) return false

    return context.rules.game.rule?.id === RuleId.PlaceBaseFirework
      && !!context.rules.game.rule?.players?.includes(player)
      && rules.material(MaterialType.Firework).location(LocationType.Panorama).player(player).length === 4
  }

  location = { type: LocationType.PanoramaButton }

  content = PanoramaButton
}