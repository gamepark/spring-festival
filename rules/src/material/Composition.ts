import { isEnumValue } from '@gamepark/rules-api'

export enum Composition {
  ColorComposition1 = 1,
  ColorComposition2,
  ColorComposition3,
  ColorComposition4,
  ColorComposition5,
  ColorComposition6,
  ColorComposition7,
  ColorComposition8,
  ColorComposition9,
  ColorComposition10,
  ColorComposition11,
  ColorComposition12,
  ColorComposition13,
  ColorComposition14,
  ColorComposition15,
  ColorComposition16,
  ColorComposition17,
  ColorComposition18,
  ColorComposition19,
  ColorComposition20,
  ColorComposition21,
  ColorComposition22,
  ColorComposition23,
  ColorComposition24,
  ColorComposition25,
  ColorComposition26,
  ColorComposition27,
  ColorComposition28,
  ColorComposition29,
  ColorComposition30,
  ColorComposition31,
  ColorComposition32,
  ColorComposition33,
  ColorComposition34,
  ColorComposition35,
  ColorComposition36,
  PatternComposition1 = 101,
  PatternComposition2,
  PatternComposition3,
  PatternComposition4,
  PatternComposition5,
  PatternComposition6,
  PatternComposition7,
  PatternComposition8,
  PatternComposition9,
  PatternComposition10,
  PatternComposition11,
  PatternComposition12,
  PatternComposition13,
  PatternComposition14,
  PatternComposition15,
  PatternComposition16,
  PatternComposition17,
  PatternComposition18,
  PatternComposition19,
  PatternComposition20,
  PatternComposition21,
  PatternComposition22,
  PatternComposition23,
  PatternComposition24,
  PatternComposition25,
  PatternComposition26,
  PatternComposition27,
  PatternComposition28,
  PatternComposition29,
  PatternComposition30,
  PatternComposition31,
  PatternComposition32,
  PatternComposition33,
  PatternComposition34,
  PatternComposition35,
}

export const compositions = Object.values(Composition).filter(isEnumValue)
export const patternCompositions = compositions.filter((p) => p > Composition.ColorComposition36)
export const colorCompositions = compositions.filter((p) => p < Composition.PatternComposition1)