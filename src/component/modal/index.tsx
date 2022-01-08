import React, { memo } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

import { DynamicModalProps } from './types'

function DynamicModal(props: DynamicModalProps): React.ReactElement {
  const { modalIsOpen, handleModalVisibility, modalContent } = props
  return (
    <Dialog
      open={modalIsOpen}
      onClose={handleModalVisibility(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogContent>{modalContent}</DialogContent>
      <DialogActions>
        <Button onClick={handleModalVisibility(false)}>close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(DynamicModal)
