/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { getComputedIndex } from '../utils/PlayerPosition'
import { PanoramaDescription } from './description/PanoramaDescription'

export class PanoramaLocator extends ItemLocator {
  locationDescription = new PanoramaDescription()
  
  getPosition(item: MaterialItem, context: ItemContext): Coordinates {
    const coordinates = this.locationDescription.getCoordinates(item.location, context)
    coordinates.z = 2.5
    return coordinates
  }

  getRotateZ(item: MaterialItem, context: ItemContext): number {
    const index = getComputedIndex(context, item.location.player!)
    if (index === 1 || index === 2) {
      return 0
    }

    return 0
  }
}

export const panoramaLocator = new PanoramaLocator()