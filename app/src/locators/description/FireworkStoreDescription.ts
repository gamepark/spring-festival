import { css } from '@emotion/react'
import { LocationContext, LocationDescription } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { fireworkStoreDescription } from '../../material/FireworkStoreDescription'


export class FireworkStoreDescription extends LocationDescription {
  height = fireworkStoreDescription.height
  width = fireworkStoreDescription.width
  location = {
    type: LocationType.FireworksStore
  }
  alwaysVisible = true

  getExtraCss(_location: Location, context: LocationContext) {
    return css`
      &:after {
        content: '${this.remainingRound(context)}';
        pointer-events: none;
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: center; 
        transform: translateZ(0.1em);
        font-size: 4em;
        font-weight: bold;
        opacity: 0.8;
      }
    `
  }

  remainingRound(context: LocationContext) {
    const { rules } = context
    let remainingRound = 12
    for (let i = 1; i <= 4; i++) {
      const pileMax = rules.material(MaterialType.Firework).location(LocationType.FireworksStorePile).locationId(i).length
      if (pileMax < remainingRound) remainingRound = pileMax
    }

    return remainingRound
  }
}