import { InputHTMLAttributes } from 'react'

import { Sun, Moon } from '@styled-icons/boxicons-solid'

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
    <S.Wrapper
      onClick={handleClick}
      tabIndex={1}
      aria-label={`Turn on ${isChecked ? 'light' : 'dark'} theme`}
    >
      <S.Thumb isChecked={isChecked}>
        {isChecked ? <Sun size={18} /> : <Moon size={18} />}
        <S.Checkbox type="checkbox" role="switch" aria-checked={isChecked} />
      </S.Thumb>
    </S.Wrapper>
  )
}

export default ToogleButton
