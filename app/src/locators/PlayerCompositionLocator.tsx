/** @jsxImportSource @emotion/react */
import { DeckLocator, LocationContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { CompositionType } from '@gamepark/spring-festival/material/Composition'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates, gridMinX, gridMinY } from '../utils/PlayerPosition'

export class PlayerCompositionLocator extends DeckLocator {
  delta = { y: fireworkDescription.height + 0.2 }
  coordinates = { x: 0, y: -20.5, z: 0 }

  getCoordinates(item: MaterialItem, context: LocationContext) {
    const player = item.location.player!
    const index = getComputedIndex(context, player)
    const heightWithMargin = fireworkDescription.width + 0.2
    const coordinates = this.getCompositionLocation(index, context.rules.players)

    if (context.rules.players.length > 2) {
      coordinates.y -= gridMinY(context.rules.players.length) * heightWithMargin
      if (index === 0 || index === 3) {
        coordinates.y += heightWithMargin
      }
    } else {
      if (index === 0) {
        coordinates.y += 1.77 * heightWithMargin
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

    if (item.location.id === CompositionType.Pattern) {
      coordinates.y += (heightWithMargin) * 2
    }

    return coordinates
  }


  getCompositionLocation(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index)
      case 3:
        return getThreePlayerCoordinates(index, {y: -2})
      default:
        return getFourPlayerCoordinates(index, {y: -2})
    }
  }
}

export const playerCompositionLocator = new PlayerCompositionLocator()