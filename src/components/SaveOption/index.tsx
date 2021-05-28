import { useState } from 'react'
import { Item } from 'components/Login/styles'
import { Save } from '@styled-icons/material-outlined'
import { saveBoxShadow } from 'services/boxShadows'

import * as S from './styles'

import toast, { Toaster } from 'react-hot-toast'

import { useBoxShadow } from 'hooks/use-box-shadow'
import { useAuth } from 'hooks/use-auth'
import { useTheme } from 'hooks/use-theme'
import SaveDialog from 'components/SaveDialog'

export type SaveOptionProps = {
  closeDropdown: () => void
}

const SaveOption = ({ closeDropdown }: SaveOptionProps) => {
  const { boxShadow, shape } = useBoxShadow()
  const { user } = useAuth()
  const { theme } = useTheme()
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)

  const save = async (title: string) => {
    const res = saveBoxShadow({
      title,
      slug: title.toLowerCase().split(' ').join('-'),
      box_shadow: JSON.stringify(boxShadow),
      theme,
      shape,
      user_id: user?.id ?? ''
    })

    toast.promise(
      res,
      {
        loading: 'Saving...',
        success: () => `Successfully saved.`,
        error: (err: string) => {
          const error = err.toString()
          return error.includes('duplicate key value')
            ? 'Someone has already used that name.'
            : 'Oops ... something went wrong.'
        }
      },
      {
        style: {
          minWidth: '150px'
        }
      }
    )
  }

  return (
    <>
      <Item
        role="button"
        aria-label="Save"
        onClick={() => {
          closeDropdown()
          setIsSaveModalOpen(true)
          return
        }}
      >
        <Save />
        <span>Save design</span>
      </Item>
      <SaveDialog
        isOpen={isSaveModalOpen}
        setIsOpen={setIsSaveModalOpen}
        onSave={save}
      />
      <Toaster position="bottom-right" />
    </>
  )
}

export default SaveOption
