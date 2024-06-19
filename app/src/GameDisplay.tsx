/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GameTable, GameTableNavigation, MaterialContext, usePlayerId, useRules } from '@gamepark/react-game'
import { PlayerBoundaries } from '@gamepark/spring-festival/rules/helper/PlayerBoundaries'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC, useMemo } from 'react'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import { PlayerPanels } from './panels/PlayerPanels'
import { getComputedIndex, gridHeight, gridMinX, gridMinY, gridWidth } from './utils/PlayerPosition'

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
      xMin={-53 - extraSpace.xMin}
      xMax={53 + extraSpace.xMax}
      yMin={-28 - extraSpace.yMin}
      yMax={28 + extraSpace.yMax}
      margin={{ top: 7.5, left: 0, right: 0, bottom: 0 }}
      css={css`background-color: rgba(255, 255, 255, 0.5)`}
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
  const minY = gridMinY(players.length)
  for (const p of players) {
    const index = getComputedIndex(context, p)
    const boundaries = new PlayerBoundaries(context.rules.game, p).boudaries
    const deltaX = boundaries.deltaX
    const deltaY = boundaries.deltaY
    switch (index) {
      case 0:
        if (deltaX >= gridWidth) additionalMinXSpaces = Math.max(additionalMinXSpaces, deltaX - gridWidth + 1)
        if (deltaX < gridWidth && boundaries.minX <= -3) additionalMinXSpaces = Math.max(additionalMinXSpaces, 1)
        if ((boundaries.deltaX >= gridWidth || (boundaries.maxX >= gridMinX && boundaries.deltaX === (gridWidth - 1)))) additionalMinXSpaces += 1
        if (deltaY >= height) additionalMaxYSpaces = Math.max(additionalMaxYSpaces, deltaY - height + 1)
        if (deltaY < height && boundaries.maxY >= minY) additionalMaxYSpaces = Math.max(additionalMaxYSpaces, 1)
        if ((boundaries.deltaY >= height || (boundaries.minY <= -minY))) additionalMinYSpaces += 1
        break
      case 1:
        if (deltaX >= gridWidth) additionalMinXSpaces = Math.max(additionalMinXSpaces, deltaX - gridWidth)
        if (deltaY >= height) additionalMinYSpaces = Math.max(additionalMinYSpaces, deltaY - height)
        break
      case 2:
        if (deltaX >= gridWidth) additionalMaxXSpaces = Math.max(additionalMaxXSpaces, deltaX - gridWidth)
        if (deltaY >= height) additionalMinYSpaces = Math.max(additionalMinYSpaces,  deltaY - height)
        break
      case 3:
        console.log(deltaX, gridWidth, additionalMaxXSpaces)
        if (deltaX >= gridWidth) additionalMaxXSpaces = Math.max(additionalMaxXSpaces, deltaX - gridWidth)
        if (deltaY >= height) additionalMaxYSpaces = Math.max(additionalMaxYSpaces,  deltaY - height)
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
  left: 50%;
  transform: translateX(-50%);
`
