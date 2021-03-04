import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputRangeProps = {
  onInput?: (value: number) => void
  label?: string
  initialValue?: number
  min: number
  max: number
  icon?: React.ReactNode
  isVertical?: boolean
  disabled?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

const InputRange = ({
  label,
  name,
  initialValue = 0,
  disabled = false,
  min = 0,
  max = 0,
  isVertical = false,
  icon,
  onInput,
  ...props
}: InputRangeProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(Number(newValue))

    !!onInput && onInput(Number(newValue))
  }

  return (
    <S.Wrapper>
      {!!label && (
        <S.Label htmlFor={name}>
          {label}
          {!!icon && icon}
        </S.Label>
      )}
      <S.InputWrapper>
        <S.Input
          type="range"
          min={min}
          max={max}
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          isVertical={isVertical}
          // orient={isVertical ? 'vertical' : 'horizontal'}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default InputRange