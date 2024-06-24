/** @jsxImportSource @emotion/react */
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { ComponentType } from 'react'
import { GrandeFinaleHeader } from './GrandeFinaleHeader'
import { PlaceBaseFireworkHeader } from './PlaceBaseFireworkHeader'
import { PlaceFireworkHeader } from './PlaceFireworkHeader'
import { RotateStoreHeader } from './RotateStoreHeader'

export const Headers: Partial<Record<RuleId, ComponentType>> = {
  [RuleId.PlaceBaseFirework]: PlaceBaseFireworkHeader,
  [RuleId.RotateStore]: RotateStoreHeader,
  [RuleId.PlaceFirework]: PlaceFireworkHeader,
  [RuleId.GrandeFinale]: GrandeFinaleHeader
}
