import { useRef, ElementRef, useState } from 'react'

import { useBoxShadow } from 'hooks/use-box-shadow'
import { useTheme } from 'hooks/use-theme'
import { useAuth } from 'hooks/use-auth'

import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import SaveDialog from 'components/SaveDialog'

import toast, { Toaster } from 'react-hot-toast'
import { Github } from '@styled-icons/boxicons-logos'

import * as S from './styles'

import { Logout, Save, FileDownload } from '@styled-icons/material-outlined'
import { saveBoxShadow, getBoxShadow } from 'services/boxShadows'

const Login = () => {
  const { boxShadow, shape, loadPreset } = useBoxShadow()
  const { theme } = useTheme()
  const { loading, user, session, signInGithub, signOut } = useAuth()

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false)

  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  const load = async () => {
    //closeDropdown()
    const { data, error } = await getBoxShadow(2)
    console.log('data', data)
    console.log('error', error)
  }

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
    <S.Wrapper>
      {user ? (
        <S.Logged>
          <Dropdown
            title={
              <>
                <S.UserImage
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata.full_name}
                />
                <S.Username>
                  {user.user_metadata.full_name.split(' ')[0]}
                </S.Username>
              </>
            }
            arrow={true}
            ref={dropdownRef}
          >
            <S.Panel>
              <S.Item role="button" aria-label="Load" onClick={load}>
                <FileDownload />
                <span>Load design</span>
              </S.Item>

              <S.Item
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
              </S.Item>

              <S.Item role="button" aria-label="Logout" onClick={signOut}>
                <Logout />
                <span>Sign out</span>
              </S.Item>
            </S.Panel>
          </Dropdown>
        </S.Logged>
      ) : (
        <Button
          size="small"
          icon={<Github />}
          loading={loading}
          onClick={signInGithub}
        >
          Log in
        </Button>
      )}
      <SaveDialog
        isOpen={isSaveModalOpen}
        setIsOpen={setIsSaveModalOpen}
        onSave={save}
      />
      <Toaster position="bottom-right" />
    </S.Wrapper>
  )
}
export default Login
