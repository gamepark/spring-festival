import { OptionsSpec } from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import { PlayerSymbol, playerSymbols } from './PlayerSymbol'

/**
 * This is the options for each player in the game.
 */
type PlayerOptions = { id: PlayerSymbol }

/**
 * This is the type of object that the game receives when a new game is started.
 * The first generic parameter, "{}", can be changed to include game options like variants or expansions.
 */
export type SpringFestivalOptions = {
  players: PlayerOptions[]
}

/**
 * This object describes all the options a game can have, and will be used by GamePark website to create automatically forms for you game
 * (forms for friendly games, or forms for matchmaking preferences, for instance).
 */
export const SpringFestivalOptionsSpec: OptionsSpec<SpringFestivalOptions> = {
  players: {
    id: {
      label: (t: TFunction) => t('Player color'),
      values: playerSymbols,
      valueSpec: color => ({ label: t => getPlayerName(color, t) })
    }
  }
}

export function getPlayerName(playerId: PlayerSymbol, t: TFunction) {
  switch (playerId) {
    case PlayerSymbol.One:
      return t('One')
    case PlayerSymbol.Two:
      return t('Two')
    case PlayerSymbol.Three:
      return t('Three')
    case PlayerSymbol.Four:
      return t('Four')
  }
}