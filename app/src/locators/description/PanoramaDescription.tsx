/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentSize, LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { AvailableSpaceHelper } from '@gamepark/spring-festival/rules/helper/AvailableSpaceHelper'
import { fireworkDescription } from '../../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates } from '../../utils/PlayerPosition'

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
        height: (fireworkDescription.height + 0.2) * 5,
        width: (fireworkDescription.width + 0.2) * 7
      }
    }
  }

  getCoordinates(location: Location, context: LocationContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)

    if (location.x !== undefined && location.y !== undefined) {
      const coordinates = this.getPanoramaPosition(index, context.rules.players)
      coordinates.x += location.x! * (fireworkDescription.width + 0.2)
      coordinates.y += location.y! * (fireworkDescription.height + 0.2)
      return coordinates
    } else {
      // TODO: Move it to specific location ?
      return {
        ...this.getPlayerAreaPosition(index, context.rules.players),
        z: 0
      }
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
        return getTwoPlayerCoordinates(index, { y: 10 })
      case 3:
        return getThreePlayerCoordinates(index, { y: 10 })
      default:
        return getFourPlayerCoordinates(index, { y: 10 })
    }
  }


  getPanoramaPosition(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { y: 10 })
      case 3:
        return getThreePlayerCoordinates(index, { y: 10 })
      default:
        return getFourPlayerCoordinates(index, { y: 10 })
    }
  }
}