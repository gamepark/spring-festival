/** @jsxImportSource @emotion/react */
import { BoardDescription, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { Memory } from '@gamepark/spring-festival/rules/Memory'
import RocketStore from '../images/dispenser.jpg'

class FireworkStoreDescription extends BoardDescription {
  height = 19
  width = 19
  borderRadius = 20

  image = RocketStore

  staticItem = {
    location: {
      type: LocationType.FireworksStore
    }
  }

  getRotateZ(_item: MaterialItem, context: ItemContext): number {
    const { rules } = context
    const boardRotation = rules.remind(Memory.StoreRotation) ?? 0
    return boardRotation * 45
  }
}

export const fireworkStoreDescription = new FireworkStoreDescription()

