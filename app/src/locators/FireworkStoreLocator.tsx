/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { SearchPileHelper } from '@gamepark/spring-festival/rules/helper/SearchPileHelper'

export class FireworkStoreLocator extends ItemLocator {
  getPosition() {
    return { x: 0, y: 0, z: 0 }
  }

  getRotateZ(_item: MaterialItem, context: ItemContext): number {
    return (new SearchPileHelper(context.rules.game, context.player ?? context.rules.players[0]).pile - 1) * - 90
  }
}

export const fireworkStoreLocator = new FireworkStoreLocator();
