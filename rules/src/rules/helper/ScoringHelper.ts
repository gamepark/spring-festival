import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import sum from 'lodash/sum'
import { colorCompositionDescriptions } from '../../material/ColorCompositionDescription'
import { CompositionType } from '../../material/Composition'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { patternCompositionDescriptions } from '../../material/PatternCompositionDescription'
import { Sign } from '../../material/Sign'
import { PlayerSymbol } from '../../PlayerSymbol'
import { BullScoring } from './sign/BullScoring'
import { DogScoring } from './sign/DogScoring'
import { DragonScoring } from './sign/DragonScoring'
import { GoatScoring } from './sign/GoatScoring'
import { HorseScoring } from './sign/HorseScoring'
import { MonkeyScoring } from './sign/MonkeyScoring'
import { PigScoring } from './sign/PigScoring'
import { RabbitScoring } from './sign/RabbitScoring'
import { RatScoring } from './sign/RatScoring'
import { RoosterScoring } from './sign/RoosterScoring'
import { SignScoring } from './sign/SignScoring'
import { SnakeScoring } from './sign/SnakeScoring'
import { TigerScoring } from './sign/TigerScoring'

export class ScoringHelper extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)
  }

  get score() {
    return this.grandeFinaleScore + this.applauseMajorityScore + this.applauseCountScore + this.compositionScore + this.chineseSignScore
  }

  get grandeFinaleScore() {
    return this.panorama.rotation(true).length
  }

  get applauseMajorityScore() {
    const count = this.applauseCountScore
    let majorityOn = 0
    for (const player of this.game.players) {
      if (player === this.player) continue
      const otherPlayerApplause = this.getApplauseCount(player)
      if (otherPlayerApplause < count) majorityOn++
    }

    return majorityOn * 3
  }

  get compositionScore() {
    return sum(
      this.material(MaterialType.Composition)
        .location(LocationType.PlayerDoneComposition)
        .player(this.player)
        .getItems()
        .map((item) => (item.id.back === CompositionType.Pattern ? patternCompositionDescriptions : colorCompositionDescriptions)[item.id.front].points)
    )
  }

  get applauseCountScore() {
    return this.getApplauseCount(this.player)
  }

  getApplauseCount(player: PlayerSymbol): number {
    const applause = this
      .material(MaterialType.ApplauseToken)
      .location(LocationType.PlayerApplause)
      .player(player)

    if (!applause.length) return 0
    return applause.getItem()!.quantity ?? 1
  }

  get panorama() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }

  get chineseSignScore() {
    const sign = this.material(MaterialType.Sign).getItem()
    if (!sign) return 0
    return getSignScoreRule(sign.id, this.game, this.player).score
  }
}

const getSignScoreRule = (sign: Sign, game: MaterialGame, player: PlayerSymbol): SignScoring => {
  switch (sign) {
    case Sign.Goat: return new GoatScoring(game, player)
    case Sign.Rooster: return new RoosterScoring(game, player)
    case Sign.Snake: return new SnakeScoring(game, player)
    case Sign.Rat: return new RatScoring(game, player)
    case Sign.Dragon: return new DragonScoring(game, player)
    case Sign.Bull: return new BullScoring(game, player)
    case Sign.Rabbit: return new RabbitScoring(game, player)
    case Sign.Dog: return new DogScoring(game, player)
    case Sign.Tiger: return new TigerScoring(game, player)
    case Sign.Monkey: return new MonkeyScoring(game, player)
    case Sign.Pig: return new PigScoring(game, player)
    case Sign.Horse: return new HorseScoring(game, player)
  }
}