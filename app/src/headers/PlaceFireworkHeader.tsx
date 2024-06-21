/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isCustomMoveType } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { Memory } from '@gamepark/spring-festival/rules/Memory'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import equal from 'fast-deep-equal'
import { Trans } from 'react-i18next'

export const PlaceFireworkHeader = () => {
  const player = usePlayerId()
  const rules = useRules<SpringFestivalRules>()!
  const itsMyTurn = player && rules.isTurnToPlay(player)
  const moves = useLegalMoves((move) => isCustomMoveType(CustomMoveType.ColorComposition)(move))
  const players = rules.game.rule?.players ?? []
  const name = usePlayerName(players[0])


  if (itsMyTurn) {
    if (!rules.remind(Memory.Placed, player)) {
      return (
        <Trans defaults="header.place" />
      )
    } else {
      const selectedIndexes = [...rules.material(MaterialType.Firework).selected().getIndexes()].sort()
      const selection = moves.filter((move) => equal(move.data.indexes, selectedIndexes))

      if (selection.length === 1) {
        return (
          <Trans defaults="header.composition.validate">
            <PlayMoveButton move={selection}/>
          </Trans>
        )
      } else if (selection.length > 1) {
        return <>"Noooooon, j'ai le chois entre 2 tuiles mais Romain n'a pas fait le HEADER"</>
      } else {
        return (
          <Trans defaults="header.composition" />
        )
      }
    }

  }

  const playerThatMustPlace = players.filter((p) => !rules.remind(Memory.Placed, p))
  if (!playerThatMustPlace.length) {
    const playerThatMustCombine = players.filter((p) => rules.remind(Memory.Placed, p))
    if (playerThatMustCombine.length === 1) {
      return <Trans defaults="header.place.player" values={{ player: name }}/>
    } else {
      return <Trans defaults="header.place.players"/>
    }
  } else {
    if (playerThatMustPlace.length === 1) {
      return <Trans defaults="header.composition.player" values={{ player: name }}/>
    } else {
      return <Trans defaults="header.composition.players"/>
    }
  }
}
