/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, StyledPlayerPanel, usePlayerId, usePlayers, useRules } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import ApplauseToken from '../images/token/applause.jpg'
import { Locators } from '../locators/Locators'
import { Material } from '../material/Material'
import { getComputedIndex } from '../utils/PlayerPosition'

export const PlayerPanels: FC<any> = () => {
  const players = usePlayers({ sortFromMe: true })
  const root = document.getElementById('root')
  const rules = useRules<SpringFestivalRules>()!
  const player = usePlayerId()
  const context: MaterialContext = { locators: Locators, material: Material, rules, player }
  if (!root) {
    return null
  }

  return createPortal(
    <>
      {players.map((player) =>
        <StyledPlayerPanel
          key={player.id}
          player={player}
          css={panelPosition(getComputedIndex(context, player.id))}
          mainCounter={{
            image: ApplauseToken,
            value: rules.material(MaterialType.ApplauseToken).player(player.id).getItem()?.quantity ?? 0,
            imageCss: imageCss
          }}
        />
      )}
    </>,
    root
  )
}
const panelPosition = (index: number) => {
  const position = getPosition(index)
  return css`
    position: absolute;
    right: ${position.right ? `${position.right}em` : 'unset'};
    top: ${position.top ? `${position.top}em` : 'unset'};
    left: ${position.left ? `${position.left}em` : 'unset'};
    bottom: ${position.bottom ? `${position.bottom}em` : 'unset'};
  `
}

const getPosition = (index: number): { top?: number, right?: number, bottom?: number, left?: number } => {
  switch (index) {
    case 0:
      return {
        bottom: 1,
        left: 1
      }
    case 1:
      return {
        top: 8.5,
        left: 1
      }
    case 2:
      return {
        top: 8.5,
        right: 1
      }
    case 3:
    default:
      return {
        bottom: 1,
        right: 1
      }
  }
}

const imageCss = css`
  border-radius: 5em;
  border: 0.01em solid white;
`
