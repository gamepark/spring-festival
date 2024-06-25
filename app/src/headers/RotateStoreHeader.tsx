/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isMoveItemType, isStartSimultaneousRule } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { Trans } from 'react-i18next'

export const RotateStoreHeader = () => {
  const pass = useLegalMove((move) => isStartSimultaneousRule(move) && move.id === RuleId.PlaceFirework)
  const rules = useRules<SpringFestivalRules>()!
  const storeRotation = rules.material(MaterialType.FireworksStore).getItem()!.location.rotation
  const clockwise = useLegalMove((move) => isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation === getClockwise(storeRotation))
  const counterClockwise = useLegalMove((move) => isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation === getCounterClockwise(storeRotation))
  const player = usePlayerId()
  const itsMe = player && rules.isTurnToPlay(player)
  const name = usePlayerName(rules.getActivePlayer())

  if (itsMe) {
    return (
      <Trans
        defaults="header.rotate">
        <PlayMoveButton move={clockwise}/>
        <PlayMoveButton move={counterClockwise}/>
        <PlayMoveButton move={pass}/>
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
