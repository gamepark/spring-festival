import { isMoveItemType, ItemMove, Material, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { AvailableSpaceHelper } from './helper/AvailableSpaceHelper'
import { FireworkHelper } from './helper/FireworkHelper'
import { SearchPileHelper } from './helper/SearchPileHelper'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class PlaceFireworkRule extends SimultaneousRule<PlayerSymbol, MaterialType, LocationType> {
  getActivePlayerLegalMoves(playerId: PlayerSymbol): MaterialMove[] {
    const helper = new AvailableSpaceHelper(this.game, playerId)
    const tile = this.getTile(playerId)
    return helper.availableSpaces.map((location) => tile.moveItem(location))
  }

  getTile(playerId: PlayerSymbol): Material {
    const pile = new SearchPileHelper(this.game, playerId).pile
    return this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
      .locationId(pile)
      .maxBy((item) => item.location.x!)
  }

  beforeItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama || move.location.rotation !== undefined) return []
    const player = move.location.player!
    const tileOnTarget = this
      .material(MaterialType.Firework)
      .location((l) => l.type === LocationType.Panorama && l.player === player && l.x === move.location.x && l.y === move.location.y)
    if (tileOnTarget.length > 0) {
      return [tileOnTarget.deleteItem()]
    }

    return []
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama || move.location.rotation !== undefined) return []
    const player = move.location.player!
    const moves: MaterialMove[] = new FireworkHelper(this.game, player).afterItemMove(move)
    moves.push(this.rules().endPlayerTurn(move.location.player!))
    return moves
  }

  get nextPlayer() {
    const starting = this.remind(Memory.StartPlayer)
    return this.game.players[(this.game.players.indexOf(starting) + 1) % this.game.players.length]
  }

  getMovesAfterPlayersDone(): MaterialMove<PlayerSymbol, MaterialType, LocationType>[] {
    const nextPlayer = this.nextPlayer
    const moves: MaterialMove[] = this.discardOtherPilesMoves
    moves.push(this.rules().startPlayerTurn(RuleId.RotateStore, nextPlayer))
    return moves
  }

  get discardOtherPilesMoves() {
    let pileToClean: number[] = []
    const piles = this.piles
    let maxPileSize: number = 0
    for (let pile = 1; pile <= 4; pile++) {
      const thePile = piles.locationId(pile)
      if (!thePile.length) continue
      const maxPile = thePile.maxBy((item) => item.location.x!)!.getItem()!.location.x!
      if (maxPileSize === maxPile + 1) {
        maxPileSize = maxPile + 1
        pileToClean.push(pile)
      }

      if (maxPile + 1 > maxPileSize) {
        maxPileSize = maxPile + 1
        pileToClean = [pile]
      }
    }

    if (pileToClean.length === 4) return []
    return pileToClean.map((p) => piles.locationId(p).maxBy((item) => item.location.x!).deleteItem())
  }

  get piles() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
  }
}
