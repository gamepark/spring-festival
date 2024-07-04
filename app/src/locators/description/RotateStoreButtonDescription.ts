/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { RotateStoreButton } from '../component/RotateStoreButton'

export class RotateStoreButtonDescription extends LocationDescription {
  height = 1
  width = 1
  borderRadius = 1

  isAlwaysVisible(_location: Location, context: MaterialContext): boolean {
    const { player } = context
    if (!player) return false
    return context.rules.game.rule?.id === RuleId.RotateStore && context.rules.game.rule?.player === player
  }

  location = { type: LocationType.RotateStoreButton  }

  content = RotateStoreButton
}