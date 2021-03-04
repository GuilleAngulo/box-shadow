import { useState } from 'react'
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

export type Shape = 'square' | 'circle'

export type BoxShadowProps = {
  boxShadow: ShadowProps[]
  children?: React.ReactNode
  initialShape?: Shape
}

const Shadow = ({
  boxShadow,
  children,
  initialShape = 'square'
}: BoxShadowProps) => {
  const [shape] = useState(initialShape)

  const showImage = (type: Shape) => {
    switch (type) {
      default:
        return (
          <S.Simple shape={type} boxShadow={boxShadow}>
            {children}
          </S.Simple>
        )
    }
  }
  return <S.Wrapper>{showImage(shape)}</S.Wrapper>
}
export default Shadow
