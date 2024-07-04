/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pointerCursorCss, useLegalMove, usePlay } from '@gamepark/react-game'
import { isEndPlayerTurn, Location } from '@gamepark/rules-api'
import { FC } from 'react'

export const PanoramaButton: FC<{ location: Location }> = () => {
  const play = usePlay()
  const move = useLegalMove(isEndPlayerTurn)

  return (
    <div css={[button]} onClick={() => move? play(move): undefined}>
      <FontAwesomeIcon icon={faCheck} css={[pointerCursorCss, bigIconCss]}/>
    </div>
  )
}

const button = css`
  position: absolute;
  height: 2em;
  width: 2em;
  transition: transform 0.2s;
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