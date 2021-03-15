import Switch from 'react-switch'
import { lightTheme, darkTheme } from 'styles/theme'
import * as S from './styles'

export type SwitchProps = {
  toggleTheme: () => void
  isChecked: boolean
}

const SwitchButton = ({ toggleTheme, isChecked }: SwitchProps) => {
  const {
    colors: { primary: lightPrimary, secondary: lightSecondary }
  } = lightTheme
  const {
    colors: { primary: darkPrimary, secondary: darkSecondary }
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

export default SwitchButton
