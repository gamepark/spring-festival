/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove, useLegalMoves, useRules } from '@gamepark/react-game'
import { isCustomMoveType, isEndPlayerTurn } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import equal from 'fast-deep-equal'

export const PlaceFireworkHeader = () => {
  const moves = useLegalMoves((move) => isCustomMoveType(CustomMoveType.ColorComposition)(move))
  const pass = useLegalMove((move) => isEndPlayerTurn(move))
  const rules = useRules<SpringFestivalRules>()!
  const selectedIndexes = [...rules.material(MaterialType.Firework).selected().getIndexes()].sort()
  const selection = moves.find((move) => equal(move.data.indexes, selectedIndexes))

  if (selection) {
    return (
      <>
        <PlayMoveButton move={selection}>
          Valider la composition
        </PlayMoveButton>
      </>
    )
  }
  return <><PlayMoveButton move={pass}>Pass</PlayMoveButton></>
}
