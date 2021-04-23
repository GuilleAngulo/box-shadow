import Link from 'next/link'
import Button from 'components/Button'
import Login from 'components/Login'
import PresetsTool from 'components/PresetsTool'
import ToogleButton from 'components/ToogleButton'
import { useTheme } from 'hooks/use-theme'
import { AuthoredPreset } from 'types'

import * as S from './styles'

export type TopToolsProps = {
  featured?: AuthoredPreset
}

const TopTools = ({ featured }: TopToolsProps) => {
  const { theme, toggleTheme } = useTheme()
  const isChecked = theme === 'dark' ? true : false

  return (
    <S.Wrapper>
      <S.Content>
        <ToogleButton onCheck={toggleTheme} isChecked={isChecked} />
        <PresetsTool featured={featured} />
        <Link href="/gallery" passHref>
          <Button size="small" minimal>
            Gallery
          </Button>
        </Link>
        <Login />
      </S.Content>
    </S.Wrapper>
  )
}
export default TopTools
