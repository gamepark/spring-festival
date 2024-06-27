import { CardDescription } from '@gamepark/react-game'
import { Sign } from '@gamepark/spring-festival/material/Sign'
import Bull from '../images/signs/Bull.jpg'
import Dog from '../images/signs/Dog.jpg'
import Dragon from '../images/signs/Dragon.jpg'
import Goat from '../images/signs/Goat.jpg'
import Horse from '../images/signs/Horse.jpg'
import Monkey from '../images/signs/Monkey.jpg'
import Pig from '../images/signs/Pig.jpg'
import Rabbit from '../images/signs/Rabbit.jpg'
import Rat from '../images/signs/Rat.jpg'
import Rooster from '../images/signs/Rooster.jpg'
import Snake from '../images/signs/Snake.jpg'
import Tiger from '../images/signs/Tiger.jpg'
import { SignHelp } from './help/SignHelp'

export class SignDescription extends CardDescription {
  height = 12
  width = 7

  images = {
    [Sign.Bull]: Bull,
    [Sign.Dog]: Dog,
    [Sign.Dragon]: Dragon,
    [Sign.Goat]: Goat,
    [Sign.Horse]: Horse,
    [Sign.Monkey]: Monkey,
    [Sign.Pig]: Pig,
    [Sign.Rabbit]: Rabbit,
    [Sign.Rat]: Rat,
    [Sign.Rooster]: Rooster,
    [Sign.Snake]: Snake,
    [Sign.Tiger]: Tiger,
  }

  help = SignHelp
}

export const signDescription = new SignDescription()