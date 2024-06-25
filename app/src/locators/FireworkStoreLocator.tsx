/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { SearchPileHelper } from '@gamepark/spring-festival/rules/helper/SearchPileHelper'

export class FireworkStoreLocator extends ItemLocator {
  getPosition() {
    return { x: 0, y: 0, z: 0 }
  }

  getRotateZ(item: MaterialItem, context: ItemContext): number {
    const myPile = new SearchPileHelper(context.rules.game, context.player ?? context.rules.players[0]).pile
    return ((item.location.rotation - 1)  * -90) + ((myPile - item.location.rotation) * -90) + (context.rules.players.length === 2? 45: 0)
  }
}

export const fireworkStoreLocator = new FireworkStoreLocator();
