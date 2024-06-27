/** @jsxImportSource @emotion/react */
import { MaterialHelpProps } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const SignHelp: FC<MaterialHelpProps> = (props) => {
  const { item } = props
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
    </>
  )
}