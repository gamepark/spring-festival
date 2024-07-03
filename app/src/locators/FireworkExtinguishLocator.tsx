/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ItemLocator, LocationDescription } from '@gamepark/react-game'

class FireworkExtinguishDescription extends LocationDescription {
  borderRadius = 1
  height = 2.8
  width = 2.8
  extraCss = css`border: 0.15em solid red`
  alwaysVisible = false
  coordinates = { x: -23.1, y: -5.2, z: 10 }
}


export class FireworkExtinguishLocator extends ItemLocator {
  locationDescription = new FireworkExtinguishDescription()
}

export const fireworkExtinguishLocator = new FireworkExtinguishLocator()

