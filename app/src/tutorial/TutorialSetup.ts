import { Composition } from '@gamepark/spring-festival/material/Composition'
import { Firework } from '@gamepark/spring-festival/material/Firework'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { SpringFestivalSetup } from '@gamepark/spring-festival/SpringFestivalSetup'

export class TutorialSetup extends SpringFestivalSetup {

  setupStore() {
    super.setupStore()

    this.moveTileTo(Firework.Firework14, 3, 11)
    this.moveTileTo(Firework.Firework25, 3, 10)
  }

  moveTileTo(firework: Firework, locationId: number, x: number) {

    const tileOnTarget = this
      .material(MaterialType.Firework)
      .location((l) => l.type === LocationType.FireworksStorePile && l.id === locationId && l.x === x)

    const tileOnTargetItem = tileOnTarget.getItem()!

    if (tileOnTargetItem.id.front === firework) return
    const fireworkToMove = this
      .material(MaterialType.Firework)
      .id(({ front }: any) => front === firework)

    const fireworkToMoveItem = fireworkToMove.getItem()!
    const oldLocation = fireworkToMoveItem.location

    tileOnTarget.moveItem(oldLocation)


    fireworkToMove
      .moveItem({
        type: LocationType.FireworksStorePile,
        id: locationId,
        parent: 0,
        x: x
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