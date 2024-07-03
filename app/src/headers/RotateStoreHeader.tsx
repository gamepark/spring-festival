/** @jsxImportSource @emotion/react */
import { PlayMoveButton, useLegalMove, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import isEqual from 'lodash/isEqual'
import { Trans } from 'react-i18next'

export const RotateStoreHeader = () => {
  const rules = useRules<SpringFestivalRules>()!
  const storeLocation = rules.material(MaterialType.FireworksStore).getItem()!.location
  const clockwise = rules.material(MaterialType.FireworksStore).moveItem({ type: LocationType.FireworksStore, rotation: getClockwise(storeLocation.rotation) })
  const counterClockwise = rules.material(MaterialType.FireworksStore).moveItem({ type: LocationType.FireworksStore, rotation: getCounterClockwise(storeLocation.rotation) })
  const validation = rules.material(MaterialType.FireworksStore).moveItem(storeLocation)
  const validate = useLegalMove((move) => isEqual(move, validation))

  const player = usePlayerId()
  const itsMe = player && rules.isTurnToPlay(player)
  const name = usePlayerName(rules.getActivePlayer())

  if (itsMe) {
    return (
      <Trans
        defaults="header.rotate">
        <PlayMoveButton move={clockwise} local/>
        <PlayMoveButton move={counterClockwise} local/>
        <PlayMoveButton move={validate}/>
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
