/** @jsxImportSource @emotion/react */
import { ItemLocator } from '@gamepark/react-game'

export class FireworkStoreLocator extends ItemLocator {
  getPosition() {
    return { x: 0, y: 0, z: 0 }
  }
}

export const fireworkStoreLocator = new FireworkStoreLocator();
