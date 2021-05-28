import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type ToogleButtonProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const ToogleButton = ({ onCheck, isChecked = false }: ToogleButtonProps) => {
  const handleClick = () => {
    const status = !isChecked

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper onClick={handleClick} tabIndex={1}>
      <S.Thumb isChecked={isChecked}>
        <S.Checkbox type="checkbox" role="switch" aria-checked={isChecked} />
      </S.Thumb>
    </S.Wrapper>
  )
}

export default ToogleButton
