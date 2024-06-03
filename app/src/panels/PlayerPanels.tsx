/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { PlayerPanel, usePlayers } from '@gamepark/react-game'
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
        <PlayerPanel key={player.id} playerId={player.id} color={playerColorCode[player.id]} css={panelPosition(index)}/>
      )}
    </>,
    root
  )
}
const panelPosition = (index: number) => css`
  position: absolute;
  right: 1em;
  top: ${8.5 + index * 16}em;
  width: 28em;
  height: 14em;
`

export const playerColorCode: Record<PlayerSymbol, string> = {
  [PlayerSymbol.One]: 'One',
  [PlayerSymbol.Two]: 'Two',
  [PlayerSymbol.Three]: 'Three',
  [PlayerSymbol.Four]: 'Four'
}