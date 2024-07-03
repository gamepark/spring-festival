/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialComponent, MaterialHelpProps, PlayMoveButton, shadowCss, useLegalMove, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isCustomMoveType, isMoveItemType } from '@gamepark/rules-api'
import { isBaseFirework } from '@gamepark/spring-festival/material/Firework'
import { fireworkDescriptions } from '@gamepark/spring-festival/material/FireworkDescription'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import { SearchPileHelper } from '@gamepark/spring-festival/rules/helper/SearchPileHelper'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import isEqual from 'lodash/isEqual'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import ArrowIcons from '../../images/icons/arrow.jpg'
import ExtinguishIcons from '../../images/icons/extinguish.jpg'

export const FireworkHelp: FC<MaterialHelpProps> = (props) => {
  const { item, itemIndex, closeDialog } = props
  const rules = useRules<SpringFestivalRules>()!
  const locationType = item.location?.type
  const playerId = usePlayerId()
  const itsMe = playerId && playerId === item.location?.player
  const itsMyTurn = playerId && rules.isTurnToPlay(playerId)
  const name = usePlayerName(item.location?.player)
  const storeLocation = rules.material(MaterialType.FireworksStore).getItem()!.location
  const maxItemX = rules.material(MaterialType.Firework).location(LocationType.FireworksStorePile).locationId(item.location?.id).maxBy((item) => item.location.x!)?.getItem()?.location.x!
  const distanceFromZero = new SearchPileHelper(rules.game, playerId).distanceFromPositionZero
  const myPile = new SearchPileHelper(rules.game, playerId).pile
  const isRotateRule = rules.game.rule?.id === RuleId.RotateStore
  const canRotateStore = itsMyTurn && isRotateRule && maxItemX === item.location?.x
  const rotateToHere = useLegalMove((move) => isMoveItemType(MaterialType.FireworksStore)(move) && (((move.location.rotation - 1 + 4 + distanceFromZero) % 4) + 1) === item.location?.id)
  const validation = (isRotateRule && isEqual(myPile, item.location?.id))? rules.material(MaterialType.FireworksStore).moveItem(storeLocation): undefined
  const validate = useLegalMove((move) => isEqual(move, validation))
  const grandeFinale = useLegalMove((move) => isCustomMoveType(CustomMoveType.GrandeFinale)(move) && move.data === itemIndex)
  const pileCount = locationType === LocationType.FireworksStorePile && item.location?.id !== undefined ? rules.material(MaterialType.Firework).location(LocationType.FireworksStorePile).locationId(item.location.id).length: undefined
  console.log(itemIndex)
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
      <p css={textWithIconCss}>
        <Trans defaults="help.firework.arrow">
          <span css={iconCss(ArrowIcons)} />
        </Trans>
      </p>
      <p css={textWithIconCss}>
        <Trans defaults="help.firework.extinguish">
          <span css={iconCss(ExtinguishIcons)}/>
        </Trans>
      </p>
      {isBaseFirework(item.id.front) && (
        <p>
          <Trans defaults="help.firework.starting" values={{ number: item.location?.player}} />
        </p>
      )}
      { canRotateStore && !validation && rotateToHere && (
        <div>
          <Trans defaults="help.store.rotation.here">
            <PlayMoveButton move={rotateToHere} onPlay={closeDialog} local />
          </Trans>
        </div>
      )}
      { canRotateStore && validate && (
        <div>
          <Trans defaults="help.store.rotation.validate">
            <PlayMoveButton move={validate} onPlay={closeDialog} />
          </Trans>
        </div>
      )}
      { itsMyTurn && grandeFinale && (
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



const textWithIconCss = css`
  > span {
    margin-left: 0;
    margin-bottom: -0.35em;
  }
`

const iconCss = (icon: string) => css`
  display: inline-block;
  background: url(${icon}) no-repeat;
  background-size: cover;
  border-radius: 5em;
  height: 1.4em;
  width: 1.4em;
  margin-left: 0.3em;
  ${shadowCss(icon)}
`
