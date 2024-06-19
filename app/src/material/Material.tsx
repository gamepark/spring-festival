import { MaterialDescription } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { applauseTokenDescription } from './ApplauseTokenDescription'
import { compositionDescription } from './CompositionDescription'
import { fireworkDescription } from './FireworkDescription'
import { fireworkStoreDescription } from './FireworkStoreDescription'

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.FireworksStore]: fireworkStoreDescription,
  [MaterialType.ApplauseToken]: applauseTokenDescription,
  [MaterialType.Firework]: fireworkDescription,
  [MaterialType.Composition]: compositionDescription,
}
