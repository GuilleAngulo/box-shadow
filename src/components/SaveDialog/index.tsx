import Button from 'components/Button'
import Modal, { ModalProps } from 'components/Modal'
import TextField from 'components/TextField'
import Joi from 'joi'

import {
  DriveFileRenameOutline,
  Warning
} from '@styled-icons/material-outlined'

import * as S from './styles'
import { useState } from 'react'

export type SaveDialogProps = {
  onSave: (title: string) => void
} & Omit<ModalProps, 'children' | 'title'>

const SaveDialog = ({ isOpen, setIsOpen, onSave }: SaveDialogProps) => {
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const schema = Joi.object({
      title: Joi.string().min(2).max(20).required().messages({
        'string.base': `Title should be a text`,
        'string.empty': `Title cannot be an empty field`,
        'string.min': `Title should have a minimum length of {#limit}`,
        'string.max': `Title should have a max length of {#limit}`,
        'any.required': `Title is a required field`
      })
    })

    const { error } = schema.validate({ title }, { abortEarly: true })

    if (error) {
      setTitleError(error.message)
      return
    }
    setTitleError('')

    onSave(title)
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Save your design">
      <S.Form onSubmit={handleSubmit}>
        <S.Content>
          <S.Info>
            Give a name to your <b>awesome</b> creation:
          </S.Info>
          {titleError && (
            <S.Error>
              <Warning />
              {titleError}
            </S.Error>
          )}
          <TextField
            name="title"
            placeholder="Title"
            type="text"
            onInputChange={(value) => setTitle(value)}
            icon={<DriveFileRenameOutline />}
          />
          <S.Legend>To modify one of your designs type the same title</S.Legend>
        </S.Content>
        <S.Controls>
          <Button variant onClick={() => setIsOpen(false)} aria-label="close">
            Cancel
          </Button>
          <Button type="submit" aria-label="save your design">
            Confirm
          </Button>
        </S.Controls>
      </S.Form>
    </Modal>
  )
}
export default SaveDialog
