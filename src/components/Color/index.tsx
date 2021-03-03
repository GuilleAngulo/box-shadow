import InputColor from 'components/InputColor'
import InputRange from 'components/InputRange'
import { ShadowProps } from 'components/Shadow'
import hexRgb from 'hex-rgb'
import { Dispatch, SetStateAction, useState } from 'react'
import * as S from './styles'

export type ColorProps = {
  boxShadow: ShadowProps[]
  setBoxShadow?: Dispatch<SetStateAction<ShadowProps[]>>
  index?: number
}

const Color = ({ boxShadow, setBoxShadow, index = 0 }: ColorProps) => {
  const [color, setColor] = useState(boxShadow[index].color)

  const handleColor = (value: string) => {
    const newColor = { ...hexRgb(value), alpha: color.alpha }
    setColor(newColor)
    setBoxShadow &&
      setBoxShadow((prev) => {
        const arr = [...prev]
        arr[index].color = newColor
        return arr
      })
  }

  const handleOpacity = (value: number) => {
    const newOpacity = value / 100
    setColor((prev) => ({ ...prev, alpha: newOpacity }))
    setBoxShadow &&
      setBoxShadow((prev) => {
        const arr = [...prev]
        arr[index].color.alpha = newOpacity
        return arr
      })
  }

  return (
    <S.Wrapper>
      {/* <InputColor initialValue={boxShadow[index].color} onInput={handleColor} /> */}
      <InputColor initialValue={color} onInput={handleColor} />
      <InputRange
        label="Opacity"
        name="opacity"
        min={0}
        max={100}
        // initialValue={boxShadow[index].color.alpha * 100}
        initialValue={color.alpha * 100}
        onInput={handleOpacity}
      />
    </S.Wrapper>
  )
}

export default Color
