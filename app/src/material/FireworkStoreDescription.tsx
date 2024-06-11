/** @jsxImportSource @emotion/react */
import { BoardDescription } from '@gamepark/react-game'
import { isCustomMoveType, isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import RocketStore from '../images/dispenser.jpg'

class FireworkStoreDescription extends BoardDescription {
  height = 19
  width = 19
  borderRadius = 20

  image = RocketStore

  canShortClick(move: MaterialMove): boolean {
    return (
      isCustomMoveType(CustomMoveType.RotateStore)(move) ||
      (isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation !== undefined)
    )
  }
}

export const fireworkStoreDescription = new FireworkStoreDescription()

