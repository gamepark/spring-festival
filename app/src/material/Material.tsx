import { MaterialDescription } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { fireworksStoreDescription } from './FireworksStoreDescription'

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.FireworksStore]: fireworksStoreDescription
}
