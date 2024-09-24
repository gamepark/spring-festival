import { Locator, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CompositionButtonDescription } from './description/CompositionButtonDescription'

export class CompositionButtonLocator extends Locator {
  getLocations({ rules, player }: MaterialContext) {
    if (!player || !rules.game.rule) return []
    const compositions = rules.material(MaterialType.Composition).location(LocationType.PlayerComposition).player(player)
    return compositions.getItems()
      .map((item) => ({
        ...item.location,
        type: LocationType.CompositionButton
      }))
  }

  locationDescription = new CompositionButtonDescription()
}

export const compositionButtonLocator = new CompositionButtonLocator()