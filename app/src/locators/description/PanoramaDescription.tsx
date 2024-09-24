/** @jsxImportSource @emotion/react */
import { ComponentSize, DropAreaDescription, MaterialContext } from '@gamepark/react-game'
import { isMoveItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import isEqual from 'lodash/isEqual'
import { fireworkDescription } from '../../material/FireworkDescription'
import { gridHeight, gridWidth } from '../../utils/PlayerPosition'

export class PanoramaDescription extends DropAreaDescription {
  height = fireworkDescription.height
  width = fireworkDescription.width
  borderRadius = fireworkDescription.borderRadius

  getLocationSize(location: Location, context: MaterialContext): ComponentSize {
    if (location.x !== undefined && location.y !== undefined) {
      return super.getLocationSize(location, context)
    } else {
      // TODO: Move it to specific location ?
      return {
        height: (fireworkDescription.height + 0.2) * gridHeight(context.rules.players.length),
        width: (fireworkDescription.width + 0.2) * gridWidth
      }
    }
  }

  isMoveToLocation(move: MaterialMove, location: Location, context: MaterialContext) {
    if (location.x === undefined && location.y === undefined) return false
    return super.isMoveToLocation(move, location, context)
  }

  canShortClick(move: MaterialMove, location: Location, context: MaterialContext): boolean {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama) return false
    if (context.rules.material(MaterialType.Firework).getItem(move.itemIndex)?.location.type === LocationType.PlayerHand) return false
    return isEqual(move.location, location)
  }
}