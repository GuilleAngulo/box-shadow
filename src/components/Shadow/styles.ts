import { darken } from 'polished'
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

export const shapeModifiers = {
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
  ${({ theme, shape, boxShadow }) => css`
    width: ${theme.shadow.sizes.large};
    height: ${theme.shadow.sizes.large};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-radius ${theme.transition.default};
    background: ${boxShadow.length ? 'none' : theme.colors.card};

    > svg {
      fill: ${theme.colors.background};
      width: 6rem;
      height: 6rem;
    }

    ${!!shape && shapeModifiers[shape](theme)};
  `}
`
