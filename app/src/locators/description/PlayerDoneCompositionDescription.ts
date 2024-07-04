/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { CompositionType } from '@gamepark/spring-festival/material/Composition'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { fireworkDescription } from '../../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates, gridMinX } from '../../utils/PlayerPosition'

export class PlayerDoneCompositionDescription extends LocationDescription {
  height = fireworkDescription.height
  width = fireworkDescription.width

  getLocations(context: MaterialContext) {
    return context.rules.players.map((p) => ({
      type: LocationType.PlayerDoneComposition,
      player: p
    }))
  }

  alwaysVisible = true

  getCoordinates(location: Location, context: LocationContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)
    const heightWithMargin = fireworkDescription.width + 0.2
    const coordinates = this.getCompositionLocation(index, context.rules.players)

    if (context.rules.players.length > 2) {
      if (index === 0 || index === 3) {
        coordinates.y += heightWithMargin + 5.2
      } else {
        coordinates.y -= heightWithMargin + 5.2
      }
    } else {
      if (index === 0) {
        coordinates.y += 4.77 * heightWithMargin
      } else {
        coordinates.y -= 4.77 * heightWithMargin
      }
    }


    const margin = (gridMinX + 0.5) * heightWithMargin + 0.5
    if (index < 2) {
      coordinates.x += margin
    } else {
      coordinates.x -= margin
    }

    if (location.id === CompositionType.Pattern) {
      coordinates.y += (heightWithMargin) * 2
    }

    return coordinates
  }

  getExtraCss(location: Location, context: LocationContext) {
    const count = this.compositionCount(location, context)
    if (!count) return noPointerCss
    return css`
      ${noPointerCss};
      &:after {
        ${noPointerCss};
        content: '${count}';
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        transform: translateZ(${0.03 * count}em);
        right: 0.1em;
        bottom: -0.0em;
        font-size: 1.7em;
        font-weight: bold;
        opacity: 1;
      }
    `
  }

  compositionCount(location: Location, context: LocationContext) {
    return context.rules.material(MaterialType.Composition).location(LocationType.PlayerDoneComposition).player(location.player).length
  }

  getCompositionLocation(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { x: 3.7 })
      case 3:
        return getThreePlayerCoordinates(index, { x: 3.7 })
      default:
        return getFourPlayerCoordinates(index, { x: 3.7 })
    }
  }
}

const noPointerCss = css`
  pointer-events: none;
`