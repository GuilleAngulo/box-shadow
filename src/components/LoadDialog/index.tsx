import Button from 'components/Button'
import Modal, { ModalProps } from 'components/Modal'

import * as S from './styles'

export type LoadDialogProps = Omit<ModalProps, 'children' | 'title'>

const LoadDialog = ({ isOpen, setIsOpen }: LoadDialogProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Save your design">
      <S.Content>
        <S.Info>Load or Delete one of your creations:</S.Info>
      </S.Content>
      <S.Controls>
        <Button variant onClick={() => setIsOpen(false)} aria-label="close">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setIsOpen(false)
            return
          }}
          aria-label="save your design"
        >
          Confirm
        </Button>
      </S.Controls>
    </Modal>
  )
}
export default LoadDialog
