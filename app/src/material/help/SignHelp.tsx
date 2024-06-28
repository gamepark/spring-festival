/** @jsxImportSource @emotion/react */
import { MaterialHelpProps, usePlayerId, useRules } from '@gamepark/react-game'
import { ScoringHelper } from '@gamepark/spring-festival/rules/helper/ScoringHelper'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const SignHelp: FC<MaterialHelpProps> = (props) => {
  const { item } = props
  const playerId = usePlayerId()
  const rules = useRules<SpringFestivalRules>()!
  const isEnd = !rules.game.rule
  const score = ((playerId && isEnd) || process.env.NODE_ENV === 'development')? new ScoringHelper(rules.game, playerId).chineseSignScore: undefined

  return (
    <>
      <h2>
        <Trans defaults="help.chinese-sign"/>
      </h2>
      <p>
        <Trans defaults="help.chinese-sign.vp"/>
      </p>
      <p>
        <Trans defaults={`help.chinese-sign.${item.id}`}>
          <strong />
        </Trans>
      </p>
      { score !== undefined && (
        <p>
          <Trans defaults="help.chinese-sign.score" values={{ score: score }} />
        </p>
      )}
    </>
  )
}