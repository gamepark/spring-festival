import { PlayerTurnRule } from '@gamepark/rules-api'
import { MaterialType } from '../material/MaterialType'
import { RuleId } from './RuleId'

export class RotateStoreRule extends PlayerTurnRule {
  getPlayerMoves() {
    return [
      this.rules().startSimultaneousRule(RuleId.PlaceFirework, this.game.players),
      this.material(MaterialType.FireworksStore).rotateItem((item) => (item.location.rotation + 1) % 4)
    ]
  }
}
