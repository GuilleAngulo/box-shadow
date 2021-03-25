import PresetsTool from 'components/PresetsTool'
import ShapeTool from 'components/ShapeTool'
import ThemeSwitch from 'components/ThemeSwitch'
import { useBoxShadow } from 'hooks/use-box-shadow'
import * as S from './styles'

const TopTools = () => {
  const { theme, toggleTheme } = useBoxShadow()
  return (
    <S.Wrapper>
      <ThemeSwitch
        toggleTheme={toggleTheme!}
        isChecked={theme === 'dark' ? true : false}
      />
      <PresetsTool />
      <ShapeTool />
    </S.Wrapper>
  )
}
export default TopTools
