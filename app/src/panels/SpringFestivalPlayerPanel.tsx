/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Player } from '@gamepark/react-client'
import { StyledPlayerPanel, useFocusContext, useMaterialContext, usePlayerId, useRules } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ScoringHelper } from '@gamepark/spring-festival/rules/helper/ScoringHelper'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC, useCallback } from 'react'
import PlayerOneBackground from '../images/player/player-1-background.jpg'
import PlayerTwoBackground from '../images/player/player-2-background.jpg'
import PlayerThreeBackground from '../images/player/player-3-background.jpg'
import PlayerFourBackground from '../images/player/player-4-background.jpg'
import ApplauseToken from '../images/token/applause.jpg'
import TotalIcon from '../images/total.jpg'
import { fireworkDescription } from '../material/FireworkDescription'
import { getComputedIndex } from '../utils/PlayerPosition'

type SpringFestivalPlayerPanelProps = {
  player: Player
}

export const SpringFestivalPlayerPanel: FC<SpringFestivalPlayerPanelProps> = (props) => {
  const { player } = props
  const { setFocus } = useFocusContext()
  const context = useMaterialContext()
  const rules = useRules<SpringFestivalRules>()!
  const isEnded = !rules.game.rule?.id
  const playerId = usePlayerId()
  const itsMe = playerId && player.id === playerId
  const focusPlayer = useCallback(() => {
    setFocus({
      materials: [
        rules.material(MaterialType.Firework).location(LocationType.Panorama).player(player.id),
        rules.material(MaterialType.Firework).location(LocationType.PlayerHand).player(player.id),
        rules.material(MaterialType.Composition).player(player.id),
        ...(itsMe ? [rules.material(MaterialType.FireworksStore)] : [])
      ],
      staticItems: [],
      locations: [],
      margin: {
        top: itsMe ? fireworkDescription.height : 0.5,
        left: itsMe ? fireworkDescription.height : 0.5,
        right: 0.5,
        bottom: 0.5
      },
      animationTime: 500
    })
  }, [rules, player])

  return (
    <StyledPlayerPanel
      key={player.id}
      activeRing
      player={player}
      onClick={focusPlayer}
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
  )
}
const panelPosition = (index: number) => {
  const position = getPosition(index)
  return css`
    cursor: pointer;
    position: absolute;
    right: ${position.right ? `${position.right}em` : 'unset'};
    top: ${position.top ? `${position.top}em` : 'unset'};
    left: ${position.left ? `${position.left}em` : 'unset'};
    bottom: ${position.bottom ? `${position.bottom}em` : 'unset'};
  `
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