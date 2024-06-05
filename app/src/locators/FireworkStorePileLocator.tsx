/** @jsxImportSource @emotion/react */
import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem, Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'

export class FireworkStorePileLocator extends DeckLocator {
  parentItemType = MaterialType.FireworksStore

  getCoordinates(item: MaterialItem, _context: ItemContext): Coordinates {
    console.log(item.location.id)
    const coordinates = { x: 50, y: 50, z: 0.05 }
    switch (item.location.id) {
      case 1:
        coordinates.x -= 0
        coordinates.y -= 0
        break
      case 2:
        coordinates.x += 25
        coordinates.y -= 25
        break
      case 3:
        coordinates.x += 25
        coordinates.y += 25
        break
      case 4:
        coordinates.x -= 25
        coordinates.y += 25
        break
    }

    return coordinates
  }

  getParentItem(location: Location, context: ItemContext): MaterialItem | undefined {
    const parentItem = super.getParentItem(location, context)
    console.log(parentItem)
    return parentItem
  }

}

export const fireworkStorePileLocator = new FireworkStorePileLocator();