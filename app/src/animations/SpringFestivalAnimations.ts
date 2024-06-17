import { MaterialGameAnimations } from '@gamepark/react-game'
import { isDeleteItemType, isMoveItemType } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'

export const springFestivalAnimations = new MaterialGameAnimations()

springFestivalAnimations
  .when()
  .move((move) => isMoveItemType(MaterialType.FireworksStore)(move))
  .duration(0.2)

springFestivalAnimations
  .when()
  .move(isDeleteItemType(MaterialType.Firework))
  .duration(0)
