/** @jsxImportSource @emotion/react */
import { BoardDescription, ItemContext } from '@gamepark/react-game'
import { isCustomMoveType, MaterialItem, MaterialMove } from '@gamepark/rules-api'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { Memory } from '@gamepark/spring-festival/rules/Memory'
import RocketStore from '../images/dispenser.jpg'

class FireworkStoreDescription extends BoardDescription {
  height = 19
  width = 19
  borderRadius = 20

  image = RocketStore

  getRotateZ(_item: MaterialItem, context: ItemContext): number {
    const { rules } = context
    const boardRotation = rules.remind(Memory.StoreRotation)
    return boardRotation * 90 + this.getAdditionalRotationForCurrentPlayer(context)
  }

  canShortClick(move: MaterialMove): boolean {
    return isCustomMoveType(CustomMoveType.RotateStore)(move)
  }

  getAdditionalRotationForCurrentPlayer(context: ItemContext) {
    const players = context.rules.players.length
    const index = context.rules.players.findIndex((p) => p === context.player)
    if (index === -1) return 0
    if (players === 2 && index === 1) {
      return 180
    }

    if (players === 3) {
      if (index === 1) return 90
      if (index === 2) return 180
    }

    if (players === 4) {
      if (index === 1) return 90
      if (index === 2) return 180
      if (index === 3) return -90
    }

    return 0
  }
}

export const fireworkStoreDescription = new FireworkStoreDescription()

