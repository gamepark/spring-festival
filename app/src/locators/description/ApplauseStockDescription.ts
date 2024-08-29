/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'

export class ApplauseStockDescription extends LocationDescription<PlayerSymbol, MaterialType, LocationType> {
  width = 9
  height = 9
  borderRadius = 4.5
  coordinates = { x: -59, y: 18, z: 0 }
}
