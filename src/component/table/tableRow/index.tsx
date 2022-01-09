import React, { memo, useMemo } from 'react'

import Box from '@mui/material/Box'

import { DynamicTableRowProps } from './types'
import './style.css'

function DynamicTableRow(props: DynamicTableRowProps): React.ReactElement {
  const { children, isLink, isTable, url } = props
  const rowComponent = useMemo(() => {
    if (isLink && url) {
      return (
        <a
          className="tableRow"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      )
    }
    if (isTable) {
      return <Box className="tableRow">{children}</Box>
    }
  }, [isLink, isTable, children, url]) as React.ReactElement

  return rowComponent
}

export default memo(DynamicTableRow)
