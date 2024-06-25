/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialComponent, MaterialHelpProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { isBaseFirework } from '@gamepark/spring-festival/material/Firework'
import { fireworkDescriptions } from '@gamepark/spring-festival/material/FireworkDescription'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const FireworkHelp: FC<MaterialHelpProps> = (props) => {
  const { item } = props
  const locationType = item.location?.type
  const playerId = usePlayerId()
  const itsMe = playerId && playerId === item.location?.player
  const name = usePlayerName(item.location?.player)

  return (
    <>
      {<h2><Trans defaults="help.firework"/></h2>}
      <p>
        <Trans defaults="help.firework.text"
               values={{ number: fireworkDescriptions[item.id.front].explosions.length, color: fireworkDescriptions[item.id.front].color }}/>
      </p>
      {locationType === LocationType.FireworksStorePile && (
        <p>
          <Trans defaults="help.firework.location.store"/>
        </p>
      )}
      {locationType === LocationType.Panorama && (
        <p>
          <Trans defaults={itsMe? "help.panorama.mine": "help.panorama.player"} values={{ player: name }}/>
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
          <Trans defaults="help.firework.starting" values={{ number: item.location?.player}}>
            {/*TODO: Add extinguish image*/}
          </Trans>
        </p>
      )}
      {
        <p>
          <MaterialComponent type={MaterialType.Firework} itemId={item.id} css={!item.location?.rotation && css`transform: rotateY(180deg)`} />
        </p>
      }
    </>
  )

}