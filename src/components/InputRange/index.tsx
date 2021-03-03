import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputRangeProps = {
  onInput?: (value: number) => void
  label?: string
  initialValue?: number
  min: number
  max: number
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
      {!!label && <label htmlFor={name}>{label}</label>}
      <div>
        <S.Input
          type="range"
          min={min}
          max={max}
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          isVertical={isVertical}
          orient={isVertical ? 'vertical' : 'horizontal'}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </div>
    </S.Wrapper>
  )
}

export default InputRange
