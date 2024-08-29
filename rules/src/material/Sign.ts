import { getEnumValues } from '@gamepark/rules-api'

export enum Sign {
  Goat = 1,
  Rooster,
  Snake,
  Rat,
  Dragon,
  Bull,
  Rabbit,
  Dog,
  Tiger,
  Monkey,
  Pig,
  Horse,
}

export const signs = getEnumValues(Sign)