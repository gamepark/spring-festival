import { ItemLocator } from '@gamepark/react-game'
import { RotateStoreButtonDescription } from './description/RotateStoreButtonDescription'

export class RotateStoreButtonLocator extends ItemLocator {
  locationDescription = new RotateStoreButtonDescription()
  position = { x: 0, y: 0 }
}

export const rotateStoreButtonLocator = new RotateStoreButtonLocator()