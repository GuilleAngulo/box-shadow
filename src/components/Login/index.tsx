import { useRef, ElementRef } from 'react'

import { useBoxShadow } from 'hooks/use-box-shadow'
import { useTheme } from 'hooks/use-theme'
import { useAuth } from 'hooks/use-auth'

import Button from 'components/Button'
import Dropdown from 'components/Dropdown'

import toast, { Toaster } from 'react-hot-toast'
import { Github } from '@styled-icons/boxicons-logos'

import * as S from './styles'

import { Logout, Save, FileDownload } from '@styled-icons/material-outlined'

const Login = () => {
  const { boxShadow, shape, loadPreset } = useBoxShadow()
  const { theme } = useTheme()
  const { loading, user, session, signInGithub, signOut } = useAuth()

  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  const load = async () => {
    closeDropdown()

    const res = fetch('/api/boxshadows', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        token: session?.access_token || ''
      }),
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .then(([data]) => loadPreset(data))
      .catch((err) => console.log(err))

    toast.promise(
      res,
      {
        loading: 'Loading...',
        success: () => `Loaded.`,
        error: () => `Oops...something went wrong. Try again.`
      },
      {
        style: {
          minWidth: '150px'
        }
      }
    )
  }

  const save = async () => {
    closeDropdown()

    const res = fetch('/api/boxshadows', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        token: session?.access_token || ''
      }),
      body: JSON.stringify({ boxShadow, theme, shape }),
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))

    toast.promise(
      res,
      {
        loading: 'Saving...',
        success: () => `Saved.`,
        error: () => `Oops...something went wrong. Try again.`
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

              <S.Item role="button" aria-label="Save" onClick={save}>
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
      <Toaster position="bottom-right" />
    </S.Wrapper>
  )
}
export default Login
