import { Color } from './Color'
import { Composition } from './Composition'

type ColorCompositionDefinition = (Color | undefined)[][]

export type ColorCompositionDescription = {
  points: number
  composition: ColorCompositionDefinition[]
}

const B = Color.Blue
const G = Color.Green
const Y = Color.Yellow
const R = Color.Red
const A = Color.Any
const _ = undefined

export const ColorComposition1: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [B, A, B]
    ],
    [
      [B],
      [A],
      [B]
    ]
  ]
}

export const ColorComposition2: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [Y, Color.Any, Y]
    ],
    [
      [Y],
      [Color.Any],
      [Y]
    ]
  ]
}

export const ColorComposition3: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [Color.Any, G, G]
    ],
    [
      [G, G, Color.Any]
    ],
    [
      [Color.Any],
      [G],
      [G]
    ],
    [
      [G],
      [G],
      [Color.Any]
    ]
  ]
}

export const ColorComposition4: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [Color.Any, R, R]
    ],
    [
      [Color.Any],
      [R],
      [R]
    ],
    [
      [R, R, Color.Any]
    ],
    [
      [R],
      [R],
      [Color.Any]
    ]
  ]
}

export const ColorComposition5: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [A, _],
      [B, B]
    ],
    [
      [B, A],
      [B, _]
    ],
    [
      [B, B],
      [_, A]
    ],
    [
      [_, B],
      [A, B]
    ]
  ]
}

export const ColorComposition6: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [Y, _],
      [Y, A]
    ],
    [
      [Y, Y],
      [A, _]
    ],
    [
      [A, Y],
      [_, Y]
    ],
    [
      [_, A],
      [Y, Y]
    ]
  ]
}

export const ColorComposition7: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [G, _],
      [A, G]
    ],
    [
      [A, G],
      [G, _]
    ],
    [
      [G, A],
      [_, G]
    ],
    [
      [_, G],
      [G, A]
    ]
  ]
}

export const ColorComposition8: ColorCompositionDescription = {
  points: 4,
  composition: [
    [
      [R, _],
      [A, R]
    ],
    [
      [A, R],
      [R, _]
    ],
    [
      [R, A],
      [_, R]
    ],
    [
      [_, R],
      [R, A]
    ]
  ]
}

export const ColorComposition9: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, B],
      [B, A]
    ],
    [
      [B, A],
      [A, B]
    ]
  ]
}

export const ColorComposition10: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, G],
      [A, G]
    ],
    [
      [A, A],
      [G, G]
    ],
    [
      [G, A],
      [G, A]
    ],
    [
      [G, G],
      [A, A]
    ]
  ]
}

export const ColorComposition11: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, Y],
      [A, Y]
    ],
    [
      [A, A],
      [Y, Y]
    ],
    [
      [Y, A],
      [Y, A]
    ],
    [
      [Y, Y],
      [A, A]
    ]
  ]
}

export const ColorComposition12: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [R, A],
      [A, R]
    ],
    [
      [A, R],
      [R, A]
    ]
  ]
}

export const ColorComposition13: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, A],
      [_, B],
      [A, B]
    ],
    [
      [A, _, _],
      [B, B, A]
    ],
    [
      [B, A],
      [B, _],
      [A, _]
    ],
    [
      [A, B, B],
      [_, _, A]
    ]
  ]
}

export const ColorComposition14: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, G],
      [_, G],
      [A, A]
    ],
    [
      [A, _, _],
      [A, G, G]
    ],
    [
      [A, A],
      [G, _],
      [G, _]
    ],
    [
      [G, G, A],
      [_, _, A]
    ]
  ]
}

export const ColorComposition15: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, Y],
      [_, A],
      [Y, A]
    ],
    [
      [Y, _, _],
      [A, A, Y]
    ],
    [
      [A, Y],
      [A, _],
      [Y, _]
    ],
    [
      [Y, A, A],
      [_, _, Y]
    ]
  ]
}

export const ColorComposition16: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, A],
      [_, A],
      [R, R]
    ],
    [
      [R, _, _],
      [R, A, A]
    ],
    [
      [R, R],
      [A, _],
      [A, _]
    ],
    [
      [A, A, R],
      [_, _, R]
    ]
  ]
}

export const ColorComposition17: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [B, A, B],
      [_, A, _]
    ],
    [
      [_, B],
      [A, A],
      [_, B]
    ],
    [
      [_, A, _],
      [B, A, B]
    ],
    [
      [B, _],
      [A, A],
      [B, _]
    ]
  ]
}

export const ColorComposition18: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, G, A],
      [_, G, _]
    ],
    [
      [_, A],
      [G, G],
      [_, A]
    ],
    [
      [_, G, _],
      [A, G, A]
    ],
    [
      [A, _],
      [G, G],
      [A, _]
    ]
  ]
}

export const ColorComposition19: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [Y, Y, A],
      [_, A, _]
    ],
    [
      [_, Y],
      [A, Y],
      [_, A]
    ],
    [
      [_, A, _],
      [A, Y, Y]
    ],
    [
      [A, _],
      [Y, A],
      [Y, _]
    ]
  ]
}

export const ColorComposition20: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, R, R],
      [_, A, _]
    ],
    [
      [_, A],
      [A, R],
      [_, R]
    ],
    [
      [_, A, _],
      [R, R, A]
    ],
    [
      [R, _],
      [R, A],
      [A, _]
    ]
  ]
}

export const ColorComposition21: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [B, _],
      [A, _],
      [A, B]
    ],
    [
      [A, A, B],
      [B, _, _]
    ],
    [
      [B, A],
      [_, A],
      [_, B]
    ],
    [
      [_, _, B],
      [B, A, A]
    ]
  ]
}

export const ColorComposition22: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, _],
      [A, _],
      [G, G]
    ],
    [
      [G, A, A],
      [G, _, _]
    ],
    [
      [G, G],
      [_, A],
      [_, A]
    ],
    [
      [_, _, G],
      [A, A, G]
    ]
  ]
}

export const ColorComposition23: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, _],
      [Y, _],
      [Y, A]
    ],
    [
      [Y, Y, A],
      [A, _, _]
    ],
    [
      [A, Y],
      [_, Y],
      [_, A]
    ],
    [
      [_, _, A],
      [A, Y, Y]
    ]
  ]
}

export const ColorComposition24: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [R, _],
      [R, _],
      [A, A]
    ],
    [
      [A, R, R],
      [A, _, _]
    ],
    [
      [A, A],
      [_, R],
      [_, R]
    ],
    [
      [_, _, A],
      [R, R, A]
    ]
  ]
}

export const ColorComposition25: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, A],
      [B, Y]
    ],
    [
      [B, A],
      [Y, A]
    ],
    [
      [Y, B],
      [A, A]
    ],
    [
      [A, Y],
      [A, B]
    ]
  ]
}

export const ColorComposition26: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [G, A],
      [A, Y]
    ],
    [
      [A, G],
      [Y, A]
    ],
    [
      [Y, A],
      [A, G]
    ],
    [
      [A, Y],
      [G, A]
    ]
  ]
}

export const ColorComposition27: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [G, A],
      [R, A]
    ],
    [
      [R, G],
      [A, A]
    ],
    [
      [A, R],
      [A, G]
    ],
    [
      [A, A],
      [G, R]
    ]
  ]
}

export const ColorComposition28: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, R],
      [B, A]
    ],
    [
      [B, A],
      [A, R]
    ],
    [
      [A, B],
      [R, A]
    ],
    [
      [R, A],
      [A, B]
    ]
  ]
}

export const ColorComposition29: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, B, A],
      [_, G, _]
    ],
    [
      [_, A],
      [G, B],
      [_, A]
    ],
    [
      [_, G, _],
      [A, B, A]
    ],
    [
      [A, _],
      [B, G],
      [A, _]
    ]
  ]
}

export const ColorComposition30: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [Y, A, R],
      [_, A, _]
    ],
    [
      [_, Y],
      [A, A],
      [_, R]
    ],
    [
      [_, A, _],
      [R, A, Y]
    ],
    [
      [R, _],
      [A, A],
      [Y, _]
    ]
  ]
}

export const ColorComposition31: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [B, A, A],
      [_, G, _]
    ],
    [
      [_, B],
      [G, A],
      [_, A]
    ],
    [
      [_, G, _],
      [A, A, B]
    ],
    [
      [A, _],
      [A, G],
      [B, _]
    ]
  ]
}

export const ColorComposition32: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, Y, A],
      [_, R, _]
    ],
    [
      [_, A],
      [R, Y],
      [_, A]
    ],
    [
      [_, R, _],
      [A, Y, A]
    ],
    [
      [A, _],
      [Y, R],
      [A, _]
    ]
  ]
}

export const ColorComposition33: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, _],
      [R, _],
      [A, B]
    ],
    [
      [A, R, A],
      [B, _, _]
    ],
    [
      [B, A],
      [_, R],
      [_, A]
    ],
    [
      [_, _, B],
      [A, R, A]
    ]
  ]
}

export const ColorComposition34: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [Y, _],
      [A, _],
      [A, B]
    ],
    [
      [A, A, Y],
      [B, _, _]
    ],
    [
      [B, A],
      [_, A],
      [_, Y]
    ],
    [
      [_, _, B],
      [Y, A, A]
    ]
  ]
}

export const ColorComposition35: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, A],
      [_, G],
      [Y, A]
    ],
    [
      [Y, _, _],
      [A, G, A]
    ],
    [
      [A, Y],
      [G, _],
      [A, _]
    ],
    [
      [A, G, A],
      [_, _, Y]
    ]
  ]
}

export const ColorComposition36: ColorCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, R],
      [_, A],
      [G, A]
    ],
    [
      [G, _, _],
      [A, A, R]
    ],
    [
      [A, G],
      [A, _],
      [R, _]
    ],
    [
      [R, A, A],
      [_, _, G]
    ]
  ]
}

export const colorCompositionDescriptions: Partial<Record<Composition, ColorCompositionDescription>> = {
  [Composition.ColorComposition1]: ColorComposition1,
  [Composition.ColorComposition2]: ColorComposition2,
  [Composition.ColorComposition3]: ColorComposition3,
  [Composition.ColorComposition4]: ColorComposition4,
  [Composition.ColorComposition5]: ColorComposition5,
  [Composition.ColorComposition6]: ColorComposition6,
  [Composition.ColorComposition7]: ColorComposition7,
  [Composition.ColorComposition8]: ColorComposition8,
  [Composition.ColorComposition9]: ColorComposition9,
  [Composition.ColorComposition10]: ColorComposition10,
  [Composition.ColorComposition11]: ColorComposition11,
  [Composition.ColorComposition12]: ColorComposition12,
  [Composition.ColorComposition13]: ColorComposition13,
  [Composition.ColorComposition14]: ColorComposition14,
  [Composition.ColorComposition15]: ColorComposition15,
  [Composition.ColorComposition16]: ColorComposition16,
  [Composition.ColorComposition17]: ColorComposition17,
  [Composition.ColorComposition18]: ColorComposition18,
  [Composition.ColorComposition19]: ColorComposition19,
  [Composition.ColorComposition20]: ColorComposition20,
  [Composition.ColorComposition21]: ColorComposition21,
  [Composition.ColorComposition22]: ColorComposition22,
  [Composition.ColorComposition23]: ColorComposition23,
  [Composition.ColorComposition24]: ColorComposition24,
  [Composition.ColorComposition25]: ColorComposition25,
  [Composition.ColorComposition26]: ColorComposition26,
  [Composition.ColorComposition27]: ColorComposition27,
  [Composition.ColorComposition28]: ColorComposition28,
  [Composition.ColorComposition29]: ColorComposition29,
  [Composition.ColorComposition30]: ColorComposition30,
  [Composition.ColorComposition31]: ColorComposition31,
  [Composition.ColorComposition32]: ColorComposition32,
  [Composition.ColorComposition33]: ColorComposition33,
  [Composition.ColorComposition34]: ColorComposition34,
  [Composition.ColorComposition35]: ColorComposition35,
  [Composition.ColorComposition36]: ColorComposition36
}


