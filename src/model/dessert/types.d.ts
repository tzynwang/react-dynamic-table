import { Style } from './../GeneralTypes'

type DesertTableKey = 'dessert' | 'calories' | 'fat' | 'carbs' | 'protein'

export interface DesertHeader {
  key: DesertTableKey
  label: string
  style: Style
}

export type DesertRow = {
  [key in DesertTableKey]: string | number
}
