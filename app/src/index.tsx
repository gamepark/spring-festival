/** @jsxImportSource @emotion/react */
import { SpringFestivalOptionsSpec } from '@gamepark/spring-festival/SpringFestivalOptions'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { SpringFestivalSetup } from '@gamepark/spring-festival/SpringFestivalSetup'
import { GameProvider, MaterialGameAnimations, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="spring-festival" Rules={SpringFestivalRules} optionsSpec={SpringFestivalOptionsSpec} GameSetup={SpringFestivalSetup}
                  material={Material} locators={Locators} animations={new MaterialGameAnimations()}>
      <App/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)
