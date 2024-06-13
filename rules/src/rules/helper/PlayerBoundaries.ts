import { MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerSymbol } from '../../PlayerSymbol'

export class PlayerBoundaries extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerSymbol) {
    super(game);
  }

  get boudaries() {
    const panorama = this.panorama
    if (!panorama.length) {
      return {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        deltaX: 0,
        deltaY: 0
      }
    }
    const minX = panorama.minBy((item) => item.location.x!).getItem()!.location.x!
    const maxX = panorama.maxBy((item) => item.location.x!).getItem()!.location.x!
    const minY = panorama.minBy((item) => item.location.y!).getItem()!.location.y!
    const maxY = panorama.maxBy((item) => item.location.y!).getItem()!.location.y!
    return {
      minX,
      maxX,
      minY,
      maxY,
      deltaX: maxX !== minX? (maxX - minX + 1): 0,
      deltaY: maxY !== minY? (maxY - minY + 1): 0,
    }
  }

  get panorama() {
    return this.material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(this.player)
  }
}