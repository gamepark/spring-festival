import { Material, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class PlaceFireworkRule extends SimultaneousRule<PlayerSymbol, MaterialType, LocationType> {
  getActivePlayerLegalMoves(playerId: PlayerSymbol): MaterialMove[] {
    const panorama = this.getPanorama(playerId)
    if (!panorama.length) return this.getTile(playerId).moveItems({ type: LocationType.Panorama, player: playerId })
    return []
  }

  getPanorama(playerId: PlayerSymbol) {
    return this.material(MaterialType.Firework)
      .location(LocationType.Panorama)
      .player(playerId)
  }

  getTile(playerId: PlayerSymbol): Material {
    const players = this.game.players.length
    const starting = this.starting
    const selectedPile = this.selectedPile
    if (players === 2) {
      if (starting === playerId) return this.material(MaterialType.Firework).location(LocationType.FireworksStorePile).locationId(selectedPile)
      return this.material(MaterialType.Firework).location(LocationType.FireworksStorePile).locationId(this.getNextPile(2))
    }

    return this.material(MaterialType.Firework).location(LocationType.FireworksStorePile)
  }

  get starting() {
    return this.remind<PlayerSymbol>(Memory.StartPlayer)
  }

  get selectedPile() {
    return this.remind(Memory.ChosenPile)
  }

  getNextPile(step: number): number {
    const pile = this.remind(Memory.ChosenPile)
    const piles = [1, 2, 3, 4]
    return piles[(piles.indexOf(pile) + piles.length - step) % piles.length]
  }

  getMovesAfterPlayersDone(): MaterialMove<PlayerSymbol, MaterialType, LocationType>[] {
    // TODO:  NEXT PLAYER
    return [this.rules().startPlayerTurn(RuleId.RotateStore, this.game.players[0])]
  }
}
