import { isEnumValue } from '@gamepark/rules-api'

export enum Firework {
  BaseFirework1_1 = 1,
  BaseFirework1_2,
  BaseFirework1_3,
  BaseFirework1_4,
  BaseFirework2_1 = 11,
  BaseFirework2_2,
  BaseFirework2_3,
  BaseFirework2_4,
  BaseFirework3_1 = 21,
  BaseFirework3_2,
  BaseFirework3_3,
  BaseFirework3_4,
  BaseFirework4_1 = 31,
  BaseFirework4_2,
  BaseFirework4_3,
  BaseFirework4_4,
  Firework1 = 51,
  Firework2,
  Firework3,
  Firework4,
  Firework5,
  Firework6,
  Firework7,
  Firework8,
  Firework9,
  Firework10,
  Firework11,
  Firework12,
  Firework13,
  Firework14,
  Firework15,
  Firework16,
  Firework17,
  Firework18,
  Firework19,
  Firework20,
  Firework21,
  Firework22,
  Firework23,
  Firework24,
  Firework25,
  Firework26,
  Firework27,
  Firework28,
  Firework29,
  Firework30,
  Firework31,
  Firework32,
  Firework33,
  Firework34,
  Firework35,
  Firework36,
  Firework37,
  Firework38,
  Firework39,
  Firework40,
  Firework41,
  Firework42,
  Firework43,
  Firework44,
  Firework45,
  Firework46,
  Firework47,
  Firework48
}

export const fireworks = Object.values(Firework).filter(isEnumValue)
export const baseFireworks = fireworks.filter((f) => f < Firework.Firework1)
export const storeFireworks = fireworks.filter((f) => f >= Firework.Firework1)