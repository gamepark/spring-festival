/** @jsxImportSource @emotion/react */
import { RoundTokenDescription } from '@gamepark/react-game'
import ApplauseToken from '../images/token/applause.jpg'
import { applauseStockLocation } from '../locators/description/ApplauseStockDescription'

class ApplauseTokenDescription extends RoundTokenDescription {
  diameter = 2;
  image = ApplauseToken

  staticItem = { quantity: 10, location: applauseStockLocation }
  stockLocation = applauseStockLocation
}

export const applauseTokenDescription = new ApplauseTokenDescription()