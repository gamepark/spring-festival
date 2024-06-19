/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { CardDescription, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { Firework } from '@gamepark/spring-festival/material/Firework'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CompositionHelper } from '@gamepark/spring-festival/rules/helper/CompositionHelper'
import { Memory } from '@gamepark/spring-festival/rules/Memory'
import { RuleId } from '@gamepark/spring-festival/rules/RuleId'
import BaseFirework1_1Back from '../images/firework/explosion/BaseFirework1_1.jpg'
import BaseFirework1_2Back from '../images/firework/explosion/BaseFirework1_2.jpg'
import BaseFirework1_3Back from '../images/firework/explosion/BaseFirework1_3.jpg'
import BaseFirework1_4Back from '../images/firework/explosion/BaseFirework1_4.jpg'
import BaseFirework2_1Back from '../images/firework/explosion/BaseFirework2_1.jpg'
import BaseFirework2_2Back from '../images/firework/explosion/BaseFirework2_2.jpg'
import BaseFirework2_3Back from '../images/firework/explosion/BaseFirework2_3.jpg'
import BaseFirework2_4Back from '../images/firework/explosion/BaseFirework2_4.jpg'
import BaseFirework3_1Back from '../images/firework/explosion/BaseFirework3_1.jpg'
import BaseFirework3_2Back from '../images/firework/explosion/BaseFirework3_2.jpg'
import BaseFirework3_3Back from '../images/firework/explosion/BaseFirework3_3.jpg'
import BaseFirework3_4Back from '../images/firework/explosion/BaseFirework3_4.jpg'
import BaseFirework4_1Back from '../images/firework/explosion/BaseFirework4_1.jpg'
import BaseFirework4_2Back from '../images/firework/explosion/BaseFirework4_2.jpg'
import BaseFirework4_3Back from '../images/firework/explosion/BaseFirework4_3.jpg'
import BaseFirework4_4Back from '../images/firework/explosion/BaseFirework4_4.jpg'
import Firework1Back from '../images/firework/explosion/Firework1.jpg'
import Firework10Back from '../images/firework/explosion/Firework10.jpg'
import Firework11Back from '../images/firework/explosion/Firework11.jpg'
import Firework12Back from '../images/firework/explosion/Firework12.jpg'
import Firework13Back from '../images/firework/explosion/Firework13.jpg'
import Firework14Back from '../images/firework/explosion/Firework14.jpg'
import Firework15Back from '../images/firework/explosion/Firework15.jpg'
import Firework16Back from '../images/firework/explosion/Firework16.jpg'
import Firework17Back from '../images/firework/explosion/Firework17.jpg'
import Firework18Back from '../images/firework/explosion/Firework18.jpg'
import Firework19Back from '../images/firework/explosion/Firework19.jpg'
import Firework2Back from '../images/firework/explosion/Firework2.jpg'
import Firework20Back from '../images/firework/explosion/Firework20.jpg'
import Firework21Back from '../images/firework/explosion/Firework21.jpg'
import Firework22Back from '../images/firework/explosion/Firework22.jpg'
import Firework23Back from '../images/firework/explosion/Firework23.jpg'
import Firework24Back from '../images/firework/explosion/Firework24.jpg'
import Firework25Back from '../images/firework/explosion/Firework25.jpg'
import Firework26Back from '../images/firework/explosion/Firework26.jpg'
import Firework27Back from '../images/firework/explosion/Firework27.jpg'
import Firework28Back from '../images/firework/explosion/Firework28.jpg'
import Firework29Back from '../images/firework/explosion/Firework29.jpg'
import Firework3Back from '../images/firework/explosion/Firework3.jpg'
import Firework30Back from '../images/firework/explosion/Firework30.jpg'
import Firework31Back from '../images/firework/explosion/Firework31.jpg'
import Firework32Back from '../images/firework/explosion/Firework32.jpg'
import Firework33Back from '../images/firework/explosion/Firework33.jpg'
import Firework34Back from '../images/firework/explosion/Firework34.jpg'
import Firework35Back from '../images/firework/explosion/Firework35.jpg'
import Firework36Back from '../images/firework/explosion/Firework36.jpg'
import Firework37Back from '../images/firework/explosion/Firework37.jpg'
import Firework38Back from '../images/firework/explosion/Firework38.jpg'
import Firework39Back from '../images/firework/explosion/Firework39.jpg'
import Firework4Back from '../images/firework/explosion/Firework4.jpg'
import Firework40Back from '../images/firework/explosion/Firework40.jpg'
import Firework41Back from '../images/firework/explosion/Firework41.jpg'
import Firework42Back from '../images/firework/explosion/Firework42.jpg'
import Firework43Back from '../images/firework/explosion/Firework43.jpg'
import Firework44Back from '../images/firework/explosion/Firework44.jpg'
import Firework45Back from '../images/firework/explosion/Firework45.jpg'
import Firework46Back from '../images/firework/explosion/Firework46.jpg'
import Firework47Back from '../images/firework/explosion/Firework47.jpg'
import Firework48Back from '../images/firework/explosion/Firework48.jpg'
import Firework5Back from '../images/firework/explosion/Firework5.jpg'
import Firework6Back from '../images/firework/explosion/Firework6.jpg'
import Firework7Back from '../images/firework/explosion/Firework7.jpg'
import Firework8Back from '../images/firework/explosion/Firework8.jpg'
import Firework9Back from '../images/firework/explosion/Firework9.jpg'
import BaseFirework1_1Front from '../images/firework/rocket/BaseFirework1_1.jpg'
import BaseFirework1_2Front from '../images/firework/rocket/BaseFirework1_2.jpg'
import BaseFirework1_3Front from '../images/firework/rocket/BaseFirework1_3.jpg'
import BaseFirework1_4Front from '../images/firework/rocket/BaseFirework1_4.jpg'
import BaseFirework2_1Front from '../images/firework/rocket/BaseFirework2_1.jpg'
import BaseFirework2_2Front from '../images/firework/rocket/BaseFirework2_2.jpg'
import BaseFirework2_3Front from '../images/firework/rocket/BaseFirework2_3.jpg'
import BaseFirework2_4Front from '../images/firework/rocket/BaseFirework2_4.jpg'
import BaseFirework3_1Front from '../images/firework/rocket/BaseFirework3_1.jpg'
import BaseFirework3_2Front from '../images/firework/rocket/BaseFirework3_2.jpg'
import BaseFirework3_3Front from '../images/firework/rocket/BaseFirework3_3.jpg'
import BaseFirework3_4Front from '../images/firework/rocket/BaseFirework3_4.jpg'
import BaseFirework4_1Front from '../images/firework/rocket/BaseFirework4_1.jpg'
import BaseFirework4_2Front from '../images/firework/rocket/BaseFirework4_2.jpg'
import BaseFirework4_3Front from '../images/firework/rocket/BaseFirework4_3.jpg'
import BaseFirework4_4Front from '../images/firework/rocket/BaseFirework4_4.jpg'
import Firework1Front from '../images/firework/rocket/Firework1.jpg'
import Firework10Front from '../images/firework/rocket/Firework10.jpg'
import Firework11Front from '../images/firework/rocket/Firework11.jpg'
import Firework12Front from '../images/firework/rocket/Firework12.jpg'
import Firework13Front from '../images/firework/rocket/Firework13.jpg'
import Firework14Front from '../images/firework/rocket/Firework14.jpg'
import Firework15Front from '../images/firework/rocket/Firework15.jpg'
import Firework16Front from '../images/firework/rocket/Firework16.jpg'
import Firework17Front from '../images/firework/rocket/Firework17.jpg'
import Firework18Front from '../images/firework/rocket/Firework18.jpg'
import Firework19Front from '../images/firework/rocket/Firework19.jpg'
import Firework2Front from '../images/firework/rocket/Firework2.jpg'
import Firework20Front from '../images/firework/rocket/Firework20.jpg'
import Firework21Front from '../images/firework/rocket/Firework21.jpg'
import Firework22Front from '../images/firework/rocket/Firework22.jpg'
import Firework23Front from '../images/firework/rocket/Firework23.jpg'
import Firework24Front from '../images/firework/rocket/Firework24.jpg'
import Firework25Front from '../images/firework/rocket/Firework25.jpg'
import Firework26Front from '../images/firework/rocket/Firework26.jpg'
import Firework27Front from '../images/firework/rocket/Firework27.jpg'
import Firework28Front from '../images/firework/rocket/Firework28.jpg'
import Firework29Front from '../images/firework/rocket/Firework29.jpg'
import Firework3Front from '../images/firework/rocket/Firework3.jpg'
import Firework30Front from '../images/firework/rocket/Firework30.jpg'
import Firework31Front from '../images/firework/rocket/Firework31.jpg'
import Firework32Front from '../images/firework/rocket/Firework32.jpg'
import Firework33Front from '../images/firework/rocket/Firework33.jpg'
import Firework34Front from '../images/firework/rocket/Firework34.jpg'
import Firework35Front from '../images/firework/rocket/Firework35.jpg'
import Firework36Front from '../images/firework/rocket/Firework36.jpg'
import Firework37Front from '../images/firework/rocket/Firework37.jpg'
import Firework38Front from '../images/firework/rocket/Firework38.jpg'
import Firework39Front from '../images/firework/rocket/Firework39.jpg'
import Firework4Front from '../images/firework/rocket/Firework4.jpg'
import Firework40Front from '../images/firework/rocket/Firework40.jpg'
import Firework41Front from '../images/firework/rocket/Firework41.jpg'
import Firework42Front from '../images/firework/rocket/Firework42.jpg'
import Firework43Front from '../images/firework/rocket/Firework43.jpg'
import Firework44Front from '../images/firework/rocket/Firework44.jpg'
import Firework45Front from '../images/firework/rocket/Firework45.jpg'
import Firework46Front from '../images/firework/rocket/Firework46.jpg'
import Firework47Front from '../images/firework/rocket/Firework47.jpg'
import Firework48Front from '../images/firework/rocket/Firework48.jpg'
import Firework5Front from '../images/firework/rocket/Firework5.jpg'
import Firework6Front from '../images/firework/rocket/Firework6.jpg'
import Firework7Front from '../images/firework/rocket/Firework7.jpg'
import Firework8Front from '../images/firework/rocket/Firework8.jpg'
import Firework9Front from '../images/firework/rocket/Firework9.jpg'
import equal from 'fast-deep-equal'


class FireworkDescription extends CardDescription {
  height = 5
  width = 5

  images = {
    [Firework.BaseFirework1_1]: BaseFirework1_1Front,
    [Firework.BaseFirework1_2]: BaseFirework1_2Front,
    [Firework.BaseFirework1_3]: BaseFirework1_3Front,
    [Firework.BaseFirework1_4]: BaseFirework1_4Front,
    [Firework.BaseFirework2_1]: BaseFirework2_1Front,
    [Firework.BaseFirework2_2]: BaseFirework2_2Front,
    [Firework.BaseFirework2_3]: BaseFirework2_3Front,
    [Firework.BaseFirework2_4]: BaseFirework2_4Front,
    [Firework.BaseFirework3_1]: BaseFirework3_1Front,
    [Firework.BaseFirework3_2]: BaseFirework3_2Front,
    [Firework.BaseFirework3_3]: BaseFirework3_3Front,
    [Firework.BaseFirework3_4]: BaseFirework3_4Front,
    [Firework.BaseFirework4_1]: BaseFirework4_1Front,
    [Firework.BaseFirework4_2]: BaseFirework4_2Front,
    [Firework.BaseFirework4_3]: BaseFirework4_3Front,
    [Firework.BaseFirework4_4]: BaseFirework4_4Front,
    [Firework.Firework1]: Firework1Front,
    [Firework.Firework2]: Firework2Front,
    [Firework.Firework3]: Firework3Front,
    [Firework.Firework4]: Firework4Front,
    [Firework.Firework5]: Firework5Front,
    [Firework.Firework6]: Firework6Front,
    [Firework.Firework7]: Firework7Front,
    [Firework.Firework8]: Firework8Front,
    [Firework.Firework9]: Firework9Front,
    [Firework.Firework10]: Firework10Front,
    [Firework.Firework11]: Firework11Front,
    [Firework.Firework12]: Firework12Front,
    [Firework.Firework13]: Firework13Front,
    [Firework.Firework14]: Firework14Front,
    [Firework.Firework15]: Firework15Front,
    [Firework.Firework16]: Firework16Front,
    [Firework.Firework17]: Firework17Front,
    [Firework.Firework18]: Firework18Front,
    [Firework.Firework19]: Firework19Front,
    [Firework.Firework20]: Firework20Front,
    [Firework.Firework21]: Firework21Front,
    [Firework.Firework22]: Firework22Front,
    [Firework.Firework23]: Firework23Front,
    [Firework.Firework24]: Firework24Front,
    [Firework.Firework25]: Firework25Front,
    [Firework.Firework26]: Firework26Front,
    [Firework.Firework27]: Firework27Front,
    [Firework.Firework28]: Firework28Front,
    [Firework.Firework29]: Firework29Front,
    [Firework.Firework30]: Firework30Front,
    [Firework.Firework31]: Firework31Front,
    [Firework.Firework32]: Firework32Front,
    [Firework.Firework33]: Firework33Front,
    [Firework.Firework34]: Firework34Front,
    [Firework.Firework35]: Firework35Front,
    [Firework.Firework36]: Firework36Front,
    [Firework.Firework37]: Firework37Front,
    [Firework.Firework38]: Firework38Front,
    [Firework.Firework39]: Firework39Front,
    [Firework.Firework40]: Firework40Front,
    [Firework.Firework41]: Firework41Front,
    [Firework.Firework42]: Firework42Front,
    [Firework.Firework43]: Firework43Front,
    [Firework.Firework44]: Firework44Front,
    [Firework.Firework45]: Firework45Front,
    [Firework.Firework46]: Firework46Front,
    [Firework.Firework47]: Firework47Front,
    [Firework.Firework48]: Firework48Front
  }

  backImages = {
    [Firework.BaseFirework1_1]: BaseFirework1_1Back,
    [Firework.BaseFirework1_2]: BaseFirework1_2Back,
    [Firework.BaseFirework1_3]: BaseFirework1_3Back,
    [Firework.BaseFirework1_4]: BaseFirework1_4Back,
    [Firework.BaseFirework2_1]: BaseFirework2_1Back,
    [Firework.BaseFirework2_2]: BaseFirework2_2Back,
    [Firework.BaseFirework2_3]: BaseFirework2_3Back,
    [Firework.BaseFirework2_4]: BaseFirework2_4Back,
    [Firework.BaseFirework3_1]: BaseFirework3_1Back,
    [Firework.BaseFirework3_2]: BaseFirework3_2Back,
    [Firework.BaseFirework3_3]: BaseFirework3_3Back,
    [Firework.BaseFirework3_4]: BaseFirework3_4Back,
    [Firework.BaseFirework4_1]: BaseFirework4_1Back,
    [Firework.BaseFirework4_2]: BaseFirework4_2Back,
    [Firework.BaseFirework4_3]: BaseFirework4_3Back,
    [Firework.BaseFirework4_4]: BaseFirework4_4Back,
    [Firework.Firework1]: Firework1Back,
    [Firework.Firework2]: Firework2Back,
    [Firework.Firework3]: Firework3Back,
    [Firework.Firework4]: Firework4Back,
    [Firework.Firework5]: Firework5Back,
    [Firework.Firework6]: Firework6Back,
    [Firework.Firework7]: Firework7Back,
    [Firework.Firework8]: Firework8Back,
    [Firework.Firework9]: Firework9Back,
    [Firework.Firework10]: Firework10Back,
    [Firework.Firework11]: Firework11Back,
    [Firework.Firework12]: Firework12Back,
    [Firework.Firework13]: Firework13Back,
    [Firework.Firework14]: Firework14Back,
    [Firework.Firework15]: Firework15Back,
    [Firework.Firework16]: Firework16Back,
    [Firework.Firework17]: Firework17Back,
    [Firework.Firework18]: Firework18Back,
    [Firework.Firework19]: Firework19Back,
    [Firework.Firework20]: Firework20Back,
    [Firework.Firework21]: Firework21Back,
    [Firework.Firework22]: Firework22Back,
    [Firework.Firework23]: Firework23Back,
    [Firework.Firework24]: Firework24Back,
    [Firework.Firework25]: Firework25Back,
    [Firework.Firework26]: Firework26Back,
    [Firework.Firework27]: Firework27Back,
    [Firework.Firework28]: Firework28Back,
    [Firework.Firework29]: Firework29Back,
    [Firework.Firework30]: Firework30Back,
    [Firework.Firework31]: Firework31Back,
    [Firework.Firework32]: Firework32Back,
    [Firework.Firework33]: Firework33Back,
    [Firework.Firework34]: Firework34Back,
    [Firework.Firework35]: Firework35Back,
    [Firework.Firework36]: Firework36Back,
    [Firework.Firework37]: Firework37Back,
    [Firework.Firework38]: Firework38Back,
    [Firework.Firework39]: Firework39Back,
    [Firework.Firework40]: Firework40Back,
    [Firework.Firework41]: Firework41Back,
    [Firework.Firework42]: Firework42Back,
    [Firework.Firework43]: Firework43Back,
    [Firework.Firework44]: Firework44Back,
    [Firework.Firework45]: Firework45Back,
    [Firework.Firework46]: Firework46Back,
    [Firework.Firework47]: Firework47Back,
    [Firework.Firework48]: Firework48Back
  }

  isFlipped(item: Partial<MaterialItem>): boolean {
    return item.location?.rotation
  }

  getItemExtraCss(item: MaterialItem, context: ItemContext) {
    if (item.location.type !== LocationType.Panorama) return
    if (!context.player || context.player !== item.location.player) return
    const isSelect = !!item.selected
    if (!isSelect) return
    const moves = new CompositionHelper(context.rules.game, item.location.player!).compositionMoves
    const selectedIndexes = [...context.rules.material(MaterialType.Firework).selected().getIndexes()].sort()
    if (moves.some((move) => equal(selectedIndexes,move.data.indexes))) {
      return css`
        &:after {
          content: '';
          height: 100%;
          width: 100%;
          position: absolute;
          border: 0.2em solid green;
          border-radius: 0.4em;
        }
      `
    }

    return css`
      &:after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        border: 0.2em solid red;
        border-radius: 0.4em;
      }
    `
  }

  getShortClickLocalMove(context: ItemContext) {
    if (!context.player) return
    if (context.rules.game.rule?.id !== RuleId.PlaceFirework) return
    const tile = context.rules.material(MaterialType.Firework).index(context.index)
    const item = tile.getItem()!
    if (context.player !== item.location.player) return
    if (!context.rules.remind(Memory.Placed, context.player)) return

    if (item.selected) {
      return tile.unselectItem()
    }

    return tile.selectItem()
  }

}

export const fireworkDescription = new FireworkDescription()
