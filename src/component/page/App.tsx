import React, { memo, useState } from 'react'

import DynamicTable from './../table'
import DynamicModal from './../modal'

import IconButton from '@mui/material/IconButton'
import CampaignIcon from '@mui/icons-material/Campaign'

import {
  HeaderCol,
  Row as RowType,
  DesertHeader as DesertHeaderType,
  DesertRow as DesertRowType
} from './type'

const Header: HeaderCol[] = [
  {
    key: 'name',
    label: 'name',
    style: { flex: '1 1 auto', paddingLeft: '1rem' }
  },
  { key: 'species', label: 'species', style: { flex: '0 0 20vw' } },
  { key: 'age', label: 'age', style: { flex: '0 0 10vw' } },
  { key: 'action', label: 'action', style: { flex: '0 0 10vw' } }
]
const Row: RowType[] = [
  { name: 'Puff', species: 'dog', age: 5 },
  { name: 'Norman', species: 'cat', age: 2 },
  { name: 'Henry', species: 'fox', age: 8 }
]

const DesertHeader: DesertHeaderType[] = [
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
const DesertRow: DesertRowType[] = [
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

function App(): React.ReactElement {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<string>('')

  const handleModalVisibility = (toggle: boolean, modalContent?: any) => () => {
    if (toggle) {
      setModalContent(modalContent)
      setModalIsOpen(true)
    } else {
      setModalIsOpen(false)
    }
  }
  function handleRenderRowCol(row: RowType, headerCol: HeaderCol) {
    switch (headerCol.key) {
      case 'name':
        return row.name
      case 'species':
        return row.species
      case 'age':
        return row.age
      case 'action':
        return (
          <IconButton
            aria-label="alert pet name"
            onClick={handleModalVisibility(
              true,
              `${row.name} is a ${row.age}-year-old ${row.species}`
            )}
          >
            <CampaignIcon />
          </IconButton>
        )
      default:
        return ''
    }
  }
  function handleDesertRowCol(row: DesertRowType, headerCol: DesertHeaderType) {
    switch (headerCol.key) {
      case 'dessert':
        return row.dessert
      case 'calories':
        return row.calories
      case 'fat':
        return row.fat
      case 'carbs':
        return row.carbs
      case 'protein':
        return row.protein
      default:
        return
    }
  }

  return (
    <div className="App">
      <DynamicTable
        TableHeaderCol={Header}
        TableRow={Row}
        renderRowCol={handleRenderRowCol}
      />
      <DynamicTable
        TableHeaderCol={DesertHeader}
        TableRow={DesertRow}
        renderRowCol={handleDesertRowCol}
      />
      <DynamicModal
        modalIsOpen={modalIsOpen}
        handleModalVisibility={handleModalVisibility}
        modalContent={modalContent}
      />
    </div>
  )
}

export default memo(App)
