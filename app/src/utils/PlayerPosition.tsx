import { getRelativePlayerIndex, MaterialContext } from '@gamepark/react-game'
import { PlayerSymbol } from "@gamepark/spring-festival/PlayerSymbol"

const baseY = 12
const baseX = 27.5

export const getTwoPlayerCoordinates = (index: number, { x, y }: Partial<{ x? : number, y?: number}> = {}) => {

  if (index === 0) return { x: -baseX + (x ?? 0), y: 0 - (y ?? 0), z: 0 }
  return { x: baseX - (x ?? 0), y: -0 + (y ?? 0), z: 0 }
}

export const getThreePlayerCoordinates = (index: number, { x, y }: Partial<{ x? : number, y?: number}> = {}) => {
  if (index === 0) return { x: -baseX + (x ?? 0), y: baseY - (y ?? 0), z: 0 }
  if (index === 1) return { x: -baseX + (x ?? 0), y: -baseY + (y ?? 0), z: 0 }
  return { x: baseX - (x ?? 0), y: -baseY + (y ?? 0), z: 0 }
}

export const getComputedIndex = (context: MaterialContext, player: PlayerSymbol) => {
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

export const getFourPlayerCoordinates = (index: number, { x, y }: Partial<{ x? : number, y?: number}> = {}) => {
  if (index === 0) return { x: -baseX + (x ?? 0), y: baseY - (y ?? 0), z: 0 }
  if (index === 1) return { x: -baseX + (x ?? 0), y: -baseY + (y ?? 0), z: 0 }
  if (index === 2) return { x: baseX - (x ?? 0), y: -baseY + (y ?? 0), z: 0 }
  return { x: baseX - (x ?? 0), y: baseY - (y ?? 0), z: 0 }
}
export const gridHeight = (players: number) => players === 2? 9: 5
export const gridWidth = 7
export const gridMinY = (players: number) => Math.floor(gridHeight(players) / 2)
export const gridMinX = Math.floor(gridWidth / 2)