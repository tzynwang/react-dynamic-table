import React, { memo } from 'react'

import DynamicTableRow from '../tableRow'

import Box from '@mui/material/Box'

import { DynamicTableProps } from './types'
import './style.css'

function DynamicTable(props: DynamicTableProps): React.ReactElement {
  const {
    TableHeaderCol,
    TableRow,
    renderRowCol,
    renderRowUrl,
    isLink,
    isTable
  } = props
  return (
    <div>
      <div className="tableHeader">
        {TableHeaderCol.map((headerCol, index) => (
          <Box key={index} sx={{ ...headerCol.style }}>
            {headerCol.label}
          </Box>
        ))}
      </div>
      <div>
        {TableRow.map((row, index) => (
          <DynamicTableRow
            key={index}
            isLink={isLink}
            isTable={isTable}
            url={renderRowUrl ? renderRowUrl(row) : undefined}
          >
            {TableHeaderCol.map((headerCol, index) => (
              <Box key={index} sx={{ ...headerCol.style }}>
                {renderRowCol(row, headerCol)}
              </Box>
            ))}
          </DynamicTableRow>
        ))}
      </div>
    </div>
  )
}

export default memo(DynamicTable)
