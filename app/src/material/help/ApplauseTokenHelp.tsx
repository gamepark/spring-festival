import { MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const ApplauseTokenHelp: FC<MaterialHelpProps> = (props) => {
  const { item } = props
  const playerId = usePlayerId()
  const itsMe = playerId && playerId === item.location?.player
  const name = usePlayerName(item.location?.player)
  return (
    <>
      <h2>
        <Trans i18nKey="help.applause"/>
      </h2>
      <p>
        <Trans i18nKey="help.applause.vp"/>
      </p>
      <p>
        <Trans i18nKey="help.applause.vp-for-less"/>
      </p>
      { item.location?.type === LocationType.PlayerApplause && (
        <p>
          <Trans i18nKey={itsMe ? "help.applause.count" : "help.applause.count.player"} values={{ player: name, number: item.quantity ?? 0 }}/>
        </p>
      )}
    </>
  )
}