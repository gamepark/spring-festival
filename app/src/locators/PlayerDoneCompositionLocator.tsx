/** @jsxImportSource @emotion/react */
import { DeckLocator, LocationContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { PlayerDoneDescription } from './description/PlayerDoneCompositionDescription'

export class PlayerDoneCompositionLocator extends DeckLocator {
  delta = { x: -0.05, y: -0.05 }
  locationDescription = new PlayerDoneDescription()

  getCoordinates(item: MaterialItem, context: LocationContext) {
    return this.locationDescription.getCoordinates(item.location, context)
  }
}

export const playerDoneCompositionLocator = new PlayerDoneCompositionLocator()