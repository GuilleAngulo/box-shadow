import PresetsTool from 'components/PresetsTool'
import ThemeSwitch from 'components/ThemeSwitch'
import { useTheme } from 'hooks/use-theme'
import * as S from './styles'

const TopTools = () => {
  const { theme, toggleTheme } = useTheme()
  const isChecked = theme === 'dark' ? true : false
  return (
    <S.Wrapper>
      <ThemeSwitch toggleTheme={toggleTheme} isChecked={isChecked} />
      <PresetsTool />
    </S.Wrapper>
  )
}
export default TopTools
