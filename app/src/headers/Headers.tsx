/** @jsxImportSource @emotion/react */
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import { ComponentType } from 'react'
import { RotateStoreHeader } from './RotateStoreHeader'

export const Headers: Partial<Record<RuleId, ComponentType>> = {
  [RuleId.RotateStore]: RotateStoreHeader
}
