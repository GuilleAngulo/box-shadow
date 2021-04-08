import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'
import { Layer } from '@styled-icons/boxicons-regular'

export type BoxShadowProps = {
  children?: React.ReactNode
}

const Shadow = ({ children }: BoxShadowProps) => {
  const { boxShadow = [], shape = 'square' } = useBoxShadow()

  return (
    <S.Wrapper>
      <S.ShapeBlock boxShadow={boxShadow} shape={shape}>
        {boxShadow.length ? children : <Layer />}
      </S.ShapeBlock>
    </S.Wrapper>
  )
}
export default Shadow
