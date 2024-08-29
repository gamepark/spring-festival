/** @jsxImportSource @emotion/react */
import { HandLocator, LocationContext, MaterialContext } from '@gamepark/react-game'
import { Coordinates, Location } from '@gamepark/rules-api'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates } from '../utils/PlayerPosition'

export class PlayerHandLocator extends HandLocator {
  getCoordinates(location: Location, context: LocationContext) {
    const index = getComputedIndex(context, location.player!)
    const coordinates = getHandCoordinates(index, context.rules.players)
    coordinates.z = 0.05
    return coordinates
  }

  getBaseAngle(location: Location, context: MaterialContext): number {
    const index = getComputedIndex(context, location.player!)
    if (index === 1 || index === 2) {
      return 180
    }

    return 0
  }
}

const getHandCoordinates = (index: number, players: PlayerSymbol[]): Coordinates => {
  const count = players.length
  switch (count) {
    case 2:
      return getTwoPlayerCoordinates(index, { y: -21, x: 5})
    case 3:
      return getThreePlayerCoordinates(index, { y: -10, x: 5 })
    default:
      return getFourPlayerCoordinates(index, { y: -10, x: 5 })
  }
}
export const playerHandLocator = new PlayerHandLocator()
