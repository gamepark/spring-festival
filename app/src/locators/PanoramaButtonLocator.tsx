import { ItemLocator } from '@gamepark/react-game'
import { PanoramaButtonDescription } from './description/PanoramaButtonDescription'

export class PanoramaButtonLocator extends ItemLocator {
  locationDescription = new PanoramaButtonDescription()
  position = { x: 0, y: 0 }
}

export const panoramaButtonLocator = new PanoramaButtonLocator()