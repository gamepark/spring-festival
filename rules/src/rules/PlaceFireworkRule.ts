import { isMoveItemType, ItemMove, Material, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { AvailableSpaceHelper } from './helper/AvailableSpaceHelper'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class PlaceFireworkRule extends SimultaneousRule<PlayerSymbol, MaterialType, LocationType> {
  getActivePlayerLegalMoves(playerId: PlayerSymbol): MaterialMove[] {
    const helper = new AvailableSpaceHelper(this.game, playerId)
    const tile = this.getTile(playerId)
    return helper.availableSpaces.map((location) => tile.moveItem(location))
  }

  getTile(playerId: PlayerSymbol): Material {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
      .locationId(this.getPileFor(playerId))
      .maxBy((item) => item.location.x!)
  }

  getPileFor(player: PlayerSymbol) {
    const position = this.game.players.findIndex(p => player === p)
    const rotation = this.storeRotation
    const step = rotation + this.getStepForPosition(position)
    const pile = (4 - step) % 4
    return pile < 0 ? (4 + pile + 1): (pile + 1)
  }

  get storeRotation() {
    return this
      .material(MaterialType.FireworksStore)
      .getItem()!
      .location
      .rotation
  }

  getStepForPosition(position: number) {
    switch (this.game.players.length) {
      case 2:
        return position === 1? 2: 0
      case 3:
      case 4:
      default:
        return position
    }
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
    console.log("CALLED")
    const nextPlayer = this.nextPlayer
    this.memorize(Memory.StartPlayer, nextPlayer)
    return [this.rules().startPlayerTurn(RuleId.RotateStore, nextPlayer)]
  }
}
