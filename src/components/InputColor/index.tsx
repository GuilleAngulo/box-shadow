import { InputHTMLAttributes, useMemo } from 'react'
import { RGBAProps } from 'types'
import rgbHex from 'rgb-hex'

import * as S from './styles'

export type InputRangeProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: RGBAProps
  disabled?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

const InputColor = ({
  label,
  name,
  initialValue,
  disabled = false,
  onInput,
  ...props
}: InputRangeProps) => {
  const value = useMemo(() => {
    if (initialValue) {
      const { red, green, blue } = initialValue
      return `#${rgbHex(red, green, blue)}`
    }
    return
  }, [initialValue])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <label htmlFor={name}>{label}</label>}
      <S.Input
        type="color"
        onChange={onChange}
        value={value}
        disabled={disabled}
        name={name}
        {...(label ? { id: name } : {})}
        {...props}
      />
    </S.Wrapper>
  )
}

export default InputColor
