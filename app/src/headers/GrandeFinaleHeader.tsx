import { PlayMoveButton, useLegalMove, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isEndPlayerTurn } from '@gamepark/rules-api'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const GrandeFinaleHeader: FC = () => {
  const playerId = usePlayerId()
  const rules = useRules<SpringFestivalRules>()!
  const iMustPlay = playerId && rules.game.rule?.players?.includes(playerId)
  const name = usePlayerName(rules?.game.rule?.players?.[0])
  const pass = useLegalMove((move) => isEndPlayerTurn(move))



  if (iMustPlay) {
    if (pass) {
      return (
        <Trans i18nKey="header.grandfinal.validate">
          <PlayMoveButton move={pass} />
        </Trans>
      )
    }
    return (
      <Trans i18nKey="header.grandfinal" />
    )
  }

  if (rules?.game.rule?.players?.length === 1) {
    return (
      <Trans i18nKey="header.grandfinal.player" values={{ player: name }} />
    )
  }

  return (
    <Trans i18nKey="header.grandfinal.players" />
  )
}