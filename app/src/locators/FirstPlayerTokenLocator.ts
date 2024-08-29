/** @jsxImportSource @emotion/react */
import { Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex } from '../utils/PlayerPosition'
import { playerCompositionLocator } from './PlayerCompositionLocator'

export class FirstPlayerTokenLocator extends Locator {


  getCoordinates(location: Location, context: MaterialContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)
    const coordinates = playerCompositionLocator.getCoordinates(location, context)
    if (index === 0 || index === 3) {
      coordinates.y -= fireworkDescription.height
    } else {
      coordinates.y += (fireworkDescription.height + 0.1) * 4
    }

    if (index === 0 || index === 1) {
      coordinates.x -= 1.2
    } else {
      coordinates.x += 1
    }

    coordinates.z = 5

    return coordinates
  }
}

export const firstPlayerTokenLocator = new FirstPlayerTokenLocator()