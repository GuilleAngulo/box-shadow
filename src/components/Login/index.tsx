import { useRef, ElementRef, useState } from 'react'

import { useBoxShadow } from 'hooks/use-box-shadow'
import { useTheme } from 'hooks/use-theme'
import { useAuth } from 'hooks/use-auth'

import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import SaveDialog from 'components/SaveDialog'
import CollectionDialog from 'components/CollectionDialog'

import toast, { Toaster } from 'react-hot-toast'
import { Github } from '@styled-icons/boxicons-logos'

import * as S from './styles'

import { Logout, Save, Collections } from '@styled-icons/material-outlined'
import { saveBoxShadow } from 'services/boxShadows'

const Login = () => {
  const { boxShadow, shape } = useBoxShadow()
  const { theme } = useTheme()
  const { loading, user, signInGithub, signOut } = useAuth()

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false)

  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)
  const collectionRef = useRef<ElementRef<typeof CollectionDialog>>(null)

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  const loadBoxShadowList = () => {
    if (collectionRef.current) {
      collectionRef.current.loadBoxShadowList()
    }
  }

  const save = async (title: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const boxShadowWithoutId = boxShadow?.map(({ id, ...rest }) => ({
      ...rest
    }))

    const res = saveBoxShadow({
      title,
      slug: title.toLowerCase().split(' ').join('-'),
      box_shadow: JSON.stringify(boxShadowWithoutId),
      theme,
      shape,
      user_id: user?.id ?? ''
    })

    toast.promise(
      res,
      {
        loading: 'Saving...',
        success: () => {
          loadBoxShadowList()
          return `Successfully saved.`
        },
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
              <S.Item
                role="button"
                aria-label="Your designs"
                onClick={() => {
                  closeDropdown()
                  setIsLoadModalOpen(true)
                  return
                }}
              >
                <Collections />
                <span>Collection</span>
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
                <span>Save</span>
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
          disabled={loading}
          loading={loading}
          onClick={() => signInGithub()}
        >
          Log in
        </Button>
      )}
      <SaveDialog
        isOpen={isSaveModalOpen}
        setIsOpen={setIsSaveModalOpen}
        onSave={save}
      />
      <CollectionDialog
        isOpen={isLoadModalOpen}
        setIsOpen={setIsLoadModalOpen}
        ref={collectionRef}
      />
      <Toaster position="bottom-right" />
    </S.Wrapper>
  )
}
export default Login
