/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'

export class ApplauseStockDescription extends LocationDescription<PlayerSymbol, MaterialType, LocationType> {
  location = applauseStockLocation
  width = 9
  ratio = 1
  borderRadius = this.width / 2
  coordinates = { x: -59, y: 18, z: 0 }
}

export const applauseStockLocation = { type: LocationType.ApplauseStock }