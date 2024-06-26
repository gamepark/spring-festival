/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialContext, StyledPlayerPanel, usePlayerId, usePlayers, useRules } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ScoringHelper } from '@gamepark/spring-festival/rules/helper/ScoringHelper'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import PlayerOneBackground from '../images/player/player-1-background.jpg'
import PlayerTwoBackground from '../images/player/player-2-background.jpg'
import PlayerThreeBackground from '../images/player/player-3-background.jpg'
import PlayerFourBackground from '../images/player/player-4-background.jpg'
import ApplauseToken from '../images/token/applause.jpg'
import TotalIcon from '../images/total.jpg'
import { Locators } from '../locators/Locators'
import { Material } from '../material/Material'
import { getComputedIndex } from '../utils/PlayerPosition'

export const PlayerPanels: FC<any> = () => {
  const players = usePlayers({ sortFromMe: true })
  const root = document.getElementById('root')
  const rules = useRules<SpringFestivalRules>()!
  const player = usePlayerId()
  const context: MaterialContext = { locators: Locators, material: Material, rules, player }
  const isEnded = !rules.game.rule?.id
  if (!root) return null
  

  return createPortal(
    <>
      {players.map((player) =>
        <StyledPlayerPanel
          key={player.id}
          activeRing
          player={player}
          css={panelPosition(getComputedIndex(context, player.id))}
          backgroundImage={playerBackground[player.id]}
          mainCounter={isEnded ? {
            image: TotalIcon,
            value: new ScoringHelper(rules.game, player.id).score,
            imageCss: imageCss
          } : {
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

const playerBackground: Record<PlayerSymbol, string> = {
  [PlayerSymbol.One]: PlayerOneBackground,
  [PlayerSymbol.Two]: PlayerTwoBackground,
  [PlayerSymbol.Three]: PlayerThreeBackground,
  [PlayerSymbol.Four]: PlayerFourBackground
}

const imageCss = css`
  border-radius: 5em;
  border: 0.01em solid white;
`
