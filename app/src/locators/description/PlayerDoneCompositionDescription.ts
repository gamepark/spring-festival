/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationContext, LocationDescription } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { fireworkDescription } from '../../material/FireworkDescription'

export class PlayerDoneCompositionDescription extends LocationDescription {
  constructor() {
    super(fireworkDescription)
  }

  getExtraCss(location: Location, context: LocationContext) {
    const count = this.compositionCount(location, context)
    if (!count) return
    return css`
      &:after {
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
}
