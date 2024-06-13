/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GameTable, GameTableNavigation, MaterialContext, usePlayerId, useRules } from '@gamepark/react-game'
import { PlayerBoundaries } from '@gamepark/spring-festival/rules/helper/PlayerBoundaries'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC, useMemo } from 'react'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import { PlayerPanels } from './panels/PlayerPanels'
import { getComputedIndex } from './utils/PlayerPosition'

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
      xMin={-47.3 - extraSpace.xMin}
      xMax={47.3 + extraSpace.xMax}
      yMin={-27.5 - extraSpace.yMin}
      yMax={27.5 + extraSpace.yMax}
      margin={{ top: 7, left: 0, right: 0, bottom: 0 }}
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
  const gridHeight = context.rules.players.length === 2? 9: 5
  const gridWidth = 7
  const gridMinY = Math.floor(gridHeight / 2)
  const { rules: { players } } = context
  for (const p of players) {
    const index = getComputedIndex(context, p)
    const boundaries = new PlayerBoundaries(context.rules.game, p).boudaries
    const deltaX = boundaries.deltaX
    const deltaY = boundaries.deltaY
    switch (index) {
      case 0:
        if (deltaX >= gridWidth) additionalMinXSpaces = Math.max(additionalMinXSpaces, deltaX - gridWidth + 1)
        if (deltaX < gridWidth && boundaries.minX <= -3) additionalMinXSpaces = Math.max(additionalMinXSpaces, 1)
        if (deltaY >= gridHeight) additionalMaxYSpaces = Math.max(additionalMaxYSpaces, deltaY - gridHeight + 1)
        if (deltaY < gridHeight && boundaries.maxY >= gridMinY) additionalMaxYSpaces = Math.max(additionalMaxYSpaces, 1)
        break
      case 1:
        if (deltaX >= gridWidth) additionalMinXSpaces = Math.max(additionalMinXSpaces, deltaX - gridWidth + 1)
        if (deltaX < gridWidth && boundaries.minX <= -3) additionalMinXSpaces = Math.max(additionalMinXSpaces, 1)
        if (deltaY >= gridHeight) additionalMinYSpaces = Math.max(additionalMinYSpaces, deltaY - gridHeight + 1)
        if (deltaY < gridHeight && boundaries.minY <= -gridMinY) additionalMinYSpaces = Math.max(additionalMinYSpaces, 1)
        break
      case 2:
        if (deltaX >= gridWidth) additionalMaxXSpaces = Math.max(additionalMaxXSpaces, deltaX - gridWidth + 1)
        if (deltaX < gridWidth && boundaries.maxX >= 3) additionalMaxXSpaces = Math.max(additionalMaxXSpaces, 1)
        if (deltaY >= gridHeight) additionalMinYSpaces = Math.max(additionalMinYSpaces,  deltaY - gridHeight + 1)
        if (deltaY < gridHeight && boundaries.minY <= -gridMinY) additionalMinYSpaces = Math.max(additionalMinYSpaces, 1)
        break
      case 3:
        if (deltaX >= gridWidth) additionalMaxXSpaces = Math.max(additionalMaxXSpaces, deltaX - gridWidth + 1)
        if (deltaX < gridWidth && boundaries.maxX >= 3) additionalMaxXSpaces = Math.max(additionalMaxXSpaces, 1)
        if (deltaY >= gridHeight) additionalMaxYSpaces = Math.max(additionalMaxYSpaces,  deltaY - gridHeight + 1)
        if (deltaY < gridHeight && boundaries.maxY >= gridMinY) additionalMaxYSpaces = Math.max(additionalMaxYSpaces, 1)
        break

    }
  }

  console.log(
    additionalMinXSpaces,
    additionalMaxXSpaces,
    additionalMinYSpaces,
    additionalMaxYSpaces
  )

  const margins = {
    xMin: 5 * additionalMinXSpaces,
    xMax: 5 * additionalMaxXSpaces,
    yMin: 5 * additionalMinYSpaces,
    yMax: 5 * additionalMaxYSpaces
  }

  console.log(margins)

  return margins
}


const navigationCss = css`
  left: 80em;
`
