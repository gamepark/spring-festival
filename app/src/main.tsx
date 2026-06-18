import { GameProvider } from '@gamepark/react-game'
import { SpringFestivalOptionsSpec } from '@gamepark/spring-festival/SpringFestivalOptions'
import { SpringFestivalRules } from '@gamepark/spring-festival/SpringFestivalRules'
import { SpringFestivalSetup } from '@gamepark/spring-festival/SpringFestivalSetup'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { springFestivalAnimations } from './animations/SpringFestivalAnimations'
import { App } from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import { SpringFestivalScoringDescription } from './scoring/SpringFestivalScoringDescription'
import { Tutorial } from './tutorial/Tutorial'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider
      game="spring-festival"
      Rules={SpringFestivalRules}
      optionsSpec={SpringFestivalOptionsSpec}
      GameSetup={SpringFestivalSetup}
      material={Material}
      locators={Locators}
      animations={springFestivalAnimations}
      scoring={new SpringFestivalScoringDescription()}
      tutorial={new Tutorial()}
      theme={{
        root: {
          background: {
            overlay: 'rgba(255, 255, 255, 0.2)'
          }
        }
      }}
    >
      <App />
    </GameProvider>
  </StrictMode>
)
