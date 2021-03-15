import styled, { css, DefaultTheme } from 'styled-components'
import { ShadowProps } from 'types'
import { stringify } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
  `}
`

export type ShapeProps = {
  boxShadow: ShadowProps[]
  type: 'square' | 'circle'
}

const shapeModifiers = {
  square: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius};
  `,
  circle: () => css`
    border-radius: 100%;
  `
}

export const Shape = styled.div.attrs<ShapeProps>(({ boxShadow }) => ({
  style: {
    boxShadow: stringify(boxShadow, false)
  }
}))<ShapeProps>`
  ${({ theme, type }) => css`
    width: 24rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.huge};

    ${!!type && shapeModifiers[type](theme)};
  `}
`
