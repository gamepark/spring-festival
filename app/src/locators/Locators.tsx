import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ItemLocator } from '@gamepark/react-game'
import { fireworkStoreLocator } from './FireworkStoreLocator'
import { fireworkStorePileLocator } from './FireworkStorePileLocator'
import { playerHandLocator } from './PlayerHandLocator'

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerSymbol, MaterialType, LocationType>>> = {
  [LocationType.FireworksStore]: fireworkStoreLocator,
  [LocationType.FireworksStorePile]: fireworkStorePileLocator,
  [LocationType.PlayerHand]: playerHandLocator
}
