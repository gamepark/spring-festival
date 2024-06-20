/** @jsxImportSource @emotion/react */
import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SearchPileHelper } from '@gamepark/spring-festival/rules/helper/SearchPileHelper'
import { fireworkStoreLocator } from './FireworkStoreLocator'

export class FireworkStorePileLocator extends DeckLocator {
  parentItemType = MaterialType.FireworksStore
  delta = { y: -0.1 }

  getDelta(_item: MaterialItem, context: ItemContext): Partial<Coordinates> {
    const storeLocation = new SearchPileHelper(context.rules.game, context.player ?? context.rules.players[0]).pile
    const twoPlayer = context.rules.players.length === 2
    switch (storeLocation) {
      case 1:
        return twoPlayer? { x: -0.1 }: { y: -0.1, x: -0.1 }
      case 2:
        return twoPlayer? { y: -0.1 }:{ x: 0.1, y: -0.1 }
      case 3:
        return twoPlayer? { x: 0.1 }: { y: 0.1, x: 0.1 }
      default:
        return twoPlayer? { y: 0.1 }: { x: -0.1, y: 0.1 }
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

  getAngle(id: number) {
    return (-45 - id * 360 / 4)
  }

  getRotateZ(item: MaterialItem, context: ItemContext): number {
    const { rules } = context
    const parentRotation = rules.material(this.parentItemType).getItem(item.location.parent!)!
    return -fireworkStoreLocator.getRotateZ(parentRotation, context)
  }

}

export const fireworkStorePileLocator = new FireworkStorePileLocator()
