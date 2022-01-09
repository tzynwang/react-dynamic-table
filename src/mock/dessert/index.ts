import {
  DesertHeader as DesertHeaderType,
  DesertRow as DesertRowType
} from './../../model/dessert/types'

export const DesertHeader: DesertHeaderType[] = [
  {
    key: 'dessert',
    label: 'Dessert (100g)',
    style: { flex: '1 1 auto', paddingLeft: '1rem' }
  },
  { key: 'calories', label: 'Calories', style: { flex: '0 0 12.5vw' } },
  { key: 'fat', label: 'Fat (g)', style: { flex: '0 0 12.5vw' } },
  { key: 'carbs', label: 'Carbs (g)', style: { flex: '0 0 12.5vw' } },
  { key: 'protein', label: 'Protein (g)', style: { flex: '0 0 12.5vw' } }
]

export const DesertRow: DesertRowType[] = [
  { dessert: 'Frozen yoghurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3
  },
  { dessert: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9 }
]
