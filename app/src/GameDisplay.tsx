/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GameTable, GameTableNavigation, MaterialContext, usePlayerId, useRules } from '@gamepark/react-game'
import { PlayerBoundaries } from '@gamepark/spring-festival/rules/helper/PlayerBoundaries'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC, useMemo } from 'react'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import { PlayerPanels } from './panels/PlayerPanels'
import { getComputedIndex, gridHeight, gridWidth } from './utils/PlayerPosition'

type GameDisplayProps = {
  players: number
}

export const GameDisplay: FC<GameDisplayProps> = () => {
  const player = usePlayerId()
  const rules = useRules<SpringFestivalRules>()!
  const context: MaterialContext = { locators: Locators, material: Material, rules, player }
  const extraSpace = useMemo(() => getExtraSpace(context), [context])
  return <>
    <GameTable
      verticalCenter
      xMin={-55 - extraSpace.xMin}
      xMax={55 + extraSpace.xMax}
      yMin={-28 - extraSpace.yMin}
      yMax={28 + extraSpace.yMax}
      margin={{ top: 7.5, left: 0, right: 0, bottom: 0 }}
      //css={css`background-color: rgba(255, 255, 255, 0.5)`}
    >
      <GameTableNavigation css={navigationCss}/>
      <PlayerPanels/>
    </GameTable>
  </>
}

const getExtraSpace = (context: MaterialContext) => {
  let additionalMinXSpaces = 0
  let additionalMaxXSpaces = 0
  let additionalMinYSpaces = 0
  let additionalMaxYSpaces = 0
  const { rules: { players } } = context
  const height = gridHeight(players.length)
  for (const p of players) {
    const index = getComputedIndex(context, p)
    const boundaries = new PlayerBoundaries(context.rules.game, p).boudaries
    switch (index) {
      case 0:
        if (boundaries.deltaY >= (height - 1)) additionalMaxYSpaces = Math.max(2 + (boundaries.deltaY - height), additionalMaxYSpaces)
        if (boundaries.deltaX >= (gridWidth - 1)) additionalMinXSpaces = Math.max(2 + (boundaries.deltaX - gridWidth), additionalMinXSpaces)
        break
      case 1:
        if (boundaries.deltaY >= (height - 1)) additionalMinYSpaces = Math.max((boundaries.deltaY - height), additionalMinYSpaces)
        if (boundaries.deltaX >= (gridWidth - 1)) additionalMinXSpaces = Math.max((boundaries.deltaX - gridWidth), additionalMinXSpaces)
        break
      case 2:
        if (boundaries.deltaY >= (height - 1)) additionalMinYSpaces = Math.max((boundaries.deltaY - height), additionalMinYSpaces)
        if (boundaries.deltaX >= (gridWidth - 1)) additionalMaxXSpaces = Math.max((boundaries.deltaX - gridWidth), additionalMaxXSpaces)
        break
      case 3:
        if (boundaries.deltaY >= (height - 1)) additionalMaxYSpaces = Math.max((boundaries.deltaY - height), additionalMaxYSpaces)
        if (boundaries.deltaX >= (gridWidth - 1)) additionalMaxXSpaces = Math.max((boundaries.deltaX - gridWidth), additionalMaxXSpaces)
        break

    }
  }

  return {
    xMin: 5.2 * additionalMinXSpaces,
    xMax: 5.2 * additionalMaxXSpaces,
    yMin: 5.2 * additionalMinYSpaces,
    yMax: 5.2 * additionalMaxYSpaces
  }
}


const navigationCss = css`
  position: absolute;
  top: 5em;
  right: 1em;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
`
