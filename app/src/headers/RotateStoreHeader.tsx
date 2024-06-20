/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { isCustomMoveType, isStartSimultaneousRule } from '@gamepark/rules-api'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { Trans } from 'react-i18next'

export const RotateStoreHeader = () => {
  const pass = useLegalMove((move) => isStartSimultaneousRule(move) && move.id === RuleId.PlaceFirework)
  const previous = useLegalMove((move) => isCustomMoveType(CustomMoveType.RotateStore)(move) && move.data < 0)
  const next = useLegalMove((move) => isCustomMoveType(CustomMoveType.RotateStore)(move) && move.data > 0)
  return (
    <Trans
      defaults="header.rotate">
      <PlayMoveButton move={next}/>
      <PlayMoveButton move={previous}/>
      <PlayMoveButton move={pass}/>
    </Trans>
  )
}
