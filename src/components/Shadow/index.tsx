import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'
import { Layer } from '@styled-icons/boxicons-regular'
import { ShadowProps } from 'types'

export type BoxShadowProps = {
  initialBoxShadow?: ShadowProps[]
  children?: React.ReactNode
}

const Shadow = ({ children, initialBoxShadow }: BoxShadowProps) => {
  const { boxShadow = [], shape = 'square' } = useBoxShadow()

  return (
    <S.Wrapper>
      <S.ShapeBlock boxShadow={initialBoxShadow || boxShadow} shape={shape}>
        {boxShadow.length ? children : <Layer />}
      </S.ShapeBlock>
    </S.Wrapper>
  )
}
export default Shadow
