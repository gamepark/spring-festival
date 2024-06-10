import { isMoveItemType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { AvailableSpaceHelper } from './helper/AvailableSpaceHelper'
import { RuleId } from './RuleId'

export class PlaceBaseFireworkRule extends SimultaneousRule<PlayerSymbol, MaterialType, LocationType> {
  getActivePlayerLegalMoves(playerId: PlayerSymbol): MaterialMove[] {
    const helper = new AvailableSpaceHelper(this.game, playerId)
    const hand = this.getHand(playerId)
    return helper.availableSpaces.flatMap((location) => hand.moveItems(location))
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama) return []
    const player = move.location.player!
    if (!this.getHand(player).length) {
      return [
        this.rules().endPlayerTurn(player)
      ]
    }

    return []
  }

  getHand(playerId: PlayerSymbol) {
    return this.material(MaterialType.Firework)
      .location(LocationType.PlayerHand)
      .player(playerId)
  }

  getMovesAfterPlayersDone(): MaterialMove<PlayerSymbol, MaterialType, LocationType>[] {
    return [
      this.rules().startPlayerTurn(RuleId.RotateStore, this.game.players[0])
    ]
  }
}
