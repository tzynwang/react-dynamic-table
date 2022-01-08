export interface DynamicModalProps {
  modalIsOpen: boolean
  handleModalVisibility: (toggle: boolean, modalContent?: any) => () => void
  modalContent: any
}
