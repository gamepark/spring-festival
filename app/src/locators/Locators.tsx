import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ItemLocator } from '@gamepark/react-game'
import { colorCompositionLocator } from './ColorCompositionLocator'
import { fireworkStoreLocator } from './FireworkStoreLocator'
import { fireworkStorePileLocator } from './FireworkStorePileLocator'
import { panoramaLocator } from './PanoramaLocator'
import { patternCompositionLocator } from './PatternCompositionLocator'
import { playerCompositionLocator } from './PlayerCompositionLocator'
import { playerHandLocator } from './PlayerHandLocator'

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerSymbol, MaterialType, LocationType>>> = {
  [LocationType.FireworksStore]: fireworkStoreLocator,
  [LocationType.FireworksStorePile]: fireworkStorePileLocator,
  [LocationType.PlayerHand]: playerHandLocator,
  [LocationType.Panorama]: panoramaLocator,
  [LocationType.ColorComposition]: colorCompositionLocator,
  [LocationType.PatternComposition]: patternCompositionLocator,
  [LocationType.PlayerComposition]: playerCompositionLocator,
}
