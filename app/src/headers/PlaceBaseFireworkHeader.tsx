/** @jsxImportSource @emotion/react */
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { Trans } from 'react-i18next'

export const PlaceBaseFireworkHeader = () => {
  const playerId = usePlayerId()
  const rules = useRules<SpringFestivalRules>()!
  const itsMyTurn = playerId && rules.isTurnToPlay(playerId)
  const players = rules.game.rule?.players ?? []
  const name = usePlayerName(players[0])

  if (itsMyTurn) return <Trans defaults="header.place.start" />

  if (players.length > 1) return <Trans defaults="header.place.start.players" />
  return <Trans defaults="header.place.start.player" values={{ player: name }} />
}
