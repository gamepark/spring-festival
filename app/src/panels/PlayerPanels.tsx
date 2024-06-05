/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledPlayerPanel, usePlayers } from '@gamepark/react-game'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { FC } from 'react'
import { createPortal } from 'react-dom'

export const PlayerPanels: FC<any> = () => {
  const players = usePlayers({ sortFromMe: true })
  const root = document.getElementById('root')
  if (!root) {
    return null
  }

  return createPortal(
    <>
      {players.map((player, index) =>
        <StyledPlayerPanel key={player.id} player={player} css={panelPosition(index)}/>
      )}
    </>,
    root
  )
}
const panelPosition = (index: number) => css`
  position: absolute;
  top: 8.5em;
  left: ${index === 0? '1em': 'unset'};
  right: ${index === 1? '1em': 'unset'};
`

export const playerColorCode: Record<PlayerSymbol, string> = {
  [PlayerSymbol.One]: 'One',
  [PlayerSymbol.Two]: 'Two',
  [PlayerSymbol.Three]: 'Three',
  [PlayerSymbol.Four]: 'Four'
}
