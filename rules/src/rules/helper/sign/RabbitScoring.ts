import { SignScoring } from './SignScoring'

export class RabbitScoring extends SignScoring {

  get score() {
    return 0
  }
}