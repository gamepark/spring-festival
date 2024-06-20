/** @jsxImportSource @emotion/react */
import { BoardDescription } from '@gamepark/react-game'
import RocketStore from '../images/dispenser.jpg'

class FireworkStoreDescription extends BoardDescription {
  height = 19
  width = 19
  borderRadius = 20

  image = RocketStore
}

export const fireworkStoreDescription = new FireworkStoreDescription()

