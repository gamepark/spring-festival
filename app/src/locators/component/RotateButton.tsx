/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons/faRotateRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pointerCursorCss, useMaterialContext, usePlay, useRules } from '@gamepark/react-game'
import { Coordinates, Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import isEqual from 'lodash/isEqual'
import { FC } from 'react'
import { playerCompositionLocator } from '../PlayerCompositionLocator'

export const RotateButton: FC<{ location: Location }> = (props) => {
  const { location } = props
  const play = usePlay()
  const rules = useRules<SpringFestivalRules>()!
  const context = useMaterialContext()
  const coordinates = playerCompositionLocator.getPosition({ location }, context as any)
  const composition = rules.material(MaterialType.Composition).location((l) => isEqual(l, { ...location, type: LocationType.PlayerComposition }))
  const compositionItem = composition.getItem()!
  const rotateNext = composition.rotateItem(((compositionItem.location.rotation ?? 0) + 1) % 4)
  return (
    <div css={button(coordinates)} onClick={() => play(rotateNext, { local: true })}>
      <FontAwesomeIcon icon={faRotateRight} css={pointerCursorCss}/>
    </div>
  )
}

const button = (coordinate: Coordinates) => css`
  position: absolute;
  height: 1.7em;
  width: 1.7em;
  transform: translate3d(${coordinate.x + 2.6}em, ${coordinate.y - 0.35}em, ${coordinate.z + 1}em);
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