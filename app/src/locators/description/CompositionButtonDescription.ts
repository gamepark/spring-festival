/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CompositionButton } from '../component/CompositionButton'

export class CompositionButtonDescription extends LocationDescription {
  height = 1.7
  width = 1.7
  borderRadius = 1
  alwaysVisible = true 

  getLocations(context: MaterialContext) {
    const { rules, player } = context
    if (!player) return []
    const compositions = rules.material(MaterialType.Composition).location(LocationType.PlayerComposition).player(player)
    return compositions.getItems()
      .map((item) => ({
        ...item.location,
        type: LocationType.CompositionButton,
      }))
  }

  content = CompositionButton
}