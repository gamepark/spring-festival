/** @jsxImportSource @emotion/react */
import { BoardDescription } from '@gamepark/react-game'
import RocketStore from '../images/dispenser.jpg'
import { FireworkStoreHelp } from './help/FireworkStoreHelp'

class FireworkStoreDescription extends BoardDescription {
  height = 19
  width = 19
  borderRadius = 20

  image = RocketStore
  help = FireworkStoreHelp

  canShortClick() {
    return false
  }

  canLongClick() {
    return false
  }
}

export const fireworkStoreDescription = new FireworkStoreDescription()

