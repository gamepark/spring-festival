import { CustomMove, isCustomMoveType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { CustomMoveType } from './CustomMoveType'
import { FireworkHelper } from './helper/FireworkHelper'

export class GrandeFinaleRule extends SimultaneousRule {
  onRuleStart() {
    const moves: MaterialMove[] = []
    for (const player of this.game.players) {
      const cards = this
        .getPanorama(player)
        .rotation(true)

      moves.push(
        cards.moveItemsAtOnce({ rotation: false })
      )
    }

    return moves
  }

  getActivePlayerLegalMoves(_playerId: number) {
    const panorama = this.getPanorama(_playerId)
    return panorama.getIndexes().map((i) => this.rules().customMove(CustomMoveType.GrandeFinale, i))
  }
  afterItemMove(_move: ItemMove<number, number, number>): MaterialMove<number, number, number>[] {
    return super.afterItemMove(_move)
  }

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.GrandeFinale)(move)) return []
    const tile = this.material(MaterialType.Firework).index(move.data)!
    const item = tile.getItem()!
    const player = item.location.player!
    return [
      ...new FireworkHelper(this.game, player).getExplosionMoves(tile),
      this.rules().endPlayerTurn(player)
    ]
  }

  getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
    return [this.rules().endGame()]
  }

  getPanorama(playerId: PlayerSymbol) {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(playerId)
  }
}