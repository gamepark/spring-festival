import { DeckLocator, Locator, PileLocator } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { compositionButtonLocator } from './CompositionButtonLocator'
import { fireworkStoreLocator } from './FireworkStoreLocator'
import { fireworkStorePileLocator } from './FireworkStorePileLocator'
import { firstPlayerTokenLocator } from './FirstPlayerTokenLocator'
import { highlightLocator } from './HighlightLocator'
import { panoramaButtonLocator } from './PanoramaButtonLocator'
import { panoramaLocator } from './PanoramaLocator'
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
  [LocationType.ColorComposition]: new DeckLocator({ coordinates: { x: 3, y: 12.5 }, limit: 10 }),
  [LocationType.PatternComposition]: new DeckLocator({ coordinates: { x: -3, y: 12.5 }, limit: 10 }),
  [LocationType.PlayerComposition]: playerCompositionLocator,
  [LocationType.PlayerDoneComposition]: playerDoneCompositionLocator,
  [LocationType.ApplauseStock]: new PileLocator({ coordinates: { y: 17 }, radius: 1 }),
  [LocationType.PlayerApplause]: playerApplauseTokenLocator,
  [LocationType.FirstPlayerToken]: firstPlayerTokenLocator,
  [LocationType.Sign]: new Locator({ coordinates: { y: -16 } }),
  [LocationType.Highlight]: highlightLocator,
  [LocationType.CompositionButton]: compositionButtonLocator,
  [LocationType.RotateStoreButton]: rotateStoreButtonLocator,
  [LocationType.PanoramaButton]: panoramaButtonLocator
}
