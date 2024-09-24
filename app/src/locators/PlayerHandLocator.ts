/** @jsxImportSource @emotion/react */
import { HandLocator, LocationContext, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates } from '../utils/PlayerPosition'

export class PlayerHandLocator extends HandLocator {
  getCoordinates(location: Location, context: LocationContext) {
    const index = getComputedIndex(context, location.player!)
    switch (context.rules.players.length) {
      case 2:
        return getTwoPlayerCoordinates(index, { y: -21, x: 5 })
      case 3:
        return getThreePlayerCoordinates(index, { y: -10, x: 5 })
      default:
        return getFourPlayerCoordinates(index, { y: -10, x: 5 })
    }
  }

  getBaseAngle(location: Location, context: MaterialContext): number {
    const index = getComputedIndex(context, location.player!)
    return index === 1 || index === 2 ? 180 : 0
  }
}

export const playerHandLocator = new PlayerHandLocator()
