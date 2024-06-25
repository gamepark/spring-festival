/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, TokenDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { Memory } from '@gamepark/spring-festival/rules/Memory'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import FirstPlayerToken from '../images/first-player.png'
import { applauseStockLocation } from '../locators/description/ApplauseStockDescription'
import { FirstPlayerTokenHelp } from './help/FirstPlayerTokenHelp'

class FirstPlayerTokenDescription extends TokenDescription {
  height = 4.09
  width = 3.6
  image = FirstPlayerToken

  getItemExtraCss() {
    return css`
      transition: 0.7s transform;
    `
  }

  getStaticItems(context: MaterialContext): MaterialItem[] {
    const { rules } = context
    const startPlayer = rules.game.rule?.id === RuleId.RotateStore ? rules.game.rule.player : rules.remind(Memory.StartPlayer)
    return [{
      location: {
        type: LocationType.FirstPlayerToken,
        player: startPlayer
      }
    }]
  }

  staticItem = { quantity: 10, location: applauseStockLocation }
  stockLocation = applauseStockLocation
  help = FirstPlayerTokenHelp
}

export const firstPlayerTokenDescription = new FirstPlayerTokenDescription()