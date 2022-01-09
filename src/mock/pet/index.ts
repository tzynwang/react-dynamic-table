import { HeaderCol, Row as RowType } from './../../model/pet/types'

export const Header: HeaderCol[] = [
  {
    key: 'name',
    label: 'name',
    style: { flex: '1 1 auto', paddingLeft: '1rem' }
  },
  { key: 'species', label: 'species', style: { flex: '0 0 20vw' } },
  { key: 'age', label: 'age', style: { flex: '0 0 10vw' } },
  {
    key: 'action',
    label: 'action',
    style: { flex: '0 0 10vw', opacity: 0 }
  }
]

export const Row: RowType[] = [
  { name: 'Puff', species: 'dog', age: 5 },
  { name: 'Norman', species: 'cat', age: 2 },
  { name: 'Henry', species: 'fox', age: 8 }
]
