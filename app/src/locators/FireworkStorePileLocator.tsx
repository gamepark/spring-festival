/** @jsxImportSource @emotion/react */
import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { Memory } from '@gamepark/spring-festival/rules/Memory'

export class FireworkStorePileLocator extends DeckLocator {
  parentItemType = MaterialType.FireworksStore
  delta = { y: -0.1 }

  getPositionOnParent(location: Location, _context: ItemContext): Coordinates {
    const angle = this.getAngle(location.id + ((_context.rules.remind(Memory.StoreRotation) ?? 0) * 45))
    const radius = 30.1
    const x = Math.cos(angle * Math.PI / 180) * radius + 50
    const y = -Math.sin(angle * Math.PI / 180) * radius + 50
    const z = 0.05
    return { x, y, z }
  }

  getAngle(id: number) {
    return -45 - id * 360 / 4
  }

  getRotateZ(item: MaterialItem, _context: ItemContext): number {
    const { location } = item
    switch (location.id) {
      case 1:
        return 45 + ((_context.rules.remind(Memory.StoreRotation) ?? 0) * 90)
      case 2:
        return 135 + ((_context.rules.remind(Memory.StoreRotation) ?? 0) * 90)
      case 3:
        return 225 + ((_context.rules.remind(Memory.StoreRotation) ?? 0) * 90)
      case 4:
      default:
        return 315 + ((_context.rules.remind(Memory.StoreRotation) ?? 0) * 90)

    }
  }

}

export const fireworkStorePileLocator = new FireworkStorePileLocator();
