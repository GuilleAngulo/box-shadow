import { FocusEvent, InputHTMLAttributes, useMemo, useState } from 'react'
import { RGBAProps } from 'types'
import rgbHex from 'rgb-hex'

import * as S from './styles'

export type InputRangeProps = {
  onInput?: (property: string, value: string) => void
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
  const initialValueHex = useMemo(() => {
    if (initialValue) {
      const { red, green, blue } = initialValue
      return `#${rgbHex(red, green, blue)}`
    }
    return
  }, [initialValue])

  const [value, setValue] = useState<string | undefined>(initialValueHex)
  const [time, setTime] = useState<NodeJS.Timeout | undefined>(undefined)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    const property = e.currentTarget.name
    setValue(newValue)
    throttleSetValue(newValue, 10, property)
  }

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (value) {
      const property = e.currentTarget.name
      !!onInput && onInput(property, value)
    }
  }

  const throttleSetValue = (
    value: string | undefined,
    delay: number,
    property: string
  ) => {
    if (time) {
      return
    }

    setTime(
      setTimeout(() => {
        if (value) {
          !!onInput && onInput(property, value)
        }
        setTime(undefined)
      }, delay)
    )
  }

  return (
    <S.Wrapper>
      {!!label && <label htmlFor={name}>{label}</label>}
      <S.Input
        type="color"
        onChange={onChange}
        onBlur={onBlur}
        value={initialValueHex}
        disabled={disabled}
        name={name}
        {...(label ? { id: name } : {})}
        {...props}
      />
    </S.Wrapper>
  )
}

export default InputColor
