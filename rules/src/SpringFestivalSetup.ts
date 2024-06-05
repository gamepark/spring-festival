import { MaterialGameSetup } from '@gamepark/rules-api'
import chunk from 'lodash/chunk'
import shuffle from 'lodash/shuffle'
import { getBaseFirework, storeFireworks } from './material/Firework'
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
    this.setupPlayers()
  }

  setupPlayers() {
    for (const player of this.players) {
      const base = getBaseFirework(player)
      this.material(MaterialType.Firework)
        .createItems(base.map((f) => ({
          id: {
            back: f,
            front: f
          },
          location: {
            type: LocationType.PlayerHand,
            player: player
          }
        })))
    }
  }

  setupStore() {
    this.material(MaterialType.FireworksStore)
      .createItem({
        location: {
          type: LocationType.FireworksStore
        }
      })

    const fireworks = shuffle(storeFireworks)
    const chunks = chunk(fireworks, 12)
    for (let id = 0; id < chunks.length; id++) {
      this.material(MaterialType.Firework)
        .createItems(chunks[id].map((firework) => ({
          id: {
            back: firework,
            front: firework
          },
          location: {
            type: LocationType.FireworksStorePile,
            id: id + 1
          }
        }) ))
    }
  }

  start() {
    this.startPlayerTurn(RuleId.RotateStore, this.game.players[0])
  }
}
