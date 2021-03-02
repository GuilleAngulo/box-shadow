import * as S from './styles'
import { stringify, prettify } from 'utils/helpers'
import { ShadowProps } from 'components/Shadow'

export type EditorProps = {
  boxShadow: ShadowProps[]
}

const Editor = ({ boxShadow }: EditorProps) => {
  return (
    <S.Wrapper>
      <S.Pre>
        <S.Code>{prettify(stringify(boxShadow))}</S.Code>
      </S.Pre>
    </S.Wrapper>
  )
}

export default Editor
