import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { PlayerSymbol } from '@gamepark/spring-festival/PlayerSymbol'
import { AvailableSpaceHelper } from '@gamepark/spring-festival/rules/helper/AvailableSpaceHelper'
import { fireworkDescription } from '../../material/FireworkDescription'
import { getComputedIndex, getFourPlayerCoordinates, getThreePlayerCoordinates, getTwoPlayerCoordinates } from '../../utils/PlayerPosition'

export class PanoramaDescription extends LocationDescription {
  height = fireworkDescription.height
  width = fireworkDescription.width

  getCoordinates(location: Location, context: LocationContext) {
    const player = location.player!
    const index = getComputedIndex(context, player)
    const coordinates = this.getPanoramaPosition(index, context.rules.players)
    coordinates.x += location.x! * (fireworkDescription.width + 0.2)
    coordinates.y += location.y! * (fireworkDescription.height + 0.2)
    return coordinates
  }

  getLocations(context: MaterialContext): Location[] {
    if (!context.player) return []
    return new AvailableSpaceHelper(context.rules.game, context.player).availableSpaces
  }


  getPanoramaPosition(index: number, players: PlayerSymbol[]) {
    const count = players.length
    switch (count) {
      case 2:
        return getTwoPlayerCoordinates(index, { y: 15 })
      case 3:
        return getThreePlayerCoordinates(index, { y: 15 })
      default:
        return getFourPlayerCoordinates(index, { y: 15 })
    }
  }
}