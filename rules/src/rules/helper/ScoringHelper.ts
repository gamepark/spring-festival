import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import sum from 'lodash/sum'
import { colorCompositionDescriptions } from '../../material/ColorCompositionDescription'
import { CompositionType } from '../../material/Composition'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { patternCompositionDescriptions } from '../../material/PatternCompositionDescription'
import { PlayerSymbol } from '../../PlayerSymbol'

export class ScoringHelper extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)
  }

  get score() {
    return this.grandeFinaleScore + this.applauseMajorityScore + this.applauseCountScore + this.compositionScore
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
    return this
      .material(MaterialType.ApplauseToken)
      .location(LocationType.PlayerApplause)
      .player(player)
      .getItem()?.quantity ?? 1
  }

  get panorama() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }
}