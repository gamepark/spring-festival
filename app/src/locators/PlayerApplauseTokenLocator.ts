/** @jsxImportSource @emotion/react */
import { LineLocator, LocationContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex } from '../utils/PlayerPosition'
import { playerDoneCompositionLocator } from './PlayerDoneCompositionLocator'

export class PlayerApplauseTokenLocator extends LineLocator {

  getDelta(item: MaterialItem, context: LocationContext) {
    const player = item.location.player!
    const index = getComputedIndex(context, player)
    if (index === 0 || index === 3) {
      return { y: -0.1 }
    } else {
      return { y: 0.1 }
    }
  }

  getDeltaMax(item: MaterialItem, context: LocationContext) {
    const player = item.location.player!
    const index = getComputedIndex(context, player)
    if (index === 0 || index === 3) {
      return { y: -10 }
    } else {
      return { y: 10 }
    }
  }

  getCoordinates(item: MaterialItem, context: LocationContext) {
    const player = item.location.player!
    const index = getComputedIndex(context, player)
    const coordinates = playerDoneCompositionLocator.getCoordinates(item, context)
    if (index === 0 || index === 3) {
      coordinates.y -= fireworkDescription.height - 1
    } else {
      coordinates.y += fireworkDescription.height - 1
    }

    if (index === 0 || index === 1) {
      coordinates.x -= 1.5
    } else {
      coordinates.x += 1.5
    }

    return coordinates
  }
}

export const playerApplauseTokenLocator = new PlayerApplauseTokenLocator()