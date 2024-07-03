/** @jsxImportSource @emotion/react */
import { DeckLocator, LocationContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { CompositionType } from '@gamepark/spring-festival/material/Composition'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates, gridMinX } from '../utils/PlayerPosition'

export class PlayerCompositionLocator extends DeckLocator {
  delta = { y: fireworkDescription.height + 0.2 }

  getCoordinates(item: MaterialItem, context: LocationContext) {
    const player = item.location.player!
    const index = getComputedIndex(context, player)
    const heightWithMargin = fireworkDescription.width + 0.2
    const coordinates = this.getCompositionLocation(index, context.rules.players)

    if (context.rules.players.length > 2) {
      if (index === 0 || index === 3) {
        coordinates.y -= heightWithMargin
      } else {
        coordinates.y -= heightWithMargin * 2
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
        return getTwoPlayerCoordinates(index, { x: -2 })
      case 3:
        return getThreePlayerCoordinates(index, { x: -2 })
      default:
        return getFourPlayerCoordinates(index, { x: -2 })
    }
  }

  getRotateZ(item: MaterialItem): number {
    return 90 * (item.location.rotation ?? 0)
  }
}

export const playerCompositionLocator = new PlayerCompositionLocator()