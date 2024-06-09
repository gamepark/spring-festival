/** @jsxImportSource @emotion/react */
import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { Memory } from '@gamepark/spring-festival/rules/Memory'
import { fireworkStoreDescription } from '../material/FireworkStoreDescription'

export class FireworkStorePileLocator extends DeckLocator {
  parentItemType = MaterialType.FireworksStore
  delta = { y: -0.1 }

  getPositionOnParent(location: Location, context: ItemContext): Coordinates {
    const angle = this.getAngle(location.id + ((context.rules.remind(Memory.StoreRotation)) * 45), context)
    const radius = 30.1
    const x = Math.cos(angle * Math.PI / 180) * radius + 50
    const y = -Math.sin(angle * Math.PI / 180) * radius + 50
    const z = 0.05
    return { x, y, z }
  }

  getAngle(id: number, context: ItemContext) {
    return (-45 - id * 360 / 4) + fireworkStoreDescription.getAdditionalRotationForCurrentPlayer(context)
  }

  getRotateZ(item: MaterialItem, context: ItemContext): number {
    const { location } = item
    switch (location.id) {
      case 1:
        return 45 + ((context.rules.remind(Memory.StoreRotation)) * 90) - fireworkStoreDescription.getAdditionalRotationForCurrentPlayer(context)
      case 2:
        return 135 + ((context.rules.remind(Memory.StoreRotation)) * 90) - fireworkStoreDescription.getAdditionalRotationForCurrentPlayer(context)
      case 3:
        return 225 + ((context.rules.remind(Memory.StoreRotation)) * 90) - fireworkStoreDescription.getAdditionalRotationForCurrentPlayer(context)
      case 4:
      default:
        return 315 + ((context.rules.remind(Memory.StoreRotation)) * 90) - fireworkStoreDescription.getAdditionalRotationForCurrentPlayer(context)

    }
  }

}

export const fireworkStorePileLocator = new FireworkStorePileLocator();
