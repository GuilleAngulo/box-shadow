import Link from 'next/link'

import { useTheme } from 'hooks/use-theme'

import LoginSimple from 'components/LoginSimple'
import ToogleButton from 'components/ToogleButton'
import Gallery, { GalleryProps } from 'components/Gallery'
import Button from 'components/Button'

import * as S from './styles'
import { useRouter } from 'next/router'

const GalleryTemplate = ({ boxShadowList }: GalleryProps) => {
  const { theme, toggleTheme } = useTheme()
  const { asPath } = useRouter()

  const isChecked = theme === 'dark' ? true : false
  const isLinkActive = (href: string) => asPath === href

  return (
    <S.Wrapper>
      <S.Menu>
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
        <LoginSimple />
      </S.Menu>

      <Gallery boxShadowList={boxShadowList} />
    </S.Wrapper>
  )
}

export default GalleryTemplate
