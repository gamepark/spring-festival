import { isMoveItemType, ItemMove, Location, Material, MaterialItem, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { Memory } from './Memory'
import { RuleId } from './RuleId'
import equal from 'fast-deep-equal'

export class PlaceFireworkRule extends SimultaneousRule<PlayerSymbol, MaterialType, LocationType> {
  getActivePlayerLegalMoves(playerId: PlayerSymbol): MaterialMove[] {
    const panorama = this.getPanorama(playerId)
    if (!panorama.length) return this.getTile(playerId).moveItems({ type: LocationType.Panorama, player: playerId, x: 0, y: 0 })
    console.log(panorama.getItems(), playerId, this.getAvailableSpaces(panorama))
    return this.getAvailableSpaces(panorama).map((location) => this.getTile(playerId).moveItem(location))
  }

  getAvailableSpaces(panorama: Material) {
    const locations = []
    const items = panorama.getItems()
    for (const item of items) {
      const left = { ...item.location, x: item.location.x! - 1 }
      if (this.canPlaceItemInLocation(left, items, locations)) locations.push(left)
      const right = { ...item.location, x: item.location.x! + 1 }
      if (this.canPlaceItemInLocation(right, items, locations)) locations.push(right)
      const top = { ...item.location, y: item.location.x! - 1 }
      if (this.canPlaceItemInLocation(top, items, locations)) locations.push(top)
      const bottom = { ...item.location, y: item.location.x! + 1 }
      if (this.canPlaceItemInLocation(bottom, items, locations)) locations.push(bottom)
    }

    return locations
  }

  canPlaceItemInLocation(location: Location, panorama: MaterialItem[], allowedLocations: Location[]): boolean {
    console.log(
      location,
      panorama.find((item) => equal(item.location, location)),
      !panorama.some((item) => equal(item.location, location)),
      !allowedLocations.some((l) => equal(l, location))
    )
    return !panorama.some((item) => equal(item.location, location))
      && !allowedLocations.some((l) => equal(l, location))
  }

  getPanorama(playerId: PlayerSymbol) {
    return this.material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(playerId)
  }

  getTile(playerId: PlayerSymbol): Material {
    console.log(`Pile for ${playerId}: ${this.getPileFor(playerId)}`)
    return this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
      .locationId(this.getPileFor(playerId))
      .maxBy((item) => item.location.x!)
  }

  getPileFor(player: PlayerSymbol) {
    const position = this.game.players.findIndex(p => player === p)
    const rotation = this.remind(Memory.StoreRotation)
    const step = rotation + this.getStepForPosition(position)
    const pile = (4 - step) % 4
    return pile < 0 ? (4 + pile + 1): (pile + 1)
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
    return [this.rules().startPlayerTurn(RuleId.RotateStore, this.nextPlayer)]
  }
}
