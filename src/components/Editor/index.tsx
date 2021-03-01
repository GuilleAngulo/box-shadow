import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'
import { stringify } from 'utils/helpers'
import { ShadowProps } from 'components/Shadow'

export type EditorProps = {
  boxShadow: ShadowProps[]
  setBoxShadow: Dispatch<SetStateAction<ShadowProps[]>>
}

const Editor = ({ boxShadow }: EditorProps) => {
  return (
    <S.Wrapper>
      <S.Pre>
        <S.Code>{stringify(boxShadow)}</S.Code>
      </S.Pre>
    </S.Wrapper>
  )
}

export default Editor
