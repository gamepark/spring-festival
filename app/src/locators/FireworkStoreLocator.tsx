/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { SearchPileHelper } from '@gamepark/spring-festival/rules/helper/SearchPileHelper'
import { FireworkStoreDescription } from './description/FireworkStoreDescription'

export class FireworkStoreLocator extends ItemLocator {
  locationDescription = new FireworkStoreDescription()
  position = { x: 0, y: 0, z: 0 }

  getRotateZ(item: MaterialItem, context: ItemContext): number {
    const distanceFromZero = new SearchPileHelper(context.rules.game, context.player ?? context.rules.players[0]).distanceFromPositionZero
    return ((item.location.rotation - 1)  * -90) + (distanceFromZero * -90) + (context.rules.players.length === 2? 45: 0)
  }
}

export const fireworkStoreLocator = new FireworkStoreLocator();
