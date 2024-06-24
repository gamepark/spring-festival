import { MaterialHelpProps, PlayMoveButton, useLegalMoves, usePlayerId, useRules } from '@gamepark/react-game'
import { isCustomMoveType } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import equal from 'fast-deep-equal'
import { FC, useMemo } from 'react'

export const CompositionDescriptionHelp: FC<MaterialHelpProps> = (props) => {
  const { item, itemIndex, closeDialog } = props
  const rules = useRules<SpringFestivalRules>()!
  const legalMoves = useLegalMoves()
  const playerId = usePlayerId()
  const validateComposition = useMemo(() => {
    if (item.location?.type !== LocationType.PlayerComposition || !playerId || playerId !== item.location?.player) return false
    if (itemIndex === undefined) return false
    const indexes = [...rules.material(MaterialType.Firework).selected().getIndexes()].sort()
    return legalMoves.find((move) => isCustomMoveType(CustomMoveType.Composition)(move) && equal(indexes, move.data.indexes) && itemIndex === move.data.comp)
  }, [rules])

  return (
    <>
      {validateComposition && <PlayMoveButton move={validateComposition} onPlay={closeDialog}>Validate this composition</PlayMoveButton>}
    </>
  )

}
