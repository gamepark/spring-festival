import { isEnumValue } from '@gamepark/rules-api'

export enum PlayerSymbol {
  One = 1, Two, Three, Four
}

export const playerSymbols = Object.values(PlayerSymbol).filter(isEnumValue)
