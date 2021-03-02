import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'
import { stringify, prettify } from 'utils/helpers'
import { ShadowProps } from 'components/Shadow'
import InputRange from 'components/InputRange'

export type EditorProps = {
  boxShadow: ShadowProps[]
  setBoxShadow?: Dispatch<SetStateAction<ShadowProps[]>>
}

const Editor = ({ boxShadow, setBoxShadow }: EditorProps) => {
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
      <S.Pre>
        <S.Code>{prettify(stringify(boxShadow))}</S.Code>
      </S.Pre>
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

export default Editor
