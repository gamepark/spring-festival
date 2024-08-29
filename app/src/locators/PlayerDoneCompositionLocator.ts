/** @jsxImportSource @emotion/react */
import { DeckLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { PlayerDoneCompositionDescription } from './description/PlayerDoneCompositionDescription'

export class PlayerDoneCompositionLocator extends DeckLocator {
  getLocations(context: MaterialContext) {
    return context.rules.players.map((p) => ({
      type: LocationType.PlayerDoneComposition,
      player: p
    }))
  }

  locationDescription = new PlayerDoneCompositionDescription()

  gap = { x: -0.05, y: -0.05 }

  getCoordinates(location: Location, context: MaterialContext) {
    return this.locationDescription.getCoordinates(location, context)
  }
}

export const playerDoneCompositionLocator = new PlayerDoneCompositionLocator()