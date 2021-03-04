import Switch from 'react-switch'
import * as S from './styles'
import theme from 'styles/theme'

const {
  colors: { primary, lightGray }
} = theme

export type SwitchProps = {
  onChange: () => void
  checked: boolean
}

const SwitchButton = ({ onChange, checked }: SwitchProps) => {
  return (
    <S.Wrapper>
      <Switch
        onChange={onChange}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={lightGray}
        onColor={primary}
        offHandleColor={primary}
        onHandleColor={lightGray}
      />
    </S.Wrapper>
  )
}

export default SwitchButton
