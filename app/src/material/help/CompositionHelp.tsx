/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialComponent, MaterialHelpProps, PlayMoveButton, useLegalMoves, usePlayerId, useRules } from '@gamepark/react-game'
import { isCustomMoveType } from '@gamepark/rules-api'
import { colorCompositionDescriptions } from '@gamepark/spring-festival/material/ColorCompositionDescription'
import { isPattern } from '@gamepark/spring-festival/material/Composition'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { patternCompositionDescriptions } from '@gamepark/spring-festival/material/PatternCompositionDescription'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import isEqual from 'lodash/isEqual'
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
    return legalMoves.find((move) => isCustomMoveType(CustomMoveType.Composition)(move) && isEqual(indexes, move.data.indexes) && itemIndex === move.data.comp)
  }, [rules, item, itemIndex, legalMoves, playerId])
  const isPatternComposition = isPattern(item.id.front)

  return (
    <>
      {<h2><Trans defaults={isPatternComposition ? 'help.composition.pattern' : 'help.composition.color'}/></h2>}
      {validateComposition && (
        <p>
          <Trans defaults="header.composition.validate">
            <PlayMoveButton move={validateComposition} onPlay={closeDialog}/>
          </Trans>
        </p>
      )}
      { item.id.front !== undefined && (
        <p>
          <Trans defaults="help.composition.text" values={{ number: (isPatternComposition? patternCompositionDescriptions: colorCompositionDescriptions)[item.id.front].points }}/>
        </p>
      )}
      <p>
        <Trans defaults={isPatternComposition ? 'help.composition.pattern.text' : 'help.composition.color.text'}>
          <strong/>
        </Trans>
      </p>
      <p>
        <Trans defaults="help.composition.blank"/>
      </p>
      <p>
        <Trans defaults="help.composition.rotation"/>
      </p>
      {item.location?.type !== LocationType.ColorComposition && item.location?.type !== LocationType.PatternComposition && (
        <>
          <div css={css`margin-bottom: 0.1em; flex-direction: row; display: flex; justify-content: space-between;`}>
            <MaterialComponent
              type={MaterialType.Composition}
              itemId={item.id}
              css={css`transform: rotateZ(90deg)`}/>
            <MaterialComponent
              type={MaterialType.Composition}
              itemId={item.id}
              css={css`transform: rotateZ(180deg)`}/>
            <MaterialComponent
              type={MaterialType.Composition}
              itemId={item.id}
              css={css`transform: rotateZ(270deg)`}/>
            <MaterialComponent
              type={MaterialType.Composition}
              itemId={item.id}
              css={css`transform: rotateX(-180deg)`}/>
          </div>
        </>
      )}

    </>
  )

}
