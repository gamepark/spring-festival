/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ScoringDescription } from '@gamepark/react-client'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ScoringHelper } from '@gamepark/spring-festival/rules/helper/ScoringHelper'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { ReactElement } from 'react'
import { Trans } from 'react-i18next'

export class SpringFestivalScoringDescription extends ScoringDescription<SpringFestivalRules, PlayerSymbol> {
  getScoringCells(rules: SpringFestivalRules): ReactElement[] {
    const chineseSign = rules.material(MaterialType.Sign).length > 0
    const cells = [
      <Trans defaults="scoring.grande-finale" />,
      <Trans defaults="scoring.applause" />,
      <Trans defaults="scoring.applause.majority" />,
      <Trans defaults="scoring.compositions" />,
    ]

    if (chineseSign) {
      cells.push(
        <Trans defaults="scoring.chinese-sign" />
      )
    }
      cells.push(<div css={bold}><Trans defaults="scoring.total" /></div>)


    return cells
  }

  getPlayerCells(player: PlayerSymbol, rules: SpringFestivalRules): ReactElement[] {
    const helper = new ScoringHelper(rules.game, player)
    const chineseSign = rules.material(MaterialType.Sign).length > 0
    const cells = [
      <>{helper.grandeFinaleScore}</>,
      <>{helper.applauseCountScore}</>,
      <>{helper.applauseMajorityScore}</>,
      <>{helper.compositionScore}</>,
    ]

    if (chineseSign) {
      cells.push(<>{helper.chineseSignScore}</>)
    }

    cells.push(<div css={bold}>{helper.score}</div>)
    return cells
  }
}

const bold = css`
  font-weight: bold;
`