/** @jsxImportSource @emotion/react */
import { getRelativePlayerIndex, HandLocator, ItemContext, LocationContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'

export class PlayerHandLocator extends HandLocator {
  getCoordinates(location: Location, context: LocationContext) {
    const index = getRelativePlayerIndex(context, location.player)
    return getHandCoordinates(index, context.rules.players.length)
  }

  getBaseAngle(item: MaterialItem, context: ItemContext): number {
    const index = getRelativePlayerIndex(context, item.location.player)
    if (index === 1 || index === 2) {
      return 180
    }

    return 0
  }
}

const getHandCoordinates = (index: number, players: number): Coordinates => {
  switch (players) {
    case 2:
    default:
      return getTwoPlayerCoordinates(index)
  }
}

const getTwoPlayerCoordinates = (index: number) => {
  if (index === 0) return { x: -30, y: 25, z: 0}
  return { x: 30, y: -20, z: 0 }
}

export const playerHandLocator = new PlayerHandLocator();
