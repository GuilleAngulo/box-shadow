import { Dispatch, SetStateAction } from 'react'
import { ShadowProps } from 'components/Shadow'
import * as S from './styles'
import InputRange from 'components/InputRange'

export type ToolProps = {
  boxShadow: ShadowProps[]
  setBoxShadow?: Dispatch<SetStateAction<ShadowProps[]>>
}

const Tools = ({ boxShadow, setBoxShadow }: ToolProps) => {
  const onInput = (value: number) => {
    setBoxShadow &&
      setBoxShadow((prev) => {
        const arr = [...prev]
        arr[0].horizontalOffset = value
        return arr
      })
  }
  return (
    <S.Wrapper>
      {boxShadow.map(({ horizontalOffset }, index) => (
        <InputRange
          key={index}
          label="Offset"
          name="offset"
          min={-100}
          max={100}
          initialValue={horizontalOffset}
          onInput={onInput}
        />
      ))}
    </S.Wrapper>
  )
}

export default Tools
