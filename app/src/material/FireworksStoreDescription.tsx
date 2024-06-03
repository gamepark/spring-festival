/** @jsxImportSource @emotion/react */
import { BoardDescription } from '@gamepark/react-game'
import FireworksStore from '../images/dispenser.jpg'

class FireworksStoreDescription extends BoardDescription {
  height = 18.05
  width = 18.05
  borderRadius = 20

  image = FireworksStore
}

export const fireworksStoreDescription = new FireworksStoreDescription()

