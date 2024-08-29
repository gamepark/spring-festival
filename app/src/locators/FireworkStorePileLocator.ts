/** @jsxImportSource @emotion/react */
import { DeckLocator, ItemContext, MaterialContext } from '@gamepark/react-game'
import { Coordinates, Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SearchPileHelper } from '@gamepark/spring-festival/rules/helper/SearchPileHelper'
import { fireworkStoreLocator } from './FireworkStoreLocator'

export class FireworkStorePileLocator extends DeckLocator {
  parentItemType = MaterialType.FireworksStore

  getGap(_location: Location, context: MaterialContext): Partial<Coordinates> {
    const storeLocation = new SearchPileHelper(context.rules.game, context.player ?? context.rules.players[0]).pile
    const twoPlayer = context.rules.players.length === 2
    switch (storeLocation) {
      case 1:
        return twoPlayer? { x: -0.05 }: { y: -0.05, x: -0.05 }
      case 2:
        return twoPlayer? { y: -0.05 }:{ x: 0.05, y: -0.05 }
      case 3:
        return twoPlayer? { x: 0.05 }: { y: 0.05, x: 0.05 }
      default:
        return twoPlayer? { y: 0.05 }: { x: -0.05, y: 0.05 }
    }
  }

  getPositionOnParent(location: Location, _context: ItemContext) {
    const angle = this.getAngle(location.id)
    const radius = 30.1
    const x = Math.cos(angle * Math.PI / 180) * radius + 50
    const y = -Math.sin(angle * Math.PI / 180) * radius + 50
    return { x, y }
  }

  getAngle(id: number) {
    return (-45 - id * 360 / 4)
  }

  getRotateZ(location: Location, context: MaterialContext) {
    const { rules } = context
    const parentRotation = rules.material(this.parentItemType).getItem(location.parent!)!
    return -fireworkStoreLocator.getRotateZ(parentRotation.location, context)
  }

  navigationSorts = []

}

export const fireworkStorePileLocator = new FireworkStorePileLocator()
