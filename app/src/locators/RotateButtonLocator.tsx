import { ItemLocator } from '@gamepark/react-game'
import { RotateButtonDescription } from './description/RotateButtonDescription'

export class RotateButtonLocator extends ItemLocator {
  locationDescription = new RotateButtonDescription()
  position = { x: 0, y: 0 }
}

export const rotateButtonLocator = new RotateButtonLocator()