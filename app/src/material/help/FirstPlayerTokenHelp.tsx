/** @jsxImportSource @emotion/react */
import { MaterialHelpProps } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const FirstPlayerTokenHelp: FC<MaterialHelpProps> = () => {
  return (
    <>
      <h2>
        <Trans defaults="help.active-token"/>
      </h2>
      <p>
        <Trans defaults="help.store.active"/>
      </p>
    </>
  )
}