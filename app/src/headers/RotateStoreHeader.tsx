/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isMoveItemType, isSetTutorialStep } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { Trans } from 'react-i18next'

export const RotateStoreHeader = () => {
  const rules = useRules<SpringFestivalRules>()!
  const storeLocation = rules.material(MaterialType.FireworksStore).getItem()!.location
  const legalMoves = useLegalMoves((move) => !isSetTutorialStep(move))
  const clockwise = useLegalMove((move) => isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation === getClockwise(storeLocation.rotation))
  const counterClockwise = useLegalMove((move) => isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation === getCounterClockwise(storeLocation.rotation))
  const validation = legalMoves.length > 0? rules.material(MaterialType.FireworksStore).moveItem(storeLocation): undefined
  console.log(legalMoves)
  const player = usePlayerId()
  const itsMe = player && rules.isTurnToPlay(player)
  const name = usePlayerName(rules.getActivePlayer())

  if (itsMe) {
    return (
      <Trans
        defaults="header.rotate">
        <PlayMoveButton move={clockwise} local/>
        <PlayMoveButton move={counterClockwise} local/>
        <PlayMoveButton move={validation}/>
      </Trans>
    )
  }

  return (
    <Trans defaults="header.rotate.player" values={{ player: name}} />
  )
}


const getClockwise = (pile: number) => {
  return (((pile - 1) + 4 - 1) % 4) + 1
}

const getCounterClockwise = (pile: number) => {
  return ((pile) % 4) + 1
}
