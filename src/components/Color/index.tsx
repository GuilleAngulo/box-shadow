import InputColor from 'components/InputColor'
import InputRange from 'components/InputRange'

import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'

export type ColorProps = {
  index?: number
}

const Color = ({ index = 0 }: ColorProps) => {
  const { boxShadow = [], setBoxShadowProperty } = useBoxShadow()

  const handleColor = (value: string) => {
    return setBoxShadowProperty(index, 'color', value)
  }

  const handleOpacity = (value: number) => {
    return setBoxShadowProperty(index, 'opacity', value)
  }

  return (
    <S.Wrapper>
      <InputColor initialValue={boxShadow[index].color} onInput={handleColor} />
      <InputRange
        label="Opacity"
        name="opacity"
        min={0}
        max={100}
        initialValue={boxShadow[index].color.alpha * 100}
        onInput={handleOpacity}
      />
    </S.Wrapper>
  )
}

export default Color
