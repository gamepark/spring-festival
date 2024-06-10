/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'

export class FireworkStoreLocator extends ItemLocator {
  getPosition() {
    return { x: 0, y: 0, z: 0 }
  }

  getRotateZ(item: MaterialItem, context: ItemContext): number {
    return item.location.rotation * 90 + this.getAdditionalRotationForCurrentPlayer(context)
  }

  getAdditionalRotationForCurrentPlayer(context: ItemContext) {
    const players = context.rules.players.length
    const index = context.rules.players.findIndex((p) => p === context.player)
    if (index === -1) return 0
    if (players === 2 && index === 1) {
      return 180
    }

    if (players === 3) {
      if (index === 1) return 90
      if (index === 2) return 180
    }

    if (players === 4) {
      if (index === 1) return 90
      if (index === 2) return 180
      if (index === 3) return -90
    }

    return 0
  }
}

export const fireworkStoreLocator = new FireworkStoreLocator();
