import { MaterialGameSetup } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerId } from './PlayerId'
import { RuleId } from './rules/RuleId'
import { SpringFestivalOptions } from './SpringFestivalOptions'
import { SpringFestivalRules } from './SpringFestivalRules'

/**
 * This class creates a new Game based on the game options
 */
export class SpringFestivalSetup extends MaterialGameSetup<PlayerId, MaterialType, LocationType, SpringFestivalOptions> {
  Rules = SpringFestivalRules

  setupMaterial(_options: SpringFestivalOptions) {
    this.setupStore()
  }

  setupStore() {
    this.material(MaterialType.FireworksStore)
      .createItem({
        location: {
          type: LocationType.FireworksStore
        }
      })
  }

  start() {
    this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0])
  }
}