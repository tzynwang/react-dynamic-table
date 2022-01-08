import React, { memo } from 'react'

import Box from '@mui/material/Box'

import { DynamicTableProps } from './types'

function DynamicTable(props: DynamicTableProps): React.ReactElement {
  const { TableHeaderCol, TableRow, renderRowCol } = props
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '48px',
          backgroundColor: 'orange'
        }}
      >
        {TableHeaderCol.map((headerCol, index) => (
          <Box key={index} sx={{ ...headerCol.style }}>
            {headerCol.label}
          </Box>
        ))}
      </Box>
      <Box sx={{ marginBottom: '1rem' }}>
        {TableRow.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '48px',
              backgroundColor: '#eee'
            }}
          >
            {TableHeaderCol.map((headerCol, index) => (
              <Box key={index} sx={{ ...headerCol.style }}>
                {renderRowCol(row, headerCol)}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </React.Fragment>
  )
}

export default memo(DynamicTable)
