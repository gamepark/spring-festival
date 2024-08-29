/** @jsxImportSource @emotion/react */
import { ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex } from '../utils/PlayerPosition'
import { playerDoneCompositionLocator } from './PlayerDoneCompositionLocator'

export class PlayerApplauseTokenLocator extends ListLocator {

  getGap(location: Location, context: MaterialContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)
    if (index === 0 || index === 3) {
      return { y: -0.5 }
    } else {
      return { y: 0.5 }
    }
  }

  getMaxGap(location: Location, context: MaterialContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)
    if (index === 0 || index === 3) {
      return { y: -4.3 }
    } else {
      return { y: 4.3 }
    }
  }

  getCoordinates(location: Location, context: MaterialContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)
    const coordinates = playerDoneCompositionLocator.getCoordinates(location, context)
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