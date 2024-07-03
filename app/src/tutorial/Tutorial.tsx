/** @jsxImportSource @emotion/react */
import { MaterialTutorial, TutorialStep } from '@gamepark/react-game'
import { isCreateItemType, isCustomMoveType, isEndPlayerTurn, isMoveItemType } from '@gamepark/rules-api'
import { Composition, CompositionType } from '@gamepark/spring-festival/material/Composition'
import { Firework } from '@gamepark/spring-festival/material/Firework'
import { fireworkDescriptions } from '@gamepark/spring-festival/material/FireworkDescription'
import { LocationType } from '@gamepark/spring-festival/material/LocationType'
import { MaterialType } from '@gamepark/spring-festival/material/MaterialType'
import { CustomMoveType } from '@gamepark/spring-festival/rules/CustomMoveType'
import isEqual from 'lodash/isEqual'
import { Trans } from 'react-i18next'
import { TutorialSetup } from './TutorialSetup'

const me = 1
const opponent = 2

export class Tutorial extends MaterialTutorial {
  version = 1
  options = { players: 2 }
  setup = new TutorialSetup()

  players = [
    { id: me },
    { id: opponent }
  ]

  steps: TutorialStep[] = [
    {
      popup: { text: () => <Trans defaults="tuto.welcome"><strong/><em/></Trans> }
    },
    {
      popup: { text: () => <Trans defaults="tuto.goal"><strong/><em/></Trans> }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.starting"><strong/><em/></Trans>,
        position: { y: -15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).location(LocationType.PlayerHand).player(me)
        ]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.composition"><strong/><em/></Trans>,
        position: { x: -25, y: 5 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Composition).player(me)
        ],
        margin: {
          top: 1,
          left: 18,
          bottom: 1
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.starting.place"><strong/><em/></Trans>,
        position: { x: 0, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).player(me)
        ],
        locations: [
          this.location(LocationType.Panorama).player(me).x(0).y(0).location
        ],
        margin: {
          top: 1,
          bottom: 1
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place" values={{ color: fireworkDescriptions[Firework.BaseFirework1_4].color }}><strong/><em/></Trans>,
        position: { x: 0, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).id(({ front }: any) => front === Firework.BaseFirework1_4)
        ],
        locations: [
          this.location(LocationType.Panorama).player(me).x(0).y(0).location
        ],
        margin: {
          top: 1,
          bottom: 1
        }
      }),
      move: {
        filter: (move, game) => isMoveItemType(MaterialType.Firework)(move)
          && game.items[MaterialType.Firework]![move.itemIndex].id.front === Firework.BaseFirework1_4
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place" values={{ color: fireworkDescriptions[Firework.BaseFirework1_1].color }}><strong/><em/></Trans>,
        position: { x: 0, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).id(({ front }: any) => front === Firework.BaseFirework1_1)
        ],
        locations: [
          this.location(LocationType.Panorama).player(me).x(1).y(0).location
        ],
        margin: {
          top: 1,
          bottom: 1
        }
      }),
      move: {
        filter: (move, game) => isMoveItemType(MaterialType.Firework)(move)
          && move.location.x === 1 && move.location.y === 0
          && game.items[MaterialType.Firework]![move.itemIndex].id.front === Firework.BaseFirework1_1
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place" values={{ color: fireworkDescriptions[Firework.BaseFirework1_2].color }}><strong/><em/></Trans>,
        position: { x: 0, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).id(({ front }: any) => front === Firework.BaseFirework1_2)
        ],
        locations: [
          this.location(LocationType.Panorama).player(me).x(0).y(-1).location
        ],
        margin: {
          top: 1,
          bottom: 1
        }
      }),
      move: {
        filter: (move, game) => isMoveItemType(MaterialType.Firework)(move)
          && move.location.x === 0 && move.location.y === -1
          && game.items[MaterialType.Firework]![move.itemIndex].id.front === Firework.BaseFirework1_2
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place" values={{ color: fireworkDescriptions[Firework.BaseFirework1_3].color }}><strong/><em/></Trans>,
        position: { x: 0, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).id(({ front }: any) => front === Firework.BaseFirework1_3)
        ],
        locations: [
          this.location(LocationType.Panorama).player(me).x(1).y(-1).location
        ],
        margin: {
          top: 1,
          bottom: 1
        }
      }),
      move: {
        filter: (move, game) => isMoveItemType(MaterialType.Firework)(move)
          && move.location.x === 1 && move.location.y === -1
          && game.items[MaterialType.Firework]![move.itemIndex].id.front === Firework.BaseFirework1_3
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.validate"><strong/><em/></Trans>,
        position: { x: 0, y: -20 }
      },
      move: {}
    },
    {
      move: {
        player: opponent
      }
    },
    {
      move: {
        player: opponent
      }
    },
    {
      move: {
        player: opponent
      }
    },
    {
      move: {
        player: opponent
      }
    },
    {
      move: {
        player: opponent
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.start"><strong/><em/></Trans>,
        position: { x: 0, y: 0 }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.active"><strong/><em/></Trans>,
        position: { x: 0, y: -15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.FirstPlayerToken)
        ],
        margin: {
          top: 7
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.store"><strong/><em/></Trans>,
        position: { x: -35, y: 3 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.FireworksStore),
          this.material(game, MaterialType.Firework).location(LocationType.FireworksStorePile)
        ],
        margin: {
          left: 27,
          top: 1,
          bottom: 1
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.rotate"><strong/><em/></Trans>,
        position: { x: -35, y: 3 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.FireworksStore),
          this.material(game, MaterialType.Firework).id(({ front }: any) => front === Firework.Firework14)
        ],
        margin: {
          left: 27,
          top: 1,
          bottom: 1
        }
      }),
      move: {
        filter: (move) => {
          return isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation === 3
        }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.take.place"><strong/><em/></Trans>,
        position: { x: -15, y: 15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).id(({ front }: any) => front === Firework.Firework14)
        ],
        locations: [
          this.location(LocationType.Panorama).player(me).x(2).y(-1).location
        ],
        margin: {
          bottom: 5,
          left: 3
        }
      }),
      move: {
        filter: (move) => isMoveItemType(MaterialType.Firework)(move)
          && move.location.type === LocationType.Panorama
          && move.location.player === me
          && move.location.x === 2 && move.location.y === -1,
        interrupt: (move) => isMoveItemType(MaterialType.Firework)(move) && move.location.rotation && (move.location.x !== 2 || move.location.y !== -1)
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.explode"><strong/><em/></Trans>,
        position: { y: 25 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).player(me).location(LocationType.Panorama)
        ],
        margin: {
          bottom: 10
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.will-explode"><strong/><em/></Trans>,
        position: { y: 25 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).player(me).location((l) => l.type === LocationType.Panorama && l.x === 1 && l.y === 0)
        ],
        margin: {
          bottom: 5
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.chain"><strong/><em/></Trans>,
        position: { y: 25 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).player(me).location((l) => l.type === LocationType.Panorama
            && (
              (l.x === 0 && l.y === 0) ||
              (l.x === 0 && l.y === -1) ||
              (l.x === 1 && l.y === -1)
            ))
        ],
        margin: {
          bottom: 10,
          right: 5
        }
      }),
      move: {}
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.compo.phase"><strong/><em/></Trans>,
        position: { x: -20, y: 15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).player(me),
          this.material(game, MaterialType.Composition).player(me)
        ],
        margin: {
          top: 1,
          bottom: 2,
          left: 15
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.compo.validate"><strong/><em/></Trans>,
        position: { x: -20, y: 15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).player(me),
          this.material(game, MaterialType.Composition).locationId(CompositionType.Pattern).player(me)
        ],
        margin: {
          top: 1,
          bottom: 2,
          left: 15
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.compo.pattern"><strong/><em/></Trans>,
        position: { x: -20, y: 15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).player(me),
          this.material(game, MaterialType.Composition).id(({front}: any) => front === Composition.PatternComposition28).player(me)
        ],
        margin: {
          top: 1,
          bottom: 2,
          left: 15
        }
      }),
      move: {
        filter: (move) => isCustomMoveType(CustomMoveType.Composition)(move) && isEqual(move.data.indexes, [48, 49, 50, 51])
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.compo.explain"><strong/><em/></Trans>,
        position: { y: 30}
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).location(LocationType.Panorama).player(me)
        ],
        margin: {
          bottom: 10
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.compo.new"><strong/><em/></Trans>
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Composition).location(LocationType.PlayerDoneComposition).player(me),
          this.material(game, MaterialType.Composition).location((l) => l.type === LocationType.PlayerComposition && l.id === CompositionType.Pattern && l.x === 1).player(me),
        ]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.compo.validate"><strong/><em/></Trans>
      },
      move: {
        filter: (move) => isEndPlayerTurn(move)
      }
    },
    {
      move: {
        player: opponent,
      }
    },
    {
      move: {
        player: opponent,
        filter: (move) => isEndPlayerTurn(move)
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.newround"><strong/><em/></Trans>,
        position: { y: 25 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.FirstPlayerToken)
        ],
        margin: {
          bottom: 7
        }
      })
    },
    {
      move: {
        player: opponent,
        filter: (move) => isMoveItemType(MaterialType.FireworksStore)(move) && move.location.rotation === 3
      }
    },
    {
      move: {
        player: opponent,
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place.2"><strong/><em/></Trans>,
        position: { y: 30 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Firework).id(({front}: any) => front === Firework.Firework25),
        ],
        locations: [
          this.location(LocationType.Panorama).player(me).x(3).y(-1).location
        ],
        margin: {
          bottom: 10
        }
      }),
      move: {
        player: me,
        filter: (move) => {
          return isMoveItemType(MaterialType.Firework)(move) && move.location.type === LocationType.Panorama
            && move.location.x === 3 && move.location.y === -1
        },
        interrupt: (move) => isCreateItemType(MaterialType.ApplauseToken)(move)
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.extinguish"><strong/><em/></Trans>,
        position: { y : 15 }
      },
      focus: (game) => {
        return ({
          materials: [
            this.material(game, MaterialType.Firework).id(({front}: any) => front === Firework.Firework25 || front === Firework.Firework14),
          ],
          locations: [
            this
              .location(LocationType.FireworkExtinguish)
              .location
          ],
          margin: {
            bottom: 10
          }
        })
      },
      move: {}
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.end"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.grandefinale"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.scoring"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.go"><strong/><em/></Trans>
      }
    }
  ]
}