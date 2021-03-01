import * as S from './styles'

export type RGBAProps = {
  red: number
  green: number
  blue: number
  alpha: number
}

export type ShadowProps = {
  horizontalOffset: number
  verticalOffset: number
  blurRadius: number
  spreadRadius: number
  color: RGBAProps
  inset?: boolean
}

export type BoxShadowProps = {
  boxShadow: ShadowProps[]
  children?: React.ReactNode
}

const Shadow = ({ boxShadow, children }: BoxShadowProps) => (
  <S.Wrapper>
    <S.Image boxShadow={boxShadow}>{children}</S.Image>
  </S.Wrapper>
)

export default Shadow
