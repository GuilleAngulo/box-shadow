import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type NumberFieldProps = {
  onInputChange?: (property: string, value: number) => void
  label?: string
  initialValue?: number
  min?: number
  max?: number
  disabled?: boolean
  error?: string
  loading?: string
} & InputHTMLAttributes<HTMLInputElement>

const NumberField = ({
  label,
  name,
  initialValue = 0,
  min = 0,
  max = 0,
  disabled = false,
  error,
  loading,
  onInputChange,
  ...props
}: NumberFieldProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.currentTarget.value
    const name = e.currentTarget.name

    let newValue = Number(data)

    if (newValue > max || newValue < min) {
      newValue = newValue > max ? max : min
    }

    !!onInputChange && onInputChange(name, newValue)
  }

  /**
   * In case of 'onInput' being an API call, use a debounce method to wait
   * instead of calling on every onChange event
   */
  return (
    <S.Wrapper disabled={disabled} hasError={!!error} isLoading={!!loading}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="number"
          min={min}
          max={max}
          onChange={handleInput}
          value={String(initialValue)}
          disabled={disabled}
          aria-busy={!!loading}
          aria-invalid={!!error}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default NumberField
