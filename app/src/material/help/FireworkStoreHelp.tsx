import { MaterialHelpProps } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const FireworkStoreHelp: FC<MaterialHelpProps> = () => {
  return (
    <>
      <h2>
        <Trans i18nKey="help.store"/>
      </h2>
      <p>
        <Trans i18nKey="help.store.active"/>
      </p>
    </>
  )
}