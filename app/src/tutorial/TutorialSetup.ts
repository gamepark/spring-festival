import { Composition } from '@gamepark/spring-festival/material/Composition'
import { Firework } from '@gamepark/spring-festival/material/Firework'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SpringFestivalSetup } from '@gamepark/spring-festival/SpringFestivalSetup'

export class TutorialSetup extends SpringFestivalSetup {

  setupStore() {
    super.setupStore()
    const tileOnPile3 = this
      .material(MaterialType.Firework)
      .location(LocationType.FireworksStorePile)
      .locationId(3)
      .maxBy((item) => item.location.x!)

    const tileOnPile3Item = tileOnPile3.getItem()!
    if (tileOnPile3Item.id.front === Firework.Firework14) return
    const firework14 = this
      .material(MaterialType.Firework)
      .id(({ front }: any) => front === Firework.Firework14)

    const firework14Item = firework14.getItem()!
    const oldLocation = firework14Item.location

    tileOnPile3.moveItem(oldLocation)

    this
      .material(MaterialType.Firework)
      .id(({ front }: any) => front === Firework.Firework14)
      .moveItem({
        type: LocationType.FireworksStorePile,
        id: 3,
        parent: 0
      })
  }

  setupComposition() {
    super.setupComposition()
    this.patternComposition
      .id((id: { front: Composition }) => id.front === Composition.PatternComposition28)
      .moveItem({
        type: LocationType.PatternComposition
      })
    this.patternComposition
      .id((id: { front: Composition }) => id.front === Composition.PatternComposition4)
      .moveItem({
        type: LocationType.PatternComposition
      })

    this.colorCompositions
      .id((id: { front: Composition }) => id.front === Composition.ColorComposition10)
      .moveItem({
        type: LocationType.ColorComposition
      })
    this.colorCompositions
      .id((id: { front: Composition }) => id.front === Composition.ColorComposition19)
      .moveItem({
        type: LocationType.ColorComposition
      })
  }
}