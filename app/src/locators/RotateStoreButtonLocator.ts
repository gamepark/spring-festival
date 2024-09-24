import { Locator, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { Location } from '../../../../rules-api'
import { RotateStoreButtonDescription } from './description/RotateStoreButtonDescription'

export class RotateStoreButtonLocator extends Locator {
  location = { type: LocationType.RotateStoreButton }

  getLocations({ player, rules }: MaterialContext): Location[] {
    if (rules.game.rule?.id === RuleId.RotateStore && rules.game.rule?.player === player) {
      return [{ type: LocationType.RotateStoreButton }]
    }
    return []
  }

  locationDescription = new RotateStoreButtonDescription()
}

export const rotateStoreButtonLocator = new RotateStoreButtonLocator()