interface Style {
  flex: string
  paddingLeft?: string
}

export interface HeaderCol {
  key: string
  label: string
  style: Style
}

export interface Row {
  name: string
  species: string
  age: number
}

type DesertTableKey = 'dessert' | 'calories' | 'fat' | 'carbs' | 'protein'

export interface DesertHeader {
  key: DesertTableKey
  label: string
  style: Style
}

export type DesertRow = {
  [key in DesertTableKey]: string | number
}
