/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GameTable, GameTableNavigation } from '@gamepark/react-game'
import { FC } from 'react'
import { PlayerPanels } from './panels/PlayerPanels'

type GameDisplayProps = {
  players: number
}

export const GameDisplay: FC<GameDisplayProps> = () => {
  return <>
    <GameTable xMin={-50} xMax={50} yMin={-30} yMax={30}
               margin={{ top: 7, left: 0, right: 0, bottom: 0 }}>
      <GameTableNavigation css={navigationCss}/>
      <PlayerPanels/>
    </GameTable>
  </>
}

const navigationCss = css`
  left: 80em;
`
