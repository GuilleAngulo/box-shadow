import { useRef, ElementRef } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from 'hooks/use-auth'

import Button from 'components/Button'
import Dropdown from 'components/Dropdown'

import { Github } from '@styled-icons/boxicons-logos'
import { Logout } from '@styled-icons/material-outlined'

import * as S from './styles'

export type LoginProps = {
  redirect?: string
}

const Login = ({ redirect }: LoginProps) => {
  const { loading, user, signInGithub, signOut } = useAuth()
  const { asPath } = useRouter()

  //By default Login will redirect to the current page if no redirect is passed as prop
  const redirectUrl = `${process.env.NEXT_PUBLIC_API_URL}${redirect ?? asPath}`
  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)

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
          onClick={() => signInGithub(redirectUrl)}
        >
          Log in
        </Button>
      )}
    </S.Wrapper>
  )
}
export default Login
