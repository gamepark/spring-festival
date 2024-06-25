import { MaterialHelpProps, PlayMoveButton, useLegalMoves, usePlayerId, useRules } from '@gamepark/react-game'
import { isCustomMoveType } from '@gamepark/rules-api'
import { isPattern } from '@gamepark/spring-festival/material/Composition'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import equal from 'fast-deep-equal'
import { FC, useMemo } from 'react'
import { Trans } from 'react-i18next'

export const CompositionHelp: FC<MaterialHelpProps> = (props) => {
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
  const isPatternComposition = isPattern(item.id.front)

  return (
    <>
      {<h2><Trans defaults={isPatternComposition ? "help.composition.pattern" : "help.composition.color"}/></h2>}
      {validateComposition && (
        <Trans defaults="header.composition.validate">
          <PlayMoveButton move={validateComposition} onPlay={closeDialog} />
        </Trans>
      )}
      {/*TODO: Add point into description */}
      <p>
        <Trans defaults="help.composition.text" values={{ number: 10 }}/>
      </p>
      <p>
        <Trans defaults={isPatternComposition ? "help.composition.pattern.text" : "help.composition.color.text"}>
          <strong/>
        </Trans>
      </p>
      <p>
        <Trans defaults="help.composition.blank"/>
      </p>
      <p>
        <Trans defaults="help.composition.rotation"/>
      </p>
    </>
  )

}
