import { MaterialRules, PositiveSequenceStrategy } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerId } from './PlayerId'
import { PlaceBaseFireworkRule } from './rules/PlaceBaseFireworkRule'
import { PlaceFireworkRule } from './rules/PlaceFireworkRule'
import { RotateStoreRule } from './rules/RotateStoreRule'
import { RuleId } from './rules/RuleId'


/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class SpringFestivalRules extends MaterialRules<PlayerId, MaterialType, LocationType> {
  rules = {
    [RuleId.RotateStore]: RotateStoreRule,
    [RuleId.PlaceFirework]: PlaceFireworkRule,
    [RuleId.PlaceBaseFirework]: PlaceBaseFireworkRule
  }

  locationsStrategies = {
    [MaterialType.Firework]: {
      [LocationType.FireworksStorePile]: new PositiveSequenceStrategy(),
      [LocationType.PlayerHand]: new PositiveSequenceStrategy()
    }
  }
}
