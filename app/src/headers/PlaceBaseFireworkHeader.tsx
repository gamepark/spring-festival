/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isEndPlayerTurn } from '@gamepark/rules-api'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { Trans } from 'react-i18next'

export const PlaceBaseFireworkHeader = () => {
  const playerId = usePlayerId()
  const rules = useRules<SpringFestivalRules>()!
  const pass = useLegalMove((move) => isEndPlayerTurn(move))
  const players = rules.game.rule?.players ?? []
  const itsMyTurn = playerId && players.includes(playerId)
  const name = usePlayerName(players[0])

  if (itsMyTurn) {
    if (!pass) return <Trans defaults="header.place.start" />
    return (
      <Trans defaults="header.validate.placement">
        <PlayMoveButton move={pass}/>
      </Trans>
    )
  }

  if (players.length > 1) return <Trans defaults="header.place.start.players" />
  return <Trans defaults="header.place.start.player" values={{ player: name }} />
}
