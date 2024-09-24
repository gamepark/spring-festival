/** @jsxImportSource @emotion/react */
import { DeckLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { CompositionType } from '@gamepark/spring-festival/material/Composition'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates, gridMinX } from '../utils/PlayerPosition'
import { PlayerDoneCompositionDescription } from './description/PlayerDoneCompositionDescription'

export class PlayerDoneCompositionLocator extends DeckLocator {
  getLocations(context: MaterialContext) {
    return context.rules.players.map(player => ({
      type: LocationType.PlayerDoneComposition,
      player
    }))
  }

  locationDescription = new PlayerDoneCompositionDescription()

  getCoordinates(location: Location, context: MaterialContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)
    const heightWithMargin = fireworkDescription.width + 0.2
    const coordinates = this.getCompositionLocation(index, context.rules.players)

    if (context.rules.players.length > 2) {
      if (index === 0 || index === 3) {
        coordinates.y += heightWithMargin + 5.2
      } else {
        coordinates.y -= heightWithMargin + 5.2
      }
    } else {
      if (index === 0) {
        coordinates.y += 4.77 * heightWithMargin
      } else {
        coordinates.y -= 4.77 * heightWithMargin
      }
    }


    const margin = (gridMinX + 0.5) * heightWithMargin + 0.5
    if (index < 2) {
      coordinates.x += margin
    } else {
      coordinates.x -= margin
    }

    if (location.id === CompositionType.Pattern) {
      coordinates.y += (heightWithMargin) * 2
    }

    return coordinates
  }

  getCompositionLocation(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { x: 3.7 })
      case 3:
        return getThreePlayerCoordinates(index, { x: 3.7 })
      default:
        return getFourPlayerCoordinates(index, { x: 3.7 })
    }
  }
}

export const playerDoneCompositionLocator = new PlayerDoneCompositionLocator()