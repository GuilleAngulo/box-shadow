import Editor from 'components/Editor'
import Shadow, { BoxShadowProps } from 'components/Shadow'
import Tools from 'components/Tools'
import { useState } from 'react'
import * as S from './styles'

export type ContainerProps = {
  boxShadow: string
}

const Container = ({ boxShadow }: BoxShadowProps) => {
  const [code, setCode] = useState(boxShadow)

  return (
    <S.Wrapper>
      <S.Panel>
        <Shadow boxShadow={code} />
        <Tools boxShadow={code} setBoxShadow={setCode} />
        <Editor boxShadow={code} />
      </S.Panel>
    </S.Wrapper>
  )
}

export default Container
