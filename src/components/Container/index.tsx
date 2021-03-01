import Editor from 'components/Editor'
import Shadow, { BoxShadowProps } from 'components/Shadow'
import { useState } from 'react'
import * as S from './styles'

export type ContainerProps = {
  boxShadow: string
}

const Container = ({ boxShadow }: BoxShadowProps) => {
  const [code, setCode] = useState(boxShadow)

  return (
    <S.Wrapper>
      <Shadow boxShadow={code} />
      <Editor boxShadow={code} setBoxShadow={setCode} />
    </S.Wrapper>
  )
}

export default Container
