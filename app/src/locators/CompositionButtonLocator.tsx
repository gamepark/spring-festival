import { ItemLocator } from '@gamepark/react-game'
import { CompositionButtonDescription } from './description/CompositionButtonDescription'

export class CompositionButtonLocator extends ItemLocator {
  locationDescription = new CompositionButtonDescription()
  position = { x: 0, y: 0 }
}

export const compositionButtonLocator = new CompositionButtonLocator()