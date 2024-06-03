/** @jsxImportSource @emotion/react */
import { ItemLocator } from '@gamepark/react-game'

export class FireworkStoreLocator extends ItemLocator {
  coordinates = { x: 0, y: 0 }
}

export const fireworkStoreLocator = new FireworkStoreLocator();