/** @jsxImportSource @emotion/react */
import { LocationContext, Locator, MaterialContext } from '@gamepark/react-game'
import { Location, XYCoordinates } from '@gamepark/rules-api'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { AvailableSpaceHelper } from '@gamepark/spring-festival/rules/helper/AvailableSpaceHelper'
import { PlayerBoundaries } from '@gamepark/spring-festival/rules/helper/PlayerBoundaries'
import { Memory } from '@gamepark/spring-festival/rules/Memory'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates, gridMinX, gridMinY } from '../utils/PlayerPosition'
import { PanoramaDescription } from './description/PanoramaDescription'

export class PanoramaLocator extends Locator {
  getLocations({ player, rules }: MaterialContext): Location[] {
    const isPlaceFirework = rules.game.rule?.id === RuleId.PlaceBaseFirework || rules.game.rule?.id === RuleId.PlaceFirework
    if (player !== undefined && isPlaceFirework && !rules.remind(Memory.Placed, player)) {
      return new AvailableSpaceHelper(rules.game, player).availableSpaces
    }
    return []
  }

  locationDescription = new PanoramaDescription()

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

  getPlayerAreaPosition(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { x: -2 })
      case 3:
        return getThreePlayerCoordinates(index, { x: -2 })
      default:
        return getFourPlayerCoordinates(index, { x: -2 })
    }
  }

  getPanoramaPosition(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { x: -2 })
      case 3:
        return getThreePlayerCoordinates(index, { x: -2 })
      default:
        return getFourPlayerCoordinates(index, { x: -2 })
    }
  }

  getRotateZ(location: Location, context: MaterialContext): number {
    const index = getComputedIndex(context, location.player!)
    if (index === 1 || index === 2) {
      return 0
    }

    return 0
  }
}

export const panoramaLocator = new PanoramaLocator()