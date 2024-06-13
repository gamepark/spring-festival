/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentSize, ItemContext, LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialMove, XYCoordinates } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { AvailableSpaceHelper } from '@gamepark/spring-festival/rules/helper/AvailableSpaceHelper'
import { PlayerBoundaries } from '@gamepark/spring-festival/rules/helper/PlayerBoundaries'
import { fireworkDescription } from '../../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates } from '../../utils/PlayerPosition'

export class PanoramaDescription extends LocationDescription {
  height = fireworkDescription.height
  width = fireworkDescription.width

  isAlwaysVisible(location: Location): boolean {
    return location.x === undefined && location.y === undefined && false
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
        height: (fireworkDescription.height + 0.2) * (context.rules.players.length === 2? 9: 5),
        width: (fireworkDescription.width + 0.2) * 7
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

      return coordinates
    } else {
      // TODO: Move it to specific location ?
      return {
        ...this.getPlayerAreaPosition(index, context.rules.players),
        z: 0
      }
    }
  }

  computeDelta(index: number, player: PlayerSymbol, context: LocationContext) {
    const boundaries = new PlayerBoundaries(context.rules.game, player).boudaries
    const delta: Partial<XYCoordinates> = {}
    const gridHeight = context.rules.players.length === 2? 9: 5
    const gridWidth = 7
    const gridMinY = Math.floor(gridHeight / 2)
    const gridMinX = Math.floor(gridWidth / 2)
    switch (index) {
      case 0:
        delta.x = boundaries.maxX > gridMinX ? -(boundaries.maxX - gridMinX): (boundaries.deltaX < gridWidth && boundaries.minX < -gridMinX? (boundaries.minX + gridMinX): (boundaries.deltaX >= gridWidth? Math.min(0, boundaries.maxX - gridMinX): 0))
        delta.y = boundaries.minY < -gridMinY ? (-gridMinY - boundaries.minY): (boundaries.deltaY < gridHeight && boundaries.maxY > gridMinY ? -(boundaries.maxY - gridMinY): (boundaries.deltaY >= gridHeight? Math.min(0, -gridMinY - boundaries.minY): 0))
        return delta
      case 1:
        delta.x = boundaries.maxX > gridMinX ? -(boundaries.maxX - gridMinX): (boundaries.deltaX < gridWidth && boundaries.minX < -gridMinX? (boundaries.minX + gridMinX): (boundaries.deltaX >= gridWidth? Math.min(0, boundaries.maxX - gridMinX): 0))
        delta.y = boundaries.maxY > gridMinY ? -(boundaries.maxY - gridMinY): (boundaries.deltaY < gridHeight && boundaries.minY < -gridMinY ? (boundaries.minY + gridMinY): (boundaries.deltaY >= gridHeight? Math.max(0, gridMinY - boundaries.maxY): 0))
        return delta
      case 2:
        delta.x = boundaries.minX < -gridMinX ? (-gridMinX - boundaries.minX): (boundaries.deltaX < gridWidth && boundaries.maxX > gridMinX ? -(boundaries.minX - gridMinX): (boundaries.deltaX >= gridWidth? Math.max(0, -gridMinX - boundaries.minX): 0))
        delta.y = boundaries.maxY > gridMinY ? -(boundaries.maxY - gridMinY): (boundaries.deltaY < gridHeight && boundaries.minY < -gridMinY ? -(boundaries.minY + gridMinY): (boundaries.deltaY >= gridHeight? Math.max(0, gridMinY - boundaries.maxY): 0))
        return delta
      default:
        delta.x = boundaries.minX < -gridMinX ? (-gridMinX - boundaries.minX): (boundaries.deltaX < gridWidth && boundaries.maxX > gridMinX ? -(boundaries.minX - gridMinX): (boundaries.deltaX >= gridWidth? Math.max(0, -gridMinX - boundaries.minX): 0))
        delta.y = boundaries.minY < -gridMinY ? (-gridMinY - boundaries.minY): (boundaries.deltaY < gridHeight && boundaries.maxY > gridMinY ? -(boundaries.maxY - gridMinY): (boundaries.deltaY >= gridHeight? Math.min(0, -gridMinY - boundaries.minY): 0))
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
        return getTwoPlayerCoordinates(index, { y: 0 })
      case 3:
        return getThreePlayerCoordinates(index, { y: 10 })
      default:
        return getFourPlayerCoordinates(index, { y: 10 })
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
        return getTwoPlayerCoordinates(index, { y: 0 })
      case 3:
        return getThreePlayerCoordinates(index, { y: 10 })
      default:
        return getFourPlayerCoordinates(index, { y: 10 })
    }
  }
}