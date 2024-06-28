import { XYCoordinates } from '@gamepark/rules-api'
import { Color } from './Color'
import { Firework } from './Firework'

export type FireworkDescription = {
  explosions: XYCoordinates[]
  extinguishes: XYCoordinates[]
  color: Color
}


export const fireworkDescriptions: Record<Firework, FireworkDescription> = {
  [Firework.BaseFirework1_1]: {
    color: Color.Red,
    explosions: [
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.BaseFirework1_2]: {
    color: Color.Yellow,
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.BaseFirework1_3]: {
    color: Color.Green,
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: -1, y: 0 }
    ],
    extinguishes: []
  },
  [Firework.BaseFirework1_4]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: 0, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.BaseFirework2_1]: {
    color: Color.Blue,
    explosions: [
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.BaseFirework2_2]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.BaseFirework2_3]: {
    color: Color.Yellow,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: -1, y: 0 }
    ]
  },
  [Firework.BaseFirework2_4]: {
    color: Color.Green,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: 0, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.BaseFirework3_1]: {
    color: Color.Green,
    explosions: [
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.BaseFirework3_2]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.BaseFirework3_3]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: 1, y: 0 }
    ]
  },
  [Firework.BaseFirework3_4]: {
    color: Color.Yellow,
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: -1, y: 1 },
      { x: 0, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.BaseFirework4_1]: {
    color: Color.Yellow,
    explosions: [
      { x: -1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.BaseFirework4_2]: {
    color: Color.Green,
    explosions: [
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.BaseFirework4_3]: {
    color: Color.Blue,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: -1, y: 0 }
    ]
  },
  [Firework.BaseFirework4_4]: {
    color: Color.Red,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: -1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework1]: {
    color: Color.Green,
    explosions: [
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 1, y: 0 }
    ],
    extinguishes: []
  },
  [Firework.Firework2]: {
    color: Color.Green,
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework3]: {
    color: Color.Green,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ],
    extinguishes: []
  },
  [Firework.Firework4]: {
    color: Color.Yellow,
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: -1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework5]: {
    color: Color.Yellow,
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework6]: {
    color: Color.Yellow,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ],
    extinguishes: []
  },
  [Firework.Firework7]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework8]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ],
    extinguishes: []
  },
  [Firework.Firework9]: {
    color: Color.Red,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ],
    extinguishes: []
  },
  [Firework.Firework10]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework11]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: -1, y: 1 },
      { x: 1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework12]: {
    color: Color.Blue,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ],
    extinguishes: []
  },
  [Firework.Firework13]: {
    color: Color.Green,
    explosions: [
      { x: 1, y: -1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework14]: {
    color: Color.Green,
    explosions: [
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 }
    ],
    extinguishes: []
  },
  [Firework.Firework15]: {
    color: Color.Green,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 }
    ]
  },
  [Firework.Firework16]: {
    color: Color.Yellow,
    explosions: [
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 }
    ],
    extinguishes: [
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework17]: {
    color: Color.Yellow,
    explosions: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework18]: {
    color: Color.Yellow,
    explosions: [
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework19]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 }
    ],
    extinguishes: [
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework20]: {
    color: Color.Red,
    explosions: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework21]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework22]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 }
    ],
    extinguishes: [
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework23]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 0 },
      { x: -1, y: -1 },
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework24]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework25]: {
    color: Color.Green,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework26]: {
    color: Color.Green,
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework27]: {
    color: Color.Green,
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework28]: {
    color: Color.Yellow,
    explosions: [
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework29]: {
    color: Color.Yellow,
    explosions: [
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework30]: {
    color: Color.Yellow,
    explosions: [
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework31]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 1 },
      { x: -1, y: -1 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework32]: {
    color: Color.Blue,
    explosions: [
      { x: 1, y: -1 },
      { x: 1, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework33]: {
    color: Color.Blue,
    explosions: [
      { x: 0, y: -1 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework34]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: 1 },
      { x: 1, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework35]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: -1 },
      { x: 1, y: -1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework36]: {
    color: Color.Red,
    explosions: [
      { x: 0, y: -1 },
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework37]: {
    color: Color.Yellow,
    explosions: [
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework38]: {
    color: Color.Yellow,
    explosions: [
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework39]: {
    color: Color.Yellow,
    explosions: [
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework40]: {
    color: Color.Green,
    explosions: [
      { x: -1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework41]: {
    color: Color.Green,
    explosions: [
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework42]: {
    color: Color.Green,
    explosions: [
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework43]: {
    color: Color.Blue,
    explosions: [
      { x: -1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework44]: {
    color: Color.Blue,
    explosions: [
      { x: 1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 }
    ]
  },
  [Firework.Firework45]: {
    color: Color.Blue,
    explosions: [
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework46]: {
    color: Color.Red,
    explosions: [
      { x: -1, y: 0 }
    ],
    extinguishes: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  [Firework.Firework47]: {
    color: Color.Red,
    explosions: [
      { x: 0, y: 1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 }
    ]
  },
  [Firework.Firework48]: {
    color: Color.Red,
    explosions: [
      { x: 0, y: -1 }
    ],
    extinguishes: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 }
    ]
  }

}