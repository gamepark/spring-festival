/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game'
import { PanoramaButton } from '../component/PanoramaButton'

export class PanoramaButtonDescription extends LocationDescription {
  height = 2
  width = 2
  borderRadius = 1
  content = PanoramaButton
}