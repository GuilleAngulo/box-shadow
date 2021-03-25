import InputColor from 'components/InputColor'
import InputRange from 'components/InputRange'
import { OPACITY_RANGES } from 'utils/shadow'

import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'

export type ColorProps = {
  index?: number
  label?: string
  icon?: React.ReactNode
}

const Color = ({ index = 0, label, icon }: ColorProps) => {
  const { boxShadow = [], setBoxShadowProperty } = useBoxShadow()

  const handleColor = (value: string) => {
    return setBoxShadowProperty(index, 'color', value)
  }

  const handleOpacity = (value: number) => {
    return setBoxShadowProperty(index, 'opacity', value)
  }

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
          initialValue={boxShadow[index].color}
          onInput={handleColor}
        />
        <InputRange
          name="opacity"
          min={OPACITY_RANGES[0]}
          max={OPACITY_RANGES[1]}
          initialValue={Math.round(boxShadow[index].color.alpha * 100)}
          onInput={handleOpacity}
          rangeUnit="%"
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default Color
