import { MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { AvailableSpaceHelper } from './helper/AvailableSpaceHelper'
import { RuleId } from './RuleId'

export class PlaceBaseFireworkRule extends SimultaneousRule<PlayerSymbol, MaterialType, LocationType> {
  getActivePlayerLegalMoves(playerId: PlayerSymbol): MaterialMove[] {
    const helper = new AvailableSpaceHelper(this.game, playerId)
    const hand = this.getHand(playerId)
    const spaces = helper.availableSpaces.flatMap((location) => hand.moveItems(location))
    if (!spaces.length) {
      return [this.rules().endPlayerTurn(playerId)]
    }
    return spaces
  }

  isTurnToPlay(player: PlayerSymbol): boolean {
    console.trace(player,super.isTurnToPlay(player), this.game.rule?.players?.includes(player) )
    return super.isTurnToPlay(player)
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
