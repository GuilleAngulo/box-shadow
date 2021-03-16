import styled, { css, DefaultTheme } from 'styled-components'
import { ShadowProps, Shape } from 'types'
import { stringify } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
  `}
`

export type ShapeProps = {
  boxShadow: ShadowProps[]
  shape: Shape
}

const shapeModifiers = {
  square: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius};
  `,
  circle: () => css`
    border-radius: 100%;
  `
}

export const ShapeBlock = styled.div.attrs<ShapeProps>(({ boxShadow }) => ({
  style: {
    boxShadow: stringify(boxShadow, false)
  }
}))<ShapeProps>`
  ${({ theme, shape }) => css`
    width: 24rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.huge};
    transition: ${theme.transition.default};

    ${!!shape && shapeModifiers[shape](theme)};
  `}
`
