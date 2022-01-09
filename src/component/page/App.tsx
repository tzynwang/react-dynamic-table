import React, { memo, useState } from 'react'

import DynamicTable from './../table/table'
import DynamicModal from './../modal'

import { Header, Row } from './../../mock/pet'
import { DesertHeader, DesertRow } from './../../mock/dessert'

import IconButton from '@mui/material/IconButton'
import CampaignIcon from '@mui/icons-material/Campaign'
import Stack from '@mui/material/Stack'

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
  const handleModalVisibility =
    (toggle: boolean, modalContent?: unknown) => () => {
      if (toggle) {
        setModalContent(modalContent as string)
        setModalIsOpen(true)
      } else {
        setModalIsOpen(false)
      }
    }
  function handlePetRowCol(row: unknown, headerCol: unknown) {
    switch ((headerCol as HeaderCol).key) {
      case 'name':
        return (row as RowType).name
      case 'species':
        return (row as RowType).species
      case 'age':
        return (row as RowType).age
      case 'action':
        return (
          <IconButton
            aria-label="display pet name"
            onClick={handleModalVisibility(
              true,
              `${(row as RowType).name} is a ${(row as RowType).age}-year-old ${
                (row as RowType).species
              }.`
            )}
          >
            <CampaignIcon />
          </IconButton>
        )
      default:
        return ''
    }
  }
  function handleDesertRowCol(row: unknown, headerCol: unknown) {
    switch ((headerCol as DesertHeaderType).key) {
      case 'dessert':
        return (row as DesertRowType).dessert
      case 'calories':
        return (row as DesertRowType).calories
      case 'fat':
        return (row as DesertRowType).fat
      case 'carbs':
        return (row as DesertRowType).carbs
      case 'protein':
        return (row as DesertRowType).protein
      default:
        return
    }
  }
  function handleDesertRowUrl(row: unknown) {
    return `https://www.google.com/search?q=${(row as DesertRowType).dessert}`
  }

  // view
  return (
    <div className="App">
      <Stack spacing={2}>
        <DynamicTable
          TableHeaderCol={Header}
          TableRow={Row}
          renderRowCol={handlePetRowCol}
          isTable
        />
        <DynamicTable
          TableHeaderCol={DesertHeader}
          TableRow={DesertRow}
          renderRowCol={handleDesertRowCol}
          renderRowUrl={handleDesertRowUrl}
          isLink
        />
      </Stack>
      <DynamicModal
        modalIsOpen={modalIsOpen}
        handleModalVisibility={handleModalVisibility}
        modalContent={modalContent}
      />
    </div>
  )
}

export default memo(App)
