/** @jsxImportSource @emotion/react */
import { RoundTokenDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import ApplauseToken from '../images/token/applause.jpg'
import { ApplauseTokenHelp } from './help/ApplauseTokenHelp'

class ApplauseTokenDescription extends RoundTokenDescription {
  diameter = 2;
  image = ApplauseToken

  stockLocation = { type: LocationType.ApplauseStock }
  staticItem = { quantity: 10, location: this.stockLocation }
  help = ApplauseTokenHelp
}

export const applauseTokenDescription = new ApplauseTokenDescription()