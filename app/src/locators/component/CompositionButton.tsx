/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons/faRotateRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pointerCursorCss, useLegalMoves, useMaterialContext, usePlay, useRules } from '@gamepark/react-game'
import { Coordinates, CustomMove, isCustomMoveType, Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { CompositionHelper } from '@gamepark/spring-festival/rules/helper/CompositionHelper'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import isEqual from 'lodash/isEqual'
import { FC } from 'react'
import { getClockwise } from '../../utils/Clockwise'
import { playerCompositionLocator } from '../PlayerCompositionLocator'

export const CompositionButton: FC<{ location: Location }> = (props) => {
  const { location } = props
  const play = usePlay()
  const legalMoves = useLegalMoves(isCustomMoveType(CustomMoveType.Composition))
  const rules = useRules<SpringFestivalRules>()!
  const context = useMaterialContext()
  const coordinates = playerCompositionLocator.getPosition({ location }, context as any)
  const composition = rules.material(MaterialType.Composition).location((l) => isEqual(l, { ...location, type: LocationType.PlayerComposition }))
  const compositionItem = composition.getItem()!
  const rotateNext = composition.rotateItem(getClockwise((compositionItem.location.rotation ?? 0)))
  const selectedIndexes = [...context.rules.material(MaterialType.Firework).selected().getIndexes()].sort()
  const compoMoves = new CompositionHelper(rules.game, location.player!).compositionMoves
  const moves: CustomMove[] = legalMoves.filter((move) => isCustomMoveType(CustomMoveType.Composition)(move)) as CustomMove[]
  const canValidate = compoMoves.some((move) => isEqual(selectedIndexes, move.data.indexes) && composition.getIndex() === move.data.comp)
  const validateComp = moves.find((move) => isEqual(selectedIndexes, move.data.indexes) && composition.getIndex() === move.data.comp)

  return (
    <>
      <div css={[button(coordinates), canValidate && upButton(coordinates)]} onClick={() => play(rotateNext, { local: true })}>
        <FontAwesomeIcon icon={faRotateRight} css={pointerCursorCss}/>
      </div>
      { canValidate && (
        <div css={[validateButtonCss(coordinates)]} onClick={() => play(validateComp)}>
          <FontAwesomeIcon icon={faCheck} css={pointerCursorCss}/>
        </div>
      )}
    </>


  )
}

const button = (coordinate: Coordinates) => css`
  position: absolute;
  height: 1.7em;
  width: 1.7em;
  transition: transform 0.2s;
  transform: translate3d(${coordinate.x + 2.6}em, ${coordinate.y}em, ${coordinate.z + 1}em);
  //border: 0.1em solid white;
  &:active {
    filter: unset;
  }
  cursor: pointer;
  background-color: white;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  border-radius: 5em;
  filter: drop-shadow(0.05em 0.05em 0.05em black);
`

const upButton = (coordinate: Coordinates) => css`
  transform: translate3d(${coordinate.x + 2.6}em, ${coordinate.y - 1}em, ${coordinate.z + 1}em);
`

const validateButtonCss = (coordinate: Coordinates) => css`
  ${button(coordinate)}
  transform: translate3d(${coordinate.x + 2.6}em, ${coordinate.y + 1}em, ${coordinate.z + 1}em);
`