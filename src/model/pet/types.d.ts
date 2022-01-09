import { Style } from './../GeneralTypes'

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
