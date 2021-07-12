import Link from 'next/link'
import Button from 'components/Button'
import Login from 'components/Login'
import PresetsTool from 'components/PresetsTool'
import ToogleButton from 'components/ToogleButton'
import { useTheme } from 'hooks/use-theme'
import { AuthoredPreset } from 'types'

import * as S from './styles'
import { useRouter } from 'next/router'

export type MenuProps = {
  withPresets?: boolean
  featured?: AuthoredPreset
}

const Menu = ({ withPresets = false, featured }: MenuProps) => {
  const { theme, toggleTheme } = useTheme()
  const { asPath } = useRouter()

  const isChecked = theme === 'dark' ? true : false
  const isLinkActive = (href: string) => asPath === href

  return (
    <S.Wrapper>
      <S.Content>
        <ToogleButton onCheck={toggleTheme} isChecked={isChecked} />
        <Link href="/" passHref>
          <Button size="small" minimal isActive={isLinkActive('/')}>
            Home
          </Button>
        </Link>
        <Link href="/gallery" passHref>
          <Button size="small" minimal isActive={isLinkActive('/gallery')}>
            Gallery
          </Button>
        </Link>
        {withPresets && <PresetsTool featured={featured} />}
        <Login />
      </S.Content>
    </S.Wrapper>
  )
}
export default Menu
