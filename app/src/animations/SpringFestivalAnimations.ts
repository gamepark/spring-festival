import { MaterialGameAnimations } from '@gamepark/react-game'
import { isDeleteItemType, isMoveItemType } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'

export const springFestivalAnimations = new MaterialGameAnimations()

springFestivalAnimations
  .when()
  .move((move, context) => isMoveItemType(MaterialType.FireworksStore)(move) && !context.action.local)
  .duration(0.8)

springFestivalAnimations
  .when()
  .move((move, context) => isMoveItemType(MaterialType.FireworksStore)(move) && !!context.action.local)
  .duration(0.4)

springFestivalAnimations
  .when()
  .move((move) => isMoveItemType(MaterialType.Composition)(move) && move.location.rotation !== undefined)
  .duration(0.2)

springFestivalAnimations
  .when()
  .move(isDeleteItemType(MaterialType.Firework))
  .duration(0)

springFestivalAnimations
  .when()
  .move((move) => isMoveItemType(MaterialType.Firework)(move) && move.location.rotation !== undefined)
  .duration(0.5)

springFestivalAnimations
  .when()
  .move(isMoveItemType(MaterialType.ApplauseToken))
  .duration(0.5)

springFestivalAnimations
  .when()
  .move(isMoveItemType(MaterialType.Composition))
  .duration(0.5)
