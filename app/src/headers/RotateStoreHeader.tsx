/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { isStartSimultaneousRule } from '@gamepark/rules-api'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'

export const RotateStoreHeader = () => {
  const pass = useLegalMove((move) => isStartSimultaneousRule(move) && move.id === RuleId.PlaceFirework)
  return <>You can rotate the store or <PlayMoveButton move={pass}>Pass</PlayMoveButton></>
}
