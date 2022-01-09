export interface DynamicModalProps {
  modalIsOpen: boolean
  handleModalVisibility: (toggle: boolean, modalContent?: unknown) => () => void
  modalContent: any
}
