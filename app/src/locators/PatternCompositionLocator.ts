/** @jsxImportSource @emotion/react */
import { DeckLocator } from '@gamepark/react-game'

export class PatternCompositionLocator extends DeckLocator {
  limit = 10
  delta = { x: -0.05, y: -0.05 }
  coordinates = { x: -3, y: 12.5, z: 0 }
}

export const patternCompositionLocator = new PatternCompositionLocator()