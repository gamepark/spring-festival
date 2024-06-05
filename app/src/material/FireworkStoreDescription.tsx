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
    const boardRotation = rules.remind(Memory.StoreRotation) ?? 0
    return boardRotation * 90
  }

  canShortClick(move: MaterialMove): boolean {
    return isCustomMoveType(CustomMoveType.RotateStore)(move)
  }
}

export const fireworkStoreDescription = new FireworkStoreDescription()

