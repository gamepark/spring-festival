/** @jsxImportSource @emotion/react */
import { HandLocator, ItemContext, LocationContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates } from '../utils/PlayerPosition'

export class PlayerHandLocator extends HandLocator {
  getCoordinates(location: Location, context: LocationContext) {
    const index = getComputedIndex(context, location.player!)
    return getHandCoordinates(index, context.rules.players)
  }

  getBaseAngle(item: MaterialItem, context: ItemContext): number {
    const index = getComputedIndex(context, item.location.player!)
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
      return getTwoPlayerCoordinates(index)
    case 3:
      return getThreePlayerCoordinates(index)
    default:
      return getFourPlayerCoordinates(index)
  }
}
export const playerHandLocator = new PlayerHandLocator()
