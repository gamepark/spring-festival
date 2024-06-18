import { MaterialGameSetup } from '@gamepark/rules-api'
import chunk from 'lodash/chunk'
import shuffle from 'lodash/shuffle'
import { colorCompositions, patternCompositions } from './material/Composition'
import { getBaseFirework, storeFireworks } from './material/Firework'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerId } from './PlayerId'
import { Memory } from './rules/Memory'
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
    this.setupComposition()
    this.setupPlayers()
  }

  setupComposition() {
    const colors = colorCompositions.map((c) => ({
      id: c,
      location: {
        type: LocationType.ColorComposition,
      }
    }))

    this.material(MaterialType.ColorComposition).createItems(colors)
    this.material(MaterialType.ColorComposition).shuffle()

    const patterns = patternCompositions.map((c) => ({
      id: c,
      location: {
        type: LocationType.ColorComposition,
      }
    }))

    this.material(MaterialType.PatternComposition).createItems(patterns)
    this.material(MaterialType.PatternComposition).shuffle()
  }

  setupPlayers() {
    const colorCompositions = this.material(MaterialType.ColorComposition).deck()
    const patternCompositions = this.material(MaterialType.PatternComposition).deck()
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

      colorCompositions.deal({
        type: LocationType.PlayerColorComposition,
        player: player
      }, 2)

      patternCompositions.deal({
        type: LocationType.PlayerPatternComposition,
        player: player
      }, 2)
    }
  }

  setupStore() {

    this.material(MaterialType.FireworksStore)
      .createItem({
        location: {
          type: LocationType.FireworksStore,
          rotation: 1
        }
      })

    const fireworks = shuffle(storeFireworks)
    const chunks = chunk(fireworks, 12)
    for (let id = 0; id < chunks.length; id++) {
      this
        .material(MaterialType.Firework)
        .createItems(chunks[id].map((firework) => ({
          id: {
            back: firework,
            front: firework
          },
          location: {
            type: LocationType.FireworksStorePile,
            id: id + 1,
            parent: 0
          }
        }) ))
    }
  }

  start() {
    this.memorize(Memory.StartPlayer, this.game.players[0])
    this.startSimultaneousRule(RuleId.PlaceBaseFirework, this.game.players)
  }
}
