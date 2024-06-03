/** @jsxImportSource @emotion/react */
import { ItemLocator } from '@gamepark/react-game'

export class RocketStoreLocator extends ItemLocator {
  coordinates = { x: 0, y: 0 }
}

export const rocketStoreLocator = new RocketStoreLocator();