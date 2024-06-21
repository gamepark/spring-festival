import { CustomMove, isCustomMoveType, isMoveItemType, ItemMove, Material, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { CompositionType } from '../material/Composition'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerSymbol } from '../PlayerSymbol'
import { CustomMoveType } from './CustomMoveType'
import { ApplauseHelper } from './helper/ApplauseHelper'
import { AvailableSpaceHelper } from './helper/AvailableSpaceHelper'
import { CompositionHelper } from './helper/CompositionHelper'
import { FireworkHelper } from './helper/FireworkHelper'
import { SearchPileHelper } from './helper/SearchPileHelper'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class PlaceFireworkRule extends SimultaneousRule<PlayerSymbol, MaterialType, LocationType> {
  getActivePlayerLegalMoves(playerId: PlayerSymbol): MaterialMove[] {

    if (!this.hasPlacedFirework(playerId)) {
      const helper = new AvailableSpaceHelper(this.game, playerId)
      const tile = this.getTile(playerId)
      return helper.availableSpaces.map((location) => tile.moveItem(location))
    } else {
      const moves = new CompositionHelper(this.game, playerId).compositionMoves
      if (!moves.length) {
        return [this.rules().endPlayerTurn(playerId)]
      }

      return moves
    }
  }

  hasPlacedFirework(playerId: PlayerSymbol): boolean {
    return this.remind(Memory.Placed, playerId)
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

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.ColorComposition)(move)) return []
    this.material(MaterialType.Firework).indexes(move.data.indexes).selected().getItems().forEach((item) => delete item.selected)
    const composition = this.material(MaterialType.Composition).index(move.data.comp)
    const player = composition.getItem()!.location.player!

    const moves: MaterialMove[] = [
      this.material(MaterialType.Composition).index(move.data.comp).moveItem({ type: LocationType.PlayerDoneComposition, player: player }),
      ...this.material(MaterialType.Firework).indexes(move.data.indexes).rotateItems(false)
    ]

    const drawCompositionFrom = composition.getItem()!.id.back === CompositionType.Color ? LocationType.ColorComposition : LocationType.PatternComposition
    const drawCompositionTo = composition.getItem()!.id.back
    const compositions = this.material(MaterialType.Composition).location(drawCompositionFrom)
    if (compositions.length) {
      moves.push(
        compositions
          .maxBy((item) => item.location.x!)
          .moveItem({
            type: LocationType.PlayerComposition,
            id: drawCompositionTo,
            player: player
          })
      )
    } else {
      const compositionMoves = new CompositionHelper(this.game, player!)
        .compositionMoves
        .filter((c) => c.data.comp !== move.data.comp)
      if (!compositionMoves.length) {
        moves.push(this.rules().endPlayerTurn(player))
      }
    }

    return moves
  }

  afterItemMove(move: ItemMove) {
    if (isMoveItemType(MaterialType.Composition)(move) && move.location.type === LocationType.PlayerComposition) {
      const player = move.location.player!
      const compositionMoves = new CompositionHelper(this.game, player).compositionMoves
      if (!compositionMoves.length) {
        return [this.rules().endPlayerTurn(player)]
      }

    }
    if (!isMoveItemType(MaterialType.Firework)(move) || move.location.type !== LocationType.Panorama) return []

    const player = move.location.player!
    if (move.location.rotation === undefined) {
      const explosionMoves = new FireworkHelper(this.game, player).afterItemMove(move)
      const applauseMoves: MaterialMove[] = new ApplauseHelper(this.game, player).afterItemMove(move)
      const moves: MaterialMove[] = [
        ...applauseMoves,
        ...explosionMoves,
      ]

      this.memorize(Memory.RemainingExplosion, explosionMoves.length, player)
      this.memorize(Memory.Placed, true, player)
      return moves
    } else {
      this.memorize(Memory.RemainingExplosion, (r: number) => r-1, player)
      if (!this.remind(Memory.RemainingExplosion, player)) {
        this.forget(Memory.RemainingExplosion, player)
        const compositionMoves = new CompositionHelper(this.game, player).compositionMoves
        if (!compositionMoves.length) {
          return [this.rules().endPlayerTurn(player)]
        }
      }
    }

    return []
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

  onRuleEnd() {
    // TODO: prevent player to
    this.material(MaterialType.Firework).selected().getItems().forEach((item) => delete item.selected)
    return []
  }

  get piles() {
    return this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
  }
}
