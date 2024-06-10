/** @jsxImportSource @emotion/react */
import { DeckLocator, ItemContext, MaterialContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'

export class FireworkStorePileLocator extends DeckLocator {
  parentItemType = MaterialType.FireworksStore
  delta = { y: -0.1 }

  getDelta(_item: MaterialItem, context: ItemContext): Partial<Coordinates> {
    const storeLocation = this.getStoreRotation(context)
    switch (storeLocation) {
      case 0:
        return { y: -0.1 }
      case 1:
        return { x: -0.1 }
      case 2:
        return { y: 0.1 }
      default:
        return { x: 0.1 }

    }
  }

  getPositionOnParent(location: Location, _context: ItemContext): Coordinates {
    const angle = this.getAngle(location.id)
    const radius = 30.1
    const x = Math.cos(angle * Math.PI / 180) * radius + 50
    const y = -Math.sin(angle * Math.PI / 180) * radius + 50
    const z = 0.05
    return { x, y, z }
  }

  getStoreRotation(context: MaterialContext): number {
    return context.rules
      .material(MaterialType.FireworksStore)
      .getItem()!
      .location
      .rotation
  }

  getAngle(id: number) {
    return (-45 - id * 360 / 4)
  }

  getRotateZ(item: MaterialItem): number {
    const { location } = item
    switch (location.id) {
      case 1:
        return 45
      case 2:
        return 135
      case 3:
        return 225
      case 4:
      default:
        return 315

    }
  }

}

export const fireworkStorePileLocator = new FireworkStorePileLocator()
