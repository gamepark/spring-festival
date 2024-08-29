/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentSize, DropAreaDescription, LocationContext, MaterialContext } from '@gamepark/react-game'
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

  getExtraCss(location: Location, _context: LocationContext) {
    if (location.x !== undefined && location.y !== undefined) {
      return
    }
    // TODO: Move it to specific location ?
    return css`
      //background-color: rgba(0, 128, 0, 0.5);
      //border: 0.1em solid green;
      pointer-events: none;
    `

  }

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