import { InputHTMLAttributes } from 'react'
import NumberField from 'components/NumberField'

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
  rangeUnit?: string
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
  rangeUnit = 'px',
  ...props
}: InputRangeProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value)

    !!onInput && onInput(newValue)
  }

  const handleInputChange = (value: number) => {
    !!onInput && onInput(value)
  }

  return (
    <S.Wrapper>
      {!!label && (
        <S.Label htmlFor={name}>
          {!!icon && icon}
          {label}
        </S.Label>
      )}
      <S.FieldWrapper>
        <S.RangeWrapper>
          <S.Ranges>
            <S.RangeUnit>
              {min}
              {rangeUnit}
            </S.RangeUnit>
            <S.RangeUnit>
              {max}
              {rangeUnit}
            </S.RangeUnit>
          </S.Ranges>
          <S.InputWrapper>
            <S.Input
              type="range"
              min={min}
              max={max}
              onChange={handleChange}
              value={initialValue}
              disabled={disabled}
              name={name}
              isVertical={isVertical}
              // orient={isVertical ? 'vertical' : 'horizontal'}
              {...(label ? { id: name } : {})}
              {...props}
            />
          </S.InputWrapper>
        </S.RangeWrapper>
        <NumberField
          min={min}
          max={max}
          onInputChange={(v) => handleInputChange(v)}
          initialValue={initialValue}
        />
      </S.FieldWrapper>
    </S.Wrapper>
  )
}

export default InputRange
