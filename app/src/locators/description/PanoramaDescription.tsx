/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentSize, ItemContext, LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { isMoveItemType, Location, MaterialMove, XYCoordinates } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { AvailableSpaceHelper } from '@gamepark/spring-festival/rules/helper/AvailableSpaceHelper'
import { PlayerBoundaries } from '@gamepark/spring-festival/rules/helper/PlayerBoundaries'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import equal from 'fast-deep-equal'
import { fireworkDescription } from '../../material/FireworkDescription'
import {
  getComputedIndex,
  getFourPlayerCoordinates,
  getThreePlayerCoordinates,
  getTwoPlayerCoordinates,
  gridHeight,
  gridMinX,
  gridMinY,
  gridWidth
} from '../../utils/PlayerPosition'

export class PanoramaDescription extends LocationDescription {
  height = fireworkDescription.height
  width = fireworkDescription.width
  borderRadius = fireworkDescription.borderRadius

  isAlwaysVisible(_location: Location, context: MaterialContext): boolean {
    return context.rules.game.rule?.id === RuleId.PlaceFirework
  }

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

  getSize(location: Location, context: MaterialContext): ComponentSize {
    if (location.x !== undefined && location.y !== undefined) {
      return super.getSize(location, context)
    } else {
      // TODO: Move it to specific location ?
      return {
        height: (fireworkDescription.height + 0.2) * gridHeight(context.rules.players.length),
        width: (fireworkDescription.width + 0.2) * gridWidth
      }
    }
  }

  getCoordinates(location: Location, context: LocationContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)

    if (location.x !== undefined && location.y !== undefined) {
      const delta = this.computeDelta(index, player, context)

      const coordinates = this.getPanoramaPosition(index, context.rules.players)
      coordinates.x += (location.x! + (delta?.x ?? 0)) * (fireworkDescription.width + 0.2)
      coordinates.y += (location.y! + (delta?.y ?? 0)) * (fireworkDescription.height + 0.2)
      coordinates.z = 5

      return coordinates
    } else {
      // TODO: Move it to specific location ?
      return this.getPlayerAreaPosition(index, context.rules.players)
    }
  }

  computeDelta(index: number, player: PlayerSymbol, context: LocationContext) {
    const boundaries = new PlayerBoundaries(context.rules.game, player).boudaries
    const delta: Partial<XYCoordinates> = {}
    switch (index) {
      case 0:
        delta.x = this.computeXForLeftPlayers(boundaries, true)
        delta.y = this.computeYForBottomPlayer(boundaries, context, true)
        return delta
      case 1:
        delta.x = this.computeXForLeftPlayers(boundaries)
        delta.y = this.computeYForTopPlayer(boundaries, context)
        return delta
      case 2:
        delta.x = this.computeXForRightPlayers(boundaries)
        delta.y = this.computeYForTopPlayer(boundaries, context)
        return delta
      default:
        delta.x = this.computeXForRightPlayers(boundaries)
        delta.y = this.computeYForBottomPlayer(boundaries, context)
        return delta
    }
  }

  computeYForTopPlayer(boundaries: any, context: LocationContext) {
    const yLimit = gridMinY(context.rules.players.length) - 0.5

    const overflowTop = boundaries.minY < -yLimit
    const overflowBottom = boundaries.maxY >= yLimit
    let y = 0


    if (overflowBottom) {
      y = yLimit - boundaries.maxY
    } else if (overflowTop) {
      y = Math.min(-boundaries.minY - yLimit, yLimit - boundaries.maxY)
    }


    return y
  }

  computeYForBottomPlayer(boundaries: any, context: LocationContext, margin?: boolean) {
    const yLimit = gridMinY(context.rules.players.length) - (margin ? 1.5 : 0.5)


    const overflowTop = boundaries.minY < -yLimit
    const overflowBottom = boundaries.maxY > yLimit
    let y = 0

    if (overflowTop) {
      y = -yLimit - boundaries.minY
    } else if (overflowBottom) {
      console.log(boundaries.maxY, yLimit, boundaries.minY)
      y = Math.max(-boundaries.maxY + yLimit, -yLimit - boundaries.minY)
    }

    return y
  }

  computeXForRightPlayers(boundaries: any) {
    const xLimit = gridMinX - 0.5

    const overflowLeft = boundaries.minX < -xLimit
    const overflowRight = boundaries.maxX > xLimit
    let x = 0

    if (overflowLeft) {
      x = -xLimit - boundaries.minX
    } else if (overflowRight) {
      x = Math.max(-boundaries.maxX + xLimit, -xLimit - boundaries.minX)
    }

    return x
  }

  computeXForLeftPlayers(boundaries: any, margin?: boolean) {

    const xLimit = gridMinX - (margin ? 1.5 : 0.5)

    const overflowLeft = boundaries.minX < -xLimit
    const overflowRight = boundaries.maxX > xLimit
    let x = 0

    if (overflowRight) {
      x = xLimit - boundaries.maxX
    } else if (overflowLeft) {
      x = Math.min(-boundaries.minX - xLimit, xLimit - boundaries.maxX)
    }

    return x
  }

  getLocations(context: MaterialContext): Location[] {
    const locations: Location[] = context.rules.players.map((p) => ({
      type: LocationType.Panorama,
      player: p
    }))
    if (!context.player) return locations

    locations.push(
      ...new AvailableSpaceHelper(context.rules.game, context.player).availableSpaces
    )

    return locations
  }

  getPlayerAreaPosition(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { x: -2})
      case 3:
        return getThreePlayerCoordinates(index, { y: -2, x: -2 })
      default:
        return getFourPlayerCoordinates(index, { y: -2, x: -2 })
    }
  }

  canDrop(move: MaterialMove, location: Location, context: ItemContext) {
    if (location.x === undefined && location.y === undefined) return false
    return super.canDrop(move, location, context)
  }


  getPanoramaPosition(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { x: -2})
      case 3:
        return getThreePlayerCoordinates(index, { y: -2, x: -2 })
      default:
        return getFourPlayerCoordinates(index, { y: -2, x: -2 })
    }
  }

  canShortClick(move: MaterialMove, location: Location, context: MaterialContext): boolean {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama) return false
    if (context.rules.material(MaterialType.Firework).getItem(move.itemIndex)?.location.type === LocationType.PlayerHand) return false
    return equal(move.location, location)
  }
}