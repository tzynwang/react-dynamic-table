import React, { memo, useState } from 'react'

import DynamicTable from './../table'
import DynamicModal from './../modal'

import { Header, Row } from './../../mock/pet'
import { DesertHeader, DesertRow } from './../../mock/dessert'

import IconButton from '@mui/material/IconButton'
import CampaignIcon from '@mui/icons-material/Campaign'

import {
  HeaderCol,
  Row as RowType,
  DesertHeader as DesertHeaderType,
  DesertRow as DesertRowType
} from './type'

const MODAL_DEFAULT_STATE = false
const MODAL_DEFAULT_CONTENT = ''

function App(): React.ReactElement {
  // state
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(MODAL_DEFAULT_STATE)
  const [modalContent, setModalContent] = useState<string>(
    MODAL_DEFAULT_CONTENT
  )

  // function
  const handleModalVisibility = (toggle: boolean, modalContent?: any) => () => {
    if (toggle) {
      setModalContent(modalContent)
      setModalIsOpen(true)
    } else {
      setModalIsOpen(false)
    }
  }
  function handlePetRowCol(row: RowType, headerCol: HeaderCol) {
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

  // view
  return (
    <div className="App">
      <DynamicTable
        TableHeaderCol={Header}
        TableRow={Row}
        renderRowCol={handlePetRowCol}
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
