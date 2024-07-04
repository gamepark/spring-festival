/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons/faRotateLeft'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons/faRotateRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pointerCursorCss, useLegalMove, usePlay, useRules } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import isEqual from 'lodash/isEqual'
import { FC } from 'react'
import { getClockwise, getCounterClockwise } from '../../utils/Clockwise'

export const RotateStoreButton: FC<{ location: Location }> = () => {
  const rules = useRules<SpringFestivalRules>()!
  const storeLocation = rules.material(MaterialType.FireworksStore).getItem()!.location
  const clockwise = rules.material(MaterialType.FireworksStore).moveItem({
    type: LocationType.FireworksStore,
    rotation: getCounterClockwise(storeLocation.rotation)
  })
  const counterClockwise = rules.material(MaterialType.FireworksStore).moveItem({
    type: LocationType.FireworksStore,
    rotation: getClockwise(storeLocation.rotation)
  })
  const validation = rules.material(MaterialType.FireworksStore).moveItem(storeLocation)
  const validate = useLegalMove((move) => isEqual(move, validation))
  const play = usePlay()
  return (
    <>

      <div css={[button, left, upRotate]} onClick={() => play(clockwise, { local: true })}>
        <FontAwesomeIcon icon={faRotateRight} css={[pointerCursorCss, bigIconCss]}/>
      </div>

      <div css={[button, validateCss, !validate && disabledCss]} onClick={() => validate ? play(validate) : undefined}>
        <FontAwesomeIcon icon={faCheck} css={[pointerCursorCss, bigIconCss]}/>
      </div>

      <div css={[button, right]} onClick={() => play(counterClockwise, { local: true })}>
        <FontAwesomeIcon icon={faRotateLeft} css={[pointerCursorCss, bigIconCss]}/>
      </div>
    </>
  )
}

const left = css`
  transition: transform 0.2s;
  transform: translate3d(-11.5em, -0.5em, 1em);
`

const upRotate = css`
  transform: translate3d(-11.5em, -2em, 1em);
`

const validateCss = css`
  transform: translate3d(-11.5em, 0.5em, 1em);
`

const right = css`
  transform: translate3d(10.5em, -0.5em, 1em);
`

const button = css`
  position: absolute;
  height: 2em;
  width: 2em;
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

const bigIconCss = css`
  font-size: 1.3em;
`

const disabledCss = css`
  &:active {
    filter: drop-shadow(0.05em 0.05em 0.05em black);
  }

  opacity: 0.5;
  cursor: not-allowed;
  > * {
    cursor: not-allowed;
  }
`