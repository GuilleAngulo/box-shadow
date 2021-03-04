import styled, { css, DefaultTheme } from 'styled-components'
import { Shape, ShadowProps } from '.'
import { stringify } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    border-radius: ${theme.border.radius};
  `}
`

export type SimpleProps = {
  boxShadow: ShadowProps[]
  shape?: Shape
}

const shapeModifiers = {
  square: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius};
  `,
  circle: () => css`
    border-radius: 100%;
  `
}

export const Simple = styled.div.attrs<SimpleProps>((props) => ({
  style: {
    boxShadow: stringify(props.boxShadow, false)
  }
}))<SimpleProps>`
  ${({ theme, shape }) => css`
    width: 24rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.huge};

    ${!!shape && shapeModifiers[shape](theme)};
  `}
`
