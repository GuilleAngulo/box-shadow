import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputRangeProps = {
  onInput?: (value: number) => void
  label?: string
  initialValue?: number
  min: number
  max: number
  disabled?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

const InputRange = ({
  label,
  name,
  initialValue = 0,
  disabled = false,
  min = 0,
  max = 0,
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
        <input
          type="range"
          min={min}
          max={max}
          onChange={onChange}
          value={value}
          disabled={disabled}
          aria-live="polite"
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </div>
    </S.Wrapper>
  )
}

export default InputRange
