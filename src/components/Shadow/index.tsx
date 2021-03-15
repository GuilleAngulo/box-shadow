import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'

export type BoxShadowProps = {
  type?: string
  children?: React.ReactNode
}

const Shadow = ({ children, type = 'square' }: BoxShadowProps) => {
  const { boxShadow = [] } = useBoxShadow()

  const shape = (type: string) => {
    switch (type) {
      case 'square':
      case 'circle':
        return <S.Shape boxShadow={boxShadow} type={type} />

      default:
        return <div></div>
    }
  }

  return <S.Wrapper>{shape(type)}</S.Wrapper>
}
export default Shadow
