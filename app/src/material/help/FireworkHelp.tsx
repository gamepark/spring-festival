/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialComponent, MaterialHelpProps, PlayMoveButton, useLegalMove, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isCustomMoveType, isMoveItemType, isStartSimultaneousRule } from '@gamepark/rules-api'
import { isBaseFirework } from '@gamepark/spring-festival/material/Firework'
import { fireworkDescriptions } from '@gamepark/spring-festival/material/FireworkDescription'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const FireworkHelp: FC<MaterialHelpProps> = (props) => {
  const { item, itemIndex, closeDialog } = props
  const rules = useRules<SpringFestivalRules>()!
  const locationType = item.location?.type
  const playerId = usePlayerId()
  const itsMe = playerId && playerId === item.location?.player
  const name = usePlayerName(item.location?.player)
  const rotateToHere = useLegalMove((move) => isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation === item.location?.id)
  const grandeFinale = useLegalMove((move) => isCustomMoveType(CustomMoveType.GrandeFinale)(move) && move.data === itemIndex)
  const validateRotation = useLegalMove((move) => isStartSimultaneousRule(move) && !rotateToHere)
  const pileCount = locationType === LocationType.FireworksStorePile && item.location?.id !== undefined ? rules.material(MaterialType.Firework).location(LocationType.FireworksStorePile).locationId(item.location.id).length: undefined
  return (
    <>
      {<h2><Trans defaults="help.firework"/></h2>}
      <p>
        <Trans defaults="help.firework.text"
               values={{ number: fireworkDescriptions[item.id.front].explosions.length, color: fireworkDescriptions[item.id.front].color }}/>
      </p>
      {locationType === LocationType.FireworksStorePile && (
        <p>
          <Trans defaults="help.firework.store"/>
        </p>
      )}
      {locationType === LocationType.Panorama && (
        <p>
          <Trans defaults={itsMe? "help.firework.panorama.mine": "help.firework.panorama.player"} values={{ player: name }}/>
        </p>
      )}
      {!item.location?.rotation && (
        <p>
          <Trans defaults={!item.location?.rotation ? "help.firework.non-exploded" : "help.firework.exploded"}/>
        </p>
      )}
      <p>
        <Trans defaults="help.firework.arrow">
          {/*TODO: Add arrow image*/}
        </Trans>
      </p>
      <p>
        <Trans defaults="help.firework.extinguish">
          {/*TODO: Add extinguish image*/}
        </Trans>
      </p>
      { isBaseFirework(item.id.front) && (
        <p>
          <Trans defaults="help.firework.starting" values={{ number: item.location?.player}} />
        </p>
      )}
      { rotateToHere && (
        <div>
          <Trans defaults="help.store.rotation.here">
            <PlayMoveButton move={rotateToHere} onPlay={closeDialog} />
          </Trans>
        </div>
      )}
      { validateRotation && (
        <div>
          <Trans defaults="help.store.rotation.validate">
            <PlayMoveButton move={validateRotation} onPlay={closeDialog} />
          </Trans>
        </div>
      )}
      { grandeFinale && (
        <div>
          <Trans defaults="help.firework.grande-finale">
            <PlayMoveButton move={grandeFinale} onPlay={closeDialog} />
          </Trans>
        </div>
      )}
      {!!pileCount && (
        <p>
          <Trans defaults="help.firework.pile.count" values={{ number: pileCount }}/>
        </p>
      )}
      <div css={css`margin-bottom: 0.1em`}>
        <MaterialComponent type={MaterialType.Firework} itemId={item.id} css={!item.location?.rotation && css`transform: rotateY(180deg)`}/>
      </div>
    </>
  )

}