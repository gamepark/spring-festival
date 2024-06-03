import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ItemLocator } from '@gamepark/react-game'
import { rocketStoreLocator } from './RocketStoreLocator'

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerSymbol, MaterialType, LocationType>>> = {
  [LocationType.FireworksStore]: rocketStoreLocator
}
