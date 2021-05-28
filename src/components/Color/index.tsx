import InputColor from 'components/InputColor'
import InputRange from 'components/InputRange'
import { OPACITY_RANGES } from 'utils/shadow'

import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'
import { RGBAProps } from 'types'

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
  index = 0,
  label,
  icon,
  initialColor,
  initialOpacity = 0,
  handleOpacity,
  handleColor
}: ColorProps) => {
  const { boxShadow = [], setBoxShadowProperty } = useBoxShadow()

  // const handleColor = (value: string) => {
  //   return setBoxShadowProperty(index, 'color', value)
  // }

  // const handleOpacity = (value: number) => {
  //   return setBoxShadowProperty(index, 'opacity', value)
  // }

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
          // initialValue={boxShadow[index]?.color || initialColor}
          initialValue={initialColor}
          // onInput={handleColor}
          onInput={(property: string, value: string) => {
            handleColor(property, value)
          }}
        />
        <InputRange
          name="opacity"
          min={OPACITY_RANGES[0]}
          max={OPACITY_RANGES[1]}
          // initialValue={
          //   Math.round(boxShadow[index]?.color?.alpha * 100) || initialOpacity
          // }
          initialValue={initialOpacity}
          // onInput={handleOpacity}
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
