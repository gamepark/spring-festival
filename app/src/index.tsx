/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { GameProvider, setupTranslation } from '@gamepark/react-game'
import { SpringFestivalOptionsSpec } from '@gamepark/spring-festival/SpringFestivalOptions'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { SpringFestivalSetup } from '@gamepark/spring-festival/SpringFestivalSetup'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { springFestivalAnimations } from './animations/SpringFestivalAnimations'
import App from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import translations from './translations.json'
import BackgroundCover from './images/background.jpg'

setupTranslation(translations, { debug: false })

const playMatCss = css`
  #root {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BackgroundCover}) center/cover
  }
`

ReactDOM.render(
  <StrictMode>
    <GameProvider
      game="spring-festival"
      Rules={SpringFestivalRules}
      optionsSpec={SpringFestivalOptionsSpec}
      GameSetup={SpringFestivalSetup}
      material={Material}
      locators={Locators}
      animations={springFestivalAnimations}>
      <App/>
      <Global styles={playMatCss}/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)
