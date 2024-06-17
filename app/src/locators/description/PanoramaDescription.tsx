/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentSize, ItemContext, LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialMove, XYCoordinates } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { AvailableSpaceHelper } from '@gamepark/spring-festival/rules/helper/AvailableSpaceHelper'
import { PlayerBoundaries } from '@gamepark/spring-festival/rules/helper/PlayerBoundaries'
import { fireworkDescription } from '../../material/FireworkDescription'
import {
  getComputedIndex,
  getFourPlayerCoordinates,
  getThreePlayerCoordinates,
  getTwoPlayerCoordinates,
  gridHeight, gridMinX, gridMinY,
  gridWidth
} from '../../utils/PlayerPosition'

export class PanoramaDescription extends LocationDescription {
  height = fireworkDescription.height
  width = fireworkDescription.width

  isAlwaysVisible(location: Location): boolean {
    return location.x === undefined && location.y === undefined
  }

  getExtraCss(location: Location, _context: LocationContext) {
    if (location.x !== undefined && location.y !== undefined) {
      return
    }
    // TODO: Move it to specific location ?
    return css`
      background-color: rgba(0, 128, 0, 0.5);
      border: 0.1em solid green;
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
    const height = gridHeight(context.rules.players.length)
    const width = gridWidth
    const minY = gridMinY(context.rules.players.length)
    const minX = gridMinX
    const isTwoPlayers = context.rules.players.length === 2
    switch (index) {
      case 0:
        delta.x = boundaries.maxX > minX ? -(boundaries.maxX - minX): (boundaries.deltaX < width && boundaries.minX < -minX? -(boundaries.minX + minX): (boundaries.deltaX >= width? Math.min(0, boundaries.maxX - minX): 0))
        if (isTwoPlayers && (boundaries.deltaX >= width || (boundaries.maxX >= minX))) delta.x -= 1
        delta.y = boundaries.minY < -minY ? (-minY - boundaries.minY): (boundaries.deltaY < height && boundaries.maxY > minY ? -(boundaries.maxY - minY): (boundaries.deltaY >= height? Math.min(0, -minY - boundaries.minY): 0))
        return delta
      case 1:
        delta.x = boundaries.maxX > minX ? -(boundaries.maxX - minX): (boundaries.deltaX < width && boundaries.minX < -minX? -(boundaries.minX + minX): (boundaries.deltaX >= width? Math.min(0, boundaries.maxX - minX): 0))
        delta.y = boundaries.maxY > minY ? -(boundaries.maxY - minY): (boundaries.deltaY < height && boundaries.minY < -minY ? (boundaries.minY + minY): (boundaries.deltaY >= height? Math.max(0, minY - boundaries.maxY): 0))
        return delta
      case 2:
        delta.x = boundaries.minX < -minX ? (-minX - boundaries.minX): (boundaries.deltaX < width && boundaries.maxX > minX ? -(boundaries.minX - minX): (boundaries.deltaX >= width? Math.max(0, -minX - boundaries.minX): 0))
        delta.y = boundaries.maxY > minY ? -(boundaries.maxY - minY): (boundaries.deltaY < height && boundaries.minY < -minY ? -(boundaries.minY + minY): (boundaries.deltaY >= height? Math.max(0, minY - boundaries.maxY): 0))
        return delta
      default:
        delta.x = boundaries.minX < -minX ? (-minX - boundaries.minX): (boundaries.deltaX < width && boundaries.maxX > minX ? -(boundaries.minX - minX): (boundaries.deltaX >= width? Math.max(0, -minX - boundaries.minX): 0))
        delta.y = boundaries.minY < -minY ? (-minY - boundaries.minY): (boundaries.deltaY < height && boundaries.maxY > minY ? -(boundaries.maxY - minY): (boundaries.deltaY >= height? Math.min(0, -minY - boundaries.minY): 0))
        return delta
    }
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
        return getTwoPlayerCoordinates(index)
      case 3:
        return getThreePlayerCoordinates(index, {y: -2})
      default:
        return getFourPlayerCoordinates(index, {y: -2})
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
        return getTwoPlayerCoordinates(index)
      case 3:
        return getThreePlayerCoordinates(index, {y: -2})
      default:
        return getFourPlayerCoordinates(index, {y: -2})
    }
  }
}