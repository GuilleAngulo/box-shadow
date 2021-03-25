import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'

export type BoxShadowProps = {
  children?: React.ReactNode
}

const Shadow = ({ children }: BoxShadowProps) => {
  const { boxShadow = [], shape } = useBoxShadow()

  // const renderShape = (type: string | undefined) => {
  //   switch (type) {
  //     case 'square':
  //     case 'circle':
  //       return <S.ShapeBlock boxShadow={boxShadow} shape={type} />

  //     default:
  //       return <div></div>
  //   }
  // }

  return (
    <S.Wrapper>
      {shape && <S.ShapeBlock boxShadow={boxShadow} shape={shape} />}
    </S.Wrapper>
  )
}
export default Shadow
