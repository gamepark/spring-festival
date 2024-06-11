/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { Memory } from '@gamepark/spring-festival/rules/Memory'

export class FireworkStoreLocator extends ItemLocator {
  getPosition() {
    return { x: 0, y: 0, z: 0 }
  }

  getRotateZ(item: MaterialItem, context: ItemContext): number {
    return (item.location.rotation - 1) * -90 + this.getAdditionalRotationForCurrentPlayer(context)
  }

  getAdditionalRotationForCurrentPlayer(context: ItemContext) {
    const { rules } = context
    const position = rules.game.players.findIndex(p => context.player === p)
    const starting = rules.remind(Memory.StartPlayer)
    const startingPosition = rules.game.players.findIndex(p => p === starting)
    const distance = position - startingPosition
    return distance * -90
  }
}

export const fireworkStoreLocator = new FireworkStoreLocator();
