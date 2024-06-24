import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const GrandeFinaleHeader: FC = () => {
  const playerId = usePlayerId()
  const rules = useRules<SpringFestivalRules>()
  const iMustPlay = playerId && rules?.isTurnToPlay(playerId)
  const name = usePlayerName(rules?.game.rule?.players?.[0])

  if (iMustPlay) {
    return (
      <Trans defaults="header.grandfinal" />
    )
  }

  if (rules?.game.rule?.players?.length === 1) {
    return (
      <Trans defaults="header.grandfinal.player" values={{ player: name }} />
    )
  }

  return (
    <Trans defaults="header.grandfinal.players" />
  )
}