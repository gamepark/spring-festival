/** @jsxImportSource @emotion/react */
import { TokenDescription } from '@gamepark/react-game'
import FirstPlayerToken from '../images/first-player.png'
import { FirstPlayerTokenHelp } from './help/FirstPlayerTokenHelp'

class FirstPlayerTokenDescription extends TokenDescription {
  height = 4.09
  width = 3.6
  image = FirstPlayerToken
  help = FirstPlayerTokenHelp
}

export const firstPlayerTokenDescription = new FirstPlayerTokenDescription()