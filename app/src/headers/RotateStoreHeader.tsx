/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove, usePlayerId, useRules } from '@gamepark/react-game'
import { isCustomMoveType, isStartSimultaneousRule } from '@gamepark/rules-api'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { Trans } from 'react-i18next'

export const RotateStoreHeader = () => {
  const pass = useLegalMove((move) => isStartSimultaneousRule(move) && move.id === RuleId.PlaceFirework)
  const clockwise = useLegalMove((move) => isCustomMoveType(CustomMoveType.RotateStore)(move) && move.data > 0)
  const counterClockwise = useLegalMove((move) => isCustomMoveType(CustomMoveType.RotateStore)(move) && move.data < 0)
  const rules = useRules<SpringFestivalRules>()!
  const player = usePlayerId()
  const itsMe = player && rules.isTurnToPlay(player)

  if (itsMe) {
    return (
      <Trans
        defaults="header.rotate">
        <PlayMoveButton move={clockwise}/>
        <PlayMoveButton move={counterClockwise}/>
        <PlayMoveButton move={pass}/>
      </Trans>
    )
  }

  return (
    <Trans defaults="header.rotate.player" />
  )
}
