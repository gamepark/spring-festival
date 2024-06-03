/** @jsxImportSource @emotion/react */
import { RoundTokenDescription } from '@gamepark/react-game'
import ApplauseToken from '../images/token/applause.jpg'

class ApplauseTokenDescription extends RoundTokenDescription {
  diameter = 2;
  image = ApplauseToken
}

export const applauseTokenDescription = new ApplauseTokenDescription()