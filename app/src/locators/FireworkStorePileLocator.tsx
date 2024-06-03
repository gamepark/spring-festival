/** @jsxImportSource @emotion/react */
import { ItemContext, PileLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'

export class FireworkStorePileLocator extends PileLocator {
  parentItemType = MaterialType.FireworksStore
  coordinates = { x: 0, y: 0, z: 0 }

  getParentItem(_location: Location, context: ItemContext) {
    return context.rules.material(MaterialType.FireworksStore).getItem()!
  }

}

export const fireworkStorePileLocator = new FireworkStorePileLocator();