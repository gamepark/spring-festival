import { ItemLocator } from '@gamepark/react-game'

export class SignLocator extends ItemLocator {
  position = {
    x: 0,
    y: -16,
    z: 0.05
  }
}

export const signLocator = new SignLocator()