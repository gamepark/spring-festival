/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { RotateButton } from '../component/RotateButton'

export class RotateButtonDescription extends LocationDescription {
  height = 1
  width = 1
  borderRadius = 1
  alwaysVisible = true 

  getLocations(context: MaterialContext) {
    const { rules, player } = context
    if (!player) return []
    const compositions = rules.material(MaterialType.Composition).location(LocationType.PlayerComposition).player(player)
    return compositions.getItems()
      .map((item) => ({
        ...item.location,
        type: LocationType.RotateButton,
      }))
  }

  content = RotateButton
}