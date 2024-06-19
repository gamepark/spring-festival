import { CustomMove, Material, MaterialGame, MaterialItem, MaterialRulesPart } from '@gamepark/rules-api'
import { Color } from '../../material/Color'
import { colorCompositionDescriptions } from '../../material/ColorCompositionDescription'
import { CompositionType } from '../../material/Composition'
import { fireworkDescriptions } from '../../material/FireworkDescription'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerSymbol } from '../../PlayerSymbol'
import { CustomMoveType } from '../CustomMoveType'
import { PlayerBoundaries } from './PlayerBoundaries'

export class CompositionHelper extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game)
  }

  get compositionMoves(): CustomMove[] {
    const helper = new PlayerBoundaries(this.game, this.player)
    const boundaries = helper.boudaries
    const panorama = helper.panorama
    const compositions = this.compositions
    const moves: CustomMove[] = []
    for (let x = boundaries.minX; x <= boundaries.maxX; x++) {
      for (let y = boundaries.minY; y <= boundaries.maxY; y++) {

        for (const compositionIndex of compositions.getIndexes()) {

          const indexes = this.getIndexes(compositions.getItem(compositionIndex)!, compositionIndex, panorama, x, y)
          moves.push(
            ...indexes.map((i) => this.rules().customMove(CustomMoveType.ColorComposition, i))
          )
        }
      }
    }

    return moves
  }

  getIndexes(composition: MaterialItem, compositionIndex: number, panorama: Material, x: number, y: number) {
    const comp = colorCompositionDescriptions[composition.id.front].composition
    const indexes: { comp: number, indexes: number[] }[] = []
    for (const combination of comp) {
      let valid = true
      let currentCombinationIndexes: number[] = []
      for (let compX = 0; compX < combination.length; compX++) {
        const yLine = combination[compX]
        if (!valid) continue

        for (let compY = 0; compY < yLine.length; compY++) {
          const color = yLine[compY]
          if (color === undefined || !valid) continue

          const firework = panorama
            .location((l) => l.x === (x + compY) && l.y === (y + compX) && l.rotation === true)
          if (firework.length) {
            const item = firework.getItem()!
            const fireworkColor = fireworkDescriptions[item.id.front].color
            if (color === Color.Any || color === fireworkColor) {
              currentCombinationIndexes.push(firework.getIndex())
              continue
            }
          }

          valid = false

        }
      }

      if (valid) {
        indexes.push({
          comp: compositionIndex,
          indexes: currentCombinationIndexes.sort() })
      }
    }

    return indexes


  }

  get compositions() {
    return this
      .material(MaterialType.Composition)
      .location(LocationType.PlayerComposition)
      // TODO: remove
      .locationId(CompositionType.Color)
  }


}