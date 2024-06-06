/** @jsxImportSource @emotion/react */
import { getRelativePlayerIndex, HandLocator, ItemContext, LocationContext, MaterialContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'

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

const getTwoPlayerCoordinates = (index: number) => {
  if (index === 0) return { x: -30, y: 25, z: 0 }
  return { x: 30, y: -20, z: 0 }
}

const getThreePlayerCoordinates = (index: number) => {
  if (index === 0) return { x: -30, y: 25, z: 0 }
  if (index === 1) return { x: -30, y: -20, z: 0 }
  if (index === 2) return { x: 30, y: -20, z: 0 }
  if (index === 3) return { x: 30, y: 25, z: 0 }
  return { x: 30, y: -20, z: 0 }
}

const getComputedIndex = (context: MaterialContext, player: PlayerSymbol) => {
  const { players } = context.rules
  const index = getRelativePlayerIndex(context, player)
  if (players.length === 2 && index === 1) return 2
  if (players.length === 3) {
    const baseIndex = players.findIndex((p) => p === player)
    if (baseIndex === 0 && index === 1) return 2
    if (baseIndex === 0 && index === 2) return 3
    if (baseIndex === 1 && index === 2) return 3
  }
  return index

}

const getFourPlayerCoordinates = (index: number) => {
  if (index === 0) return { x: -30, y: 25, z: 0 }
  if (index === 1) return { x: -30, y: -20, z: 0 }
  if (index === 2) return { x: 30, y: -20, z: 0 }
  return { x: 30, y: 25, z: 0 }
}

export const playerHandLocator = new PlayerHandLocator()
