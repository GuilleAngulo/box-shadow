import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'

export type BoxShadowProps = {
  children?: React.ReactNode
}

const Shadow = ({ children }: BoxShadowProps) => {
  const { boxShadow = [], shape } = useBoxShadow()

  return (
    <S.Wrapper>
      {shape && (
        <S.ShapeBlock boxShadow={boxShadow} shape={shape}>
          {children}
        </S.ShapeBlock>
      )}
    </S.Wrapper>
  )
}
export default Shadow
