/** @jsxImportSource @emotion/react */
import { PileLocator } from '@gamepark/react-game'
import { ApplauseStockDescription } from './description/ApplauseStockDescription'

export class ApplausePileLocator extends PileLocator {

  locationDescription = new ApplauseStockDescription()

  delta = { x: -0.05, y: -0.05}

  coordinates = { x: 0, y: 17, z: 0 }

  radius = 1

}

export const applausePileLocator = new ApplausePileLocator()