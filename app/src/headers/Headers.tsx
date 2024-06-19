/** @jsxImportSource @emotion/react */
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { ComponentType } from 'react'
import { PlaceFireworkRule } from './PlaceFireworkRule'
import { RotateStoreHeader } from './RotateStoreHeader'

export const Headers: Partial<Record<RuleId, ComponentType>> = {
  [RuleId.RotateStore]: RotateStoreHeader,
  [RuleId.PlaceFirework]: PlaceFireworkRule
}
