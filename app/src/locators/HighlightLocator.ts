/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationDescription, Locator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

export enum HighlightType {
  Applause = 1,
  Compositions
}

class HighlightDescription extends LocationDescription {
  borderRadius = 1
  extraCss = css`
    border: 0.15em solid red;
    pointer-events: none;
  `

  getSize(id: HighlightType) {
    switch (id) {
      case HighlightType.Applause:
        return { height: 2.8, width: 2.8 }
      case HighlightType.Compositions:
        return { height: 12, width: 7 }
    }
  }
}


export class HighlightLocator extends Locator {
  locationDescription = new HighlightDescription()

  getCoordinates(location: Location) {
    if (location.id === HighlightType.Applause) {
      return { x: -23.1, y: -5.2, z: 10 }
    }

    if (location.id === HighlightType.Compositions) {
      return { x: -9.7, y: 22, z: 10 }
    }

    return {}
  }
}

export const highlightLocator = new HighlightLocator()

