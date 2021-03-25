import Switch from 'react-switch'
import { lightTheme, darkTheme } from 'styles/theme'
import * as S from './styles'

export type ThemeSwitchProps = {
  toggleTheme: () => void
  isChecked: boolean
}

const ThemeSwitch = ({ toggleTheme, isChecked }: ThemeSwitchProps) => {
  const {
    colors: { primary: lightPrimary, accent: lightSecondary }
  } = lightTheme
  const {
    colors: { primary: darkPrimary, accent: darkSecondary }
  } = darkTheme

  return (
    <S.Wrapper>
      <Switch
        onChange={() => toggleTheme()}
        checked={isChecked}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={lightSecondary}
        onColor={darkSecondary}
        offHandleColor={lightPrimary}
        onHandleColor={darkPrimary}
      />
    </S.Wrapper>
  )
}

export default ThemeSwitch
