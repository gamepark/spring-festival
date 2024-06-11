import { isMoveItemType, ItemMove, Material, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { AvailableSpaceHelper } from './helper/AvailableSpaceHelper'
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

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama) return []
    return [
      this.rules().endPlayerTurn(move.location.player!)
    ]
  }

  get nextPlayer() {
    const starting = this.remind(Memory.StartPlayer)
    return this.game.players[(this.game.players.indexOf(starting) + 1) % this.game.players.length]
  }

  getMovesAfterPlayersDone(): MaterialMove<PlayerSymbol, MaterialType, LocationType>[] {
    // TODO:  NEXT PLAYER
    const nextPlayer = this.nextPlayer
    return [this.rules().startPlayerTurn(RuleId.RotateStore, nextPlayer)]
  }
}
