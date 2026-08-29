import { MaterialGameAnimations } from '@gamepark/react-game'
import { isDeleteItemType, isMoveItemType } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'

export const springFestivalAnimations = new MaterialGameAnimations()

springFestivalAnimations
  .configure((move, context) => isMoveItemType(MaterialType.FireworksStore)(move) && !context.action.local)
  .duration(800)

springFestivalAnimations
  .configure((move, context) => isMoveItemType(MaterialType.FireworksStore)(move) && !!context.action.local)
  .duration(400)

springFestivalAnimations
  .configure((move) => isMoveItemType(MaterialType.Composition)(move) && move.location.rotation !== undefined)
  .duration(200)

springFestivalAnimations
  .configure(isDeleteItemType(MaterialType.Firework))
  .skip()

springFestivalAnimations
  .configure((move) => isMoveItemType(MaterialType.Firework)(move) && move.location.rotation !== undefined)
  .duration(500)

springFestivalAnimations
  .configure(isMoveItemType(MaterialType.ApplauseToken))
  .duration(500)

springFestivalAnimations
  .configure(isMoveItemType(MaterialType.Composition))
  .duration(500)
