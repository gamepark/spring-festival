/** @jsxImportSource @emotion/react */
import { Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { SearchPileHelper } from '@gamepark/spring-festival/rules/helper/SearchPileHelper'
import { FireworkStoreDescription } from './description/FireworkStoreDescription'

export class FireworkStoreLocator extends Locator {
  location = { type: LocationType.FireworksStore }
  locationDescription = new FireworkStoreDescription()
  position = { x: 0, y: 0, z: 0 }

  getRotateZ(location: Location, context: MaterialContext) {
    const distanceFromZero = new SearchPileHelper(context.rules.game, context.player ?? context.rules.players[0]).distanceFromPositionZero
    const rotation = ((location.rotation - 1) * -90) + (distanceFromZero * -90) + (context.rules.players.length === 2 ? 45 : 0)
    return rotation >= -180 ? rotation : rotation + 360
  }
}

export const fireworkStoreLocator = new FireworkStoreLocator()
