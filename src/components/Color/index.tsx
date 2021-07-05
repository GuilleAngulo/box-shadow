import InputColor from 'components/InputColor'
import InputRange from 'components/InputRange'
import { OPACITY_RANGES } from 'utils/shadow'

import { RGBAProps } from 'types'
import * as S from './styles'

export type ColorProps = {
  index?: number
  label?: string
  icon?: React.ReactNode
  initialColor?: RGBAProps
  initialOpacity?: number
  handleOpacity: (property: string, value: number) => void
  handleColor: (property: string, value: string) => void
}

const Color = ({
  label,
  icon,
  initialColor,
  initialOpacity = 0,
  handleOpacity,
  handleColor
}: ColorProps) => {
  return (
    <S.Wrapper>
      {!!label && (
        <S.Label>
          {!!icon && icon}
          {label}
        </S.Label>
      )}
      <S.InputWrapper>
        <InputColor
          name="color"
          initialValue={initialColor}
          onInput={(property: string, value: string) => {
            handleColor(property, value)
          }}
        />
        <InputRange
          name="opacity"
          min={OPACITY_RANGES[0]}
          max={OPACITY_RANGES[1]}
          initialValue={initialOpacity}
          onInput={(property: string, value: number) => {
            handleOpacity(property, value)
          }}
          rangeUnit="%"
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default Color
