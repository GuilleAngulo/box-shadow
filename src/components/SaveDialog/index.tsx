import Button from 'components/Button'
import Modal, { ModalProps } from 'components/Modal'
import TextField from 'components/TextField'

import { DriveFileRenameOutline } from '@styled-icons/material-outlined'
import * as S from './styles'
import { useState } from 'react'

export type SaveDialogProps = {
  onSave: (title: string) => void
} & Omit<ModalProps, 'children' | 'title'>

const SaveDialog = ({ isOpen, setIsOpen, onSave }: SaveDialogProps) => {
  const [title, setTitle] = useState('')

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Save your design">
      <S.Content>
        <S.Info>
          Give a name to your <b>awesome</b> creation:
        </S.Info>
        <TextField
          name="title"
          placeholder="Title"
          type="text"
          // error="error"
          // initialValue={query.email as string}
          onInputChange={(value) => setTitle(value)}
          icon={<DriveFileRenameOutline />}
        />
      </S.Content>
      <S.Controls>
        <Button minimal onClick={() => setIsOpen(false)} aria-label="close">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSave(title)
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
export default SaveDialog
