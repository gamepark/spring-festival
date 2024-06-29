import { MaterialGameSetup } from '@gamepark/rules-api'
import chunk from 'lodash/chunk'
import sample from 'lodash/sample'
import shuffle from 'lodash/shuffle'
import { colorCompositions, CompositionType, patternCompositions } from './material/Composition'
import { getBaseFirework, storeFireworks } from './material/Firework'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { signs } from './material/Sign'
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

  setupMaterial(options: SpringFestivalOptions) {
    this.setupStore()
    this.setupComposition()
    this.setupPlayers()
    if (options.chineseSign) {
      this.setupSign()
    }
  }

  setupComposition() {
    const colors = shuffle(colorCompositions).map((c) => ({
      id: { front: c, back: CompositionType.Color },
      location: {
        type: LocationType.ColorComposition,
      }
    }))

    this.material(MaterialType.Composition).createItems(colors)

    const patterns = shuffle(patternCompositions).map((c) => ({
      id: { front: c, back: CompositionType.Pattern },
      location: {
        type: LocationType.PatternComposition,
      }
    }))

    this.material(MaterialType.Composition).createItems(patterns)
  }

  setupPlayers() {
    const colorCompositions = this.material(MaterialType.Composition).location(LocationType.ColorComposition).deck()
    const patternCompositions = this.material(MaterialType.Composition).location(LocationType.PatternComposition).deck()
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
        type: LocationType.PlayerComposition,
        id: CompositionType.Color,
        player: player
      }, 2)

      patternCompositions.deal({
        type: LocationType.PlayerComposition,
        id: CompositionType.Pattern,
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

  setupSign() {
    const sign = sample(signs)
    this.material(MaterialType.Sign)
      .createItem({
        id: sign,
        location: {
          type: LocationType.Sign
        }
      })
  }

  start() {
    this.memorize(Memory.StartPlayer, this.game.players[0])
    this.startSimultaneousRule(RuleId.PlaceBaseFirework, this.game.players)
  }
}
