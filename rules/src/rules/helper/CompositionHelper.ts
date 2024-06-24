import { CustomMove, Material, MaterialGame, MaterialItem, MaterialRulesPart } from '@gamepark/rules-api'
import { Color } from '../../material/Color'
import { colorCompositionDescriptions } from '../../material/ColorCompositionDescription'
import { CompositionType } from '../../material/Composition'
import { fireworkDescriptions } from '../../material/FireworkDescription'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { patternCompositionDescriptions } from '../../material/PatternCompositionDescription'
import { PlayerSymbol } from '../../PlayerSymbol'
import { CustomMoveType } from '../CustomMoveType'
import { PlayerBoundaries } from './PlayerBoundaries'

export class CompositionHelper extends MaterialRulesPart {
  constructor(game: MaterialGame<any, any, any>, readonly player: PlayerSymbol) {
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
          const item = compositions.getItem(compositionIndex)!
          const combinations = this.getValidCombinations(item, compositionIndex, panorama, x, y)
          moves.push(
            ...combinations.map((c) => this.rules().customMove(CustomMoveType.Composition, c))
          )
        }
      }
    }

    return moves
  }

  getValidCombinations(composition: MaterialItem, compositionIndex: number, panorama: Material, x: number, y: number) {
    const description = composition.id.back === CompositionType.Color? colorCompositionDescriptions: patternCompositionDescriptions
    const comp = description[composition.id.front].composition
    const indexes: { comp: number, indexes: number[] }[] = []
    for (const combination of comp) {
      let valid = true
      let currentCombinationIndexes: number[] = []
      for (let compX = 0; compX < combination.length; compX++) {
        const yLine = combination[compX]
        if (!valid) continue

        for (let compY = 0; compY < yLine.length; compY++) {
          if (!valid) continue
          const requirement = yLine[compY]
          if (!requirement) continue

          if (composition.id.back === CompositionType.Pattern) {
            const index = this.getValidPatternCombinations(requirement, compX, compY, panorama, x, y)
            if (index !== undefined) {
              currentCombinationIndexes.push(index)
            } else {
              valid = false
            }
          } else {
            const index = this.getValidColorCombinations(requirement, compX, compY, panorama, x, y)
            if (index !== undefined) {
              currentCombinationIndexes.push(index)
            } else {
              valid = false
            }
          }

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

  getValidPatternCombinations(requiredExplosionCount: number | undefined, deltaX: number, deltaY: number, panorama: Material, x: number, y: number) {
    const firework = panorama
      .location((l) => l.x === (x + deltaY) && l.y === (y + deltaX) && l.rotation === true)
    if (firework.length) {
      const item = firework.getItem()!
      const explosionCount = fireworkDescriptions[item.id.front].explosionCount
      if (requiredExplosionCount === -1 || explosionCount === requiredExplosionCount) {
        return firework.getIndex()
      }
    }

    return
  }

  getValidColorCombinations(color: Color, deltaX: number, deltaY: number, panorama: Material, x: number, y: number) {

    const firework = panorama
      .location((l) => l.x === (x + deltaY) && l.y === (y + deltaX) && l.rotation === true)
    if (firework.length) {
      const item = firework.getItem()!
      const fireworkColor = fireworkDescriptions[item.id.front].color
      if (color === Color.Any || color === fireworkColor) {
        return firework.getIndex()
      }
    }

    return
  }

  get compositions() {
    return this
      .material(MaterialType.Composition)
      .location(LocationType.PlayerComposition)
      .player(this.player)
  }


}