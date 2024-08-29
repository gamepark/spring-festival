import { Locator } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { applausePileLocator } from './ApplausePileLocator'
import { colorCompositionLocator } from './ColorCompositionLocator'
import { compositionButtonLocator } from './CompositionButtonLocator'
import { fireworkStoreLocator } from './FireworkStoreLocator'
import { fireworkStorePileLocator } from './FireworkStorePileLocator'
import { firstPlayerTokenLocator } from './FirstPlayerTokenLocator'
import { highlightLocator } from './HighlightLocator'
import { panoramaButtonLocator } from './PanoramaButtonLocator'
import { panoramaLocator } from './PanoramaLocator'
import { patternCompositionLocator } from './PatternCompositionLocator'
import { playerApplauseTokenLocator } from './PlayerApplauseTokenLocator'
import { playerCompositionLocator } from './PlayerCompositionLocator'
import { playerDoneCompositionLocator } from './PlayerDoneCompositionLocator'
import { playerHandLocator } from './PlayerHandLocator'
import { rotateStoreButtonLocator } from './RotateStoreButtonLocator'

export const Locators: Partial<Record<LocationType, Locator<PlayerSymbol, MaterialType, LocationType>>> = {
  [LocationType.FireworksStore]: fireworkStoreLocator,
  [LocationType.FireworksStorePile]: fireworkStorePileLocator,
  [LocationType.PlayerHand]: playerHandLocator,
  [LocationType.Panorama]: panoramaLocator,
  [LocationType.ColorComposition]: colorCompositionLocator,
  [LocationType.PatternComposition]: patternCompositionLocator,
  [LocationType.PlayerComposition]: playerCompositionLocator,
  [LocationType.PlayerDoneComposition]: playerDoneCompositionLocator,
  [LocationType.ApplauseStock]: applausePileLocator,
  [LocationType.PlayerApplause]: playerApplauseTokenLocator,
  [LocationType.FirstPlayerToken]: firstPlayerTokenLocator,
  [LocationType.Sign]: new Locator({ coordinates: { y: -16 } }),
  [LocationType.Highlight]: highlightLocator,
  [LocationType.CompositionButton]: compositionButtonLocator,
  [LocationType.RotateStoreButton]: rotateStoreButtonLocator,
  [LocationType.PanoramaButton]:  panoramaButtonLocator
}
