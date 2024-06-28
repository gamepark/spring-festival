import { Composition } from './Composition'

type PatternCompositionDefinition = (number | undefined)[][]

export type PatternCompositionDescription = {
  points: number
  composition: PatternCompositionDefinition[]
}

const _ = undefined
const A = -1

const PatternComposition1: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [1, A, 1]
    ],
    [
      [1],
      [A],
      [1]
    ]
  ]
}

const PatternComposition2: PatternCompositionDescription = {
  points: 4,
  composition: [
    [
      [2, A, 2]
    ],
    [
      [2],
      [A],
      [2]
    ]
  ]

}

const PatternComposition3: PatternCompositionDescription = {
  points: 4,
  composition: [
    [
      [A, 4, 4]
    ],
    [
      [A],
      [4],
      [4]
    ],
    [
      [4, 4, A]
    ],
    [
      [4],
      [4],
      [A]
    ]
  ]
}

const PatternComposition4: PatternCompositionDescription = {
  points: 4,
  composition: [
    [
      [3, 3, A]
    ],
    [
      [3],
      [3],
      [A]
    ],
    [
      [A, 3, 3]
    ],
    [
      [A],
      [3],
      [3]
    ]
  ]
}

const PatternComposition5: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, _],
      [1, 1]
    ],
    [
      [1, A],
      [1, _]
    ],
    [
      [1, 1],
      [_, A]
    ],
    [
      [_, 1],
      [A, 1]
    ]
  ]
}

const PatternComposition6: PatternCompositionDescription = {
  points: 4,
  composition: [
    [
      [2, _],
      [2, A]
    ],
    [
      [2, 2],
      [A, _]
    ],
    [
      [A, 2],
      [_, 2]
    ],
    [
      [_, A],
      [2, 2]
    ]
  ]
}

const PatternComposition7: PatternCompositionDescription = {
  points: 4,
  composition: [
    [
      [4, _],
      [A, 4]
    ],
    [
      [A, 4],
      [4, _]
    ],
    [
      [4, A],
      [_, 4]
    ],
    [
      [_, 4],
      [4, A]
    ]
  ]
}

const PatternComposition8: PatternCompositionDescription = {
  points: 4,
  composition: [
    [
      [3, _],
      [A, 3]
    ],
    [
      [A, 3],
      [3, _]
    ],
    [
      [3, A],
      [_, 3]
    ],
    [
      [_, 3],
      [3, A]
    ]
  ]
}

const PatternComposition9: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [1, A],
      [A, 1]
    ],
    [
      [A, 1],
      [1, A]
    ]
  ]
}

const PatternComposition10: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [2, A],
      [2, A]
    ],
    [
      [2, 2],
      [A, A]
    ],
    [
      [A, 2],
      [A, 2]
    ],
    [
      [A, A],
      [2, 2]
    ]
  ]
}

const PatternComposition11: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, A],
      [3, 3]
    ],
    [
      [3, A],
      [3, A]
    ],
    [
      [3, 3],
      [A, A]
    ],
    [
      [A, 3],
      [A, 3]
    ]
  ]
}

const PatternComposition12: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, 4],
      [4, A]
    ],
    [
      [4, A],
      [A, 4]
    ]
  ]
}

const PatternComposition13: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [1, 1, A],
      [_, A, _]
    ],
    [
      [_, 1],
      [A, 1],
      [_, A]
    ],
    [
      [_, A, _],
      [A, 1, 1]
    ],
    [
      [A, _],
      [1, A],
      [1, _]
    ]
  ]
}

const PatternComposition14: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [A, 2, 2],
      [_, A, _]
    ],
    [
      [_, A],
      [A, 2],
      [_, 2]
    ],
    [
      [_, A, _],
      [2, 2, A]
    ],
    [
      [2, _],
      [2, A],
      [A, _]
    ]
  ]
}

const PatternComposition15: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [3, A, 3],
      [_, A, _]
    ],
    [
      [_, 3],
      [A, A],
      [_, 3]
    ],
    [
      [_, A, _],
      [3, A, 3]
    ],
    [
      [3, _],
      [A, A],
      [3, _]
    ]
  ]
}

const PatternComposition16: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, 4, A],
      [_, 4, _]
    ],
    [
      [_, A],
      [4, 4],
      [_, A]
    ],
    [
      [_, 4, _],
      [A, 4, A]
    ],
    [
      [A, _],
      [4, 4],
      [A, _]
    ]
  ]
}

const PatternComposition17: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [1, _],
      [1, _],
      [A, A]
    ],
    [
      [A, 1, 1],
      [A, _, _]
    ],
    [
      [A, A],
      [_, 1],
      [_, 1]
    ],
    [
      [_, _, A],
      [1, 1, A]
    ]
  ]
}

const PatternComposition18: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [2, _],
      [A, _],
      [A, 2]
    ],
    [
      [A, A, 2],
      [2, _, _]
    ],
    [
      [2, A],
      [_, A],
      [_, 2]
    ],
    [
      [_, _, 2],
      [2, A, A]
    ]
  ]
}

const PatternComposition19: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, _],
      [A, _],
      [3, 3]
    ],
    [
      [3, A, A],
      [3, _, _]
    ],
    [
      [3, 3],
      [_, A],
      [_, A]
    ],
    [
      [_, _, 3],
      [A, A, 3]
    ]
  ]
}

const PatternComposition20: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [A, _],
      [4, _],
      [4, A]
    ],
    [
      [4, 4, A],
      [A, _, _]
    ],
    [
      [A, 4],
      [_, 4],
      [_, A]
    ],
    [
      [_, _, A],
      [A, 4, 4]
    ]
  ]
}

const PatternComposition21: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [_, A],
      [_, A],
      [1, 1]
    ],
    [
      [1, _, _],
      [1, A, A]
    ],
    [
      [1, 1],
      [A, _],
      [A, _]
    ],
    [
      [A, A, 1],
      [_, _, 1]
    ]
  ]
}

const PatternComposition22: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [_, A],
      [_, 2],
      [A, 2]
    ],
    [
      [A, _, _],
      [2, 2, A]
    ],
    [
      [2, A],
      [2, _],
      [A, _]
    ],
    [
      [A, 2, 2],
      [_, _, A]
    ]
  ]
}

const PatternComposition23: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, 3],
      [_, 3],
      [A, A]
    ],
    [
      [A, _, _],
      [A, 3, 3]
    ],
    [
      [A, A],
      [3, _],
      [3, _]
    ],
    [
      [3, 3, A],
      [_, _, A]
    ]
  ]
}

const PatternComposition24: PatternCompositionDescription = {
  points: 5,
  composition: [
    [
      [_, 4],
      [_, A],
      [4, A]
    ],
    [
      [4, _, _],
      [A, A, 4]
    ],
    [
      [A, 4],
      [A, _],
      [4, _]
    ],
    [
      [4, A, A],
      [_, _, 4]
    ]
  ]
}

const PatternComposition25: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [1, A],
      [A, 2]
    ],
    [
      [A, 1],
      [2, A]
    ],
    [
      [2, A],
      [A, 1]
    ],
    [
      [A, 2],
      [1, A]
    ]
  ]
}

const PatternComposition26: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [A, A],
      [2, 3]
    ],
    [
      [2, A],
      [3, A]
    ],
    [
      [3, 2],
      [A, A]
    ],
    [
      [A, 3],
      [A, 2]
    ]
  ]
}

const PatternComposition27: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [A, 4],
      [3, A]
    ],
    [
      [3, A],
      [A, 4]
    ],
    [
      [A, 3],
      [4, A]
    ],
    [
      [4, A],
      [A, 3]
    ]
  ]
}

const PatternComposition28: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [A, A],
      [4, 1]
    ],
    [
      [4, A],
      [1, A]
    ],
    [
      [1, 4],
      [A, A]
    ],
    [
      [A, 1],
      [A, 4]
    ]
  ]
}

const PatternComposition29: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [A, 3, A],
      [_, 1, _]
    ],
    [
      [_, A],
      [1, 3],
      [_, A]
    ],
    [
      [_, 1, _],
      [A, 3, A]
    ],
    [
      [A, _],
      [3, 1],
      [A, _]
    ]
  ]
}

const PatternComposition30: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [2, A, 4],
      [_, A, _]
    ],
    [
      [_, 2],
      [A, A],
      [_, 4]
    ],
    [
      [_, A, _],
      [4, A, 2]
    ],
    [
      [4, _],
      [A, A],
      [2, _]
    ]
  ]
}

const PatternComposition31: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [1, A, 3],
      [_, A, _]
    ],
    [
      [_, 1],
      [A, A],
      [_, 3]
    ],
    [
      [_, A, _],
      [3, A, 1]
    ],
    [
      [3, _],
      [A, A],
      [1, _]
    ]
  ]
}

const PatternComposition32: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [A, 4, A],
      [_, 2, _]
    ],
    [
      [_, A],
      [2, 4],
      [_, A]
    ],
    [
      [_, 2, _],
      [A, 4, A]
    ],
    [
      [A, _],
      [4, 2],
      [A, _]
    ]
  ]
}

const PatternComposition33: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [1, _],
      [A, _],
      [A, 4]
    ],
    [
      [A, A, 1],
      [4, _, _]
    ],
    [
      [4, A],
      [_, A],
      [_, 1]
    ],
    [
      [_, _, 4],
      [1, A, A]
    ]
  ]
}

const PatternComposition34: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [_, A],
      [_, A],
      [2, 1]
    ],
    [
      [2, _, _],
      [1, A, A]
    ],
    [
      [1, 2],
      [A, _],
      [A, _]
    ],
    [
      [A, A, 1],
      [_, _, 2]
    ]
  ]
}

const PatternComposition35: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [A, _],
      [3, _],
      [2, A]
    ],
    [
      [_, _, A],
      [A, 3, 2]
    ],
    [
      [A, 2],
      [_, 3],
      [_, A]
    ],
    [
      [2, 3, A],
      [A, _, _]
    ]
  ]
}

const PatternComposition36: PatternCompositionDescription = {
  points: 6,
  composition: [
    [
      [_, 4],
      [_, 1],
      [A, A]
    ],
    [
      [A, _, _],
      [A, 1, 4]
    ],
    [
      [A, A],
      [1, _],
      [4, _]
    ],
    [
      [4, 1, A],
      [_, _, A]
    ]
  ]
}


export const patternCompositionDescriptions: Partial<Record<Composition, PatternCompositionDescription>> = {
  [Composition.PatternComposition1]: PatternComposition1,
  [Composition.PatternComposition2]: PatternComposition2,
  [Composition.PatternComposition3]: PatternComposition3,
  [Composition.PatternComposition4]: PatternComposition4,
  [Composition.PatternComposition5]: PatternComposition5,
  [Composition.PatternComposition6]: PatternComposition6,
  [Composition.PatternComposition7]: PatternComposition7,
  [Composition.PatternComposition8]: PatternComposition8,
  [Composition.PatternComposition9]: PatternComposition9,
  [Composition.PatternComposition10]: PatternComposition10,
  [Composition.PatternComposition11]: PatternComposition11,
  [Composition.PatternComposition12]: PatternComposition12,
  [Composition.PatternComposition13]: PatternComposition13,
  [Composition.PatternComposition14]: PatternComposition14,
  [Composition.PatternComposition15]: PatternComposition15,
  [Composition.PatternComposition16]: PatternComposition16,
  [Composition.PatternComposition17]: PatternComposition17,
  [Composition.PatternComposition18]: PatternComposition18,
  [Composition.PatternComposition19]: PatternComposition19,
  [Composition.PatternComposition20]: PatternComposition20,
  [Composition.PatternComposition21]: PatternComposition21,
  [Composition.PatternComposition22]: PatternComposition22,
  [Composition.PatternComposition23]: PatternComposition23,
  [Composition.PatternComposition24]: PatternComposition24,
  [Composition.PatternComposition25]: PatternComposition25,
  [Composition.PatternComposition26]: PatternComposition26,
  [Composition.PatternComposition27]: PatternComposition27,
  [Composition.PatternComposition28]: PatternComposition28,
  [Composition.PatternComposition29]: PatternComposition29,
  [Composition.PatternComposition30]: PatternComposition30,
  [Composition.PatternComposition31]: PatternComposition31,
  [Composition.PatternComposition32]: PatternComposition32,
  [Composition.PatternComposition33]: PatternComposition33,
  [Composition.PatternComposition34]: PatternComposition34,
  [Composition.PatternComposition35]: PatternComposition35,
  [Composition.PatternComposition36]: PatternComposition36
}


