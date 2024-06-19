import { FillGapStrategy, hideFront, MaterialGame, MaterialMove, PositiveSequenceStrategy, SecretMaterialRules, TimeLimit } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerSymbol } from './PlayerSymbol'
import { PlaceBaseFireworkRule } from './rules/PlaceBaseFireworkRule'
import { PlaceFireworkRule } from './rules/PlaceFireworkRule'
import { RotateStoreRule } from './rules/RotateStoreRule'
import { RuleId } from './rules/RuleId'


/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class SpringFestivalRules extends SecretMaterialRules<PlayerSymbol, MaterialType, LocationType>
  implements TimeLimit<MaterialGame<PlayerSymbol, MaterialType, LocationType>, MaterialMove<PlayerSymbol, MaterialType, LocationType>, PlayerSymbol> {
  rules = {
    [RuleId.RotateStore]: RotateStoreRule,
    [RuleId.PlaceFirework]: PlaceFireworkRule,
    [RuleId.PlaceBaseFirework]: PlaceBaseFireworkRule
  }

  locationsStrategies = {
    [MaterialType.Firework]: {
      [LocationType.FireworksStorePile]: new PositiveSequenceStrategy(),
      [LocationType.PlayerHand]: new PositiveSequenceStrategy()
    },
    [MaterialType.Composition]: {
      [LocationType.PlayerComposition]: new FillGapStrategy(),
      [LocationType.ColorComposition]: new PositiveSequenceStrategy(),
      [LocationType.PatternComposition]: new PositiveSequenceStrategy()
    }
  }

  hidingStrategies = {
    [MaterialType.Composition]: {
      [LocationType.ColorComposition]: hideFront,
      [LocationType.PatternComposition]: hideFront
    }
  }

  giveTime(): number {
    return 60
  }
}
