/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ScoringDescription } from '@gamepark/react-client'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { ScoringHelper } from '@gamepark/spring-festival/rules/helper/ScoringHelper'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { Trans } from 'react-i18next'

enum ScoringKeys {
  GrandeFinale = 1,
  Applause,
  ApplauseMajority,
  Composition,
  ChineseSign,
  Total
}


export class SpringFestivalScoringDescription implements ScoringDescription<PlayerSymbol, SpringFestivalRules, ScoringKeys> {
  getScoringKeys(rules: SpringFestivalRules) {
    const keys = [
      ScoringKeys.GrandeFinale,
      ScoringKeys.Applause,
      ScoringKeys.ApplauseMajority,
      ScoringKeys.Composition,
    ]

    const chineseSign = rules.material(MaterialType.Sign).length > 0
    if (chineseSign) {
      keys.push(ScoringKeys.ChineseSign)
    }

    keys.push(ScoringKeys.Total)

    return keys
  }

  getScoringHeader(key: ScoringKeys) {
    switch (key) {
      case ScoringKeys.GrandeFinale:
        return <Trans defaults="scoring.grande-finale"/>
      case ScoringKeys.Applause:
        return <Trans defaults="scoring.applause"/>
      case ScoringKeys.ApplauseMajority:
        return <Trans defaults="scoring.applause.majority"/>
      case ScoringKeys.Composition:
        return <Trans defaults="scoring.compositions"/>
      case ScoringKeys.ChineseSign:
        return <Trans defaults="scoring.chinese-sign"/>
      case ScoringKeys.Total:
        return <div css={bold}><Trans defaults="scoring.total"/></div>
    }
  }

  getScoringPlayerData(key: ScoringKeys, player: PlayerSymbol, rules: SpringFestivalRules) {
    const helper = new ScoringHelper(rules.game, player)
    switch (key) {
      case ScoringKeys.GrandeFinale:
        return helper.grandeFinaleScore
      case ScoringKeys.Applause:
        return helper.applauseCountScore
      case ScoringKeys.ApplauseMajority:
        return helper.applauseMajorityScore
      case ScoringKeys.Composition:
        return helper.compositionScore
      case ScoringKeys.ChineseSign:
        return helper.chineseSignScore
      case ScoringKeys.Total:
        return helper.score
    }
  }
}

const bold = css`
  font-weight: bold;
`