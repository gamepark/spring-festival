import {
  CompetitiveScore,
  FillGapStrategy,
  hideFront,
  isMoveItemType,
  LocalMovePreview,
  MaterialGame,
  MaterialMove,
  PositiveSequenceStrategy,
  SecretMaterialRules,
  TimeLimit
} from '@gamepark/rules-api'
import isEqual from 'lodash/isEqual'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerId } from './PlayerId'
import { PlayerSymbol } from './PlayerSymbol'
import { GrandeFinaleRule } from './rules/GrandeFinaleRule'
import { ScoringHelper } from './rules/helper/ScoringHelper'
import { Memory } from './rules/Memory'
import { PlaceBaseFireworkRule } from './rules/PlaceBaseFireworkRule'
import { PlaceFireworkRule } from './rules/PlaceFireworkRule'
import { RotateStoreRule } from './rules/RotateStoreRule'
import { RuleId } from './rules/RuleId'


/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class SpringFestivalRules extends SecretMaterialRules<PlayerSymbol, MaterialType, LocationType>
  implements CompetitiveScore<MaterialGame<PlayerSymbol, MaterialType, LocationType>, MaterialMove<PlayerSymbol, MaterialType, LocationType>, PlayerSymbol>,
    TimeLimit<MaterialGame<PlayerSymbol, MaterialType, LocationType>, MaterialMove<PlayerSymbol, MaterialType, LocationType>, PlayerSymbol>,
    LocalMovePreview<MaterialMove<PlayerId, MaterialType, LocationType>>{
  rules = {
    [RuleId.RotateStore]: RotateStoreRule,
    [RuleId.PlaceFirework]: PlaceFireworkRule,
    [RuleId.PlaceBaseFirework]: PlaceBaseFireworkRule,
    [RuleId.GrandeFinale]: GrandeFinaleRule
  }

  locationsStrategies = {
    [MaterialType.Firework]: {
      [LocationType.FireworksStorePile]: new PositiveSequenceStrategy(),
      [LocationType.PlayerHand]: new PositiveSequenceStrategy()
    },
    [MaterialType.Composition]: {
      [LocationType.PlayerComposition]: new FillGapStrategy(),
      [LocationType.PlayerDoneComposition]: new PositiveSequenceStrategy(),
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

  previewMove(move: MaterialMove) {
    if (isMoveItemType(MaterialType.FireworksStore)(move)) {
      return this.remind(Memory.RotationPreview) && !isEqual(this.material(MaterialType.FireworksStore).getItem(move.itemIndex)?.location, move.location)
    }

    return false
  }

  giveTime(): number {
    return 60
  }

  getScore(playerId: PlayerSymbol): number {
    return new ScoringHelper(this.game, playerId).score
  }
}
