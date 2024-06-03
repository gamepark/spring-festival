import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ItemLocator } from '@gamepark/react-game'
import { fireworkStoreLocator } from './FireworkStoreLocator'
import { fireworkStorePileLocator } from './FireworkStorePileLocator'

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerSymbol, MaterialType, LocationType>>> = {
  [LocationType.FireworksStore]: fireworkStoreLocator,
  [LocationType.FireworksStorePile]: fireworkStorePileLocator
}
