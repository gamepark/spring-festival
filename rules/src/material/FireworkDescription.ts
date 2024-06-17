import { XYCoordinates } from '@gamepark/rules-api'
import { Firework } from './Firework'

export type FireworkDescription = {
  explosions: XYCoordinates[]
  extinguishes?: XYCoordinates[]
}


export const fireworkDescriptions: Record<Firework, FireworkDescription> = {
  [Firework.BaseFirework1_1]: {
    explosions: [
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
    ]
  },
  [Firework.BaseFirework1_2]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.BaseFirework1_3]: {
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: -1, y: 0 },
    ]
  },
  [Firework.BaseFirework1_4]: {
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ]
  },
  [Firework.BaseFirework2_1]: {
    explosions: [
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.BaseFirework2_2]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 0, y: 1 },
    ]},
  [Firework.BaseFirework2_3]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
    ],
  },
  [Firework.BaseFirework2_4]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
    ],
  },
  [Firework.BaseFirework3_1]: {
    explosions: [
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
  },
  [Firework.BaseFirework3_2]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 0, y: 1 }
    ],
  },
  [Firework.BaseFirework3_3]: {
    explosions: [
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: 1, y: 0 }
    ],
  },
  [Firework.BaseFirework3_4]: {
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: -1, y: 1 },
      { x: 0, y: 1 },
    ],
  },
  [Firework.BaseFirework4_1]: {
    explosions: [
      { x: -1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
  },
  [Firework.BaseFirework4_2]: {
    explosions: [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ],
  },
  [Firework.BaseFirework4_3]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
    ],
  },
  [Firework.BaseFirework4_4]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: -1, y: 1 },
    ]
  },
  [Firework.Firework1]: {
    explosions: [
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework2]: {
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ]
  },
  [Firework.Firework3]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
    ]
  },
  [Firework.Firework4]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: -1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ]
  },
  [Firework.Firework5]: {
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ]
  },
  [Firework.Firework6]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
    ]
  },
  [Firework.Firework7]: {
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ]
  },
  [Firework.Firework8]: {
    explosions: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework9]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
    ]
  },
  [Firework.Firework10]: {
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ]
  },
  [Firework.Firework11]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: -1, y: 1 },
      { x: 1, y: 1 },
    ]
  },
  [Firework.Firework12]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
    ]
  },
  [Firework.Firework13]: {
    explosions: [
      { x: 1, y: -1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ]
  },
  [Firework.Firework14]: {
    explosions: [
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 },
    ]
  },
  [Firework.Firework15]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
    ]
  },
  [Firework.Firework16]: {
    explosions: [
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
    ]
  },
  [Firework.Firework17]: {
    explosions: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
    ]
  },
  [Firework.Firework18]: {
    explosions: [
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework19]: {
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
    ]
  },
  [Firework.Firework20]: {
    explosions: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
    ]
  },
  [Firework.Firework21]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
    ]
  },
  [Firework.Firework22]: {
    explosions: [
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    extinguishes: [
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework23]: {
    explosions: [
      { x: -1, y: 0 },
      { x: -1, y: -1 },
      { x: 0, y: -1 },
    ],
    extinguishes: [
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework24]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework25]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework26]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework27]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework28]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework29]: {
    explosions: [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework30]: {
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ],
    extinguishes: [
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework31]: {
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework32]: {
    explosions: [
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework33]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework34]: {
    explosions: [
      { x: -1, y: 1 },
      { x: 1, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework35]: {
    explosions: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework36]: {
    explosions: [
      { x: 0, y: -1 },
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework37]: {
    explosions: [
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework38]: {
    explosions: [
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ]
  },
  [Firework.Firework39]: {
    explosions: [
      { x: 0, y: -1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework40]: {
    explosions: [
      { x: -1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]
  },
  [Firework.Firework41]: {
    explosions: [
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework42]: {
    explosions: [
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ]
  },
  [Firework.Firework43]: {
    explosions: [
      { x: -1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
    ]
  },
  [Firework.Firework44]: {
    explosions: [
      { x: 1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ]
  },
  [Firework.Firework45]: {
    explosions: [
      { x: 0, y: -1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework46]: {
    explosions: [
      { x: -1, y: 0 },
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]
  },
  [Firework.Firework47]: {
    explosions: [
      { x: 0, y: 1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
    ]
  },
  [Firework.Firework48]: {
    explosions: [
      { x: 0, y: -1 },
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ]
  },

}