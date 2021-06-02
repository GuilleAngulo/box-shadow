import styled, { css } from 'styled-components'
import { ShadowProps, Shape } from 'types'
import { stringify } from 'utils/helpers'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
`

export type ShapeProps = {
  boxShadow: ShadowProps[]
  shape: Shape
}

export const shapeModifiers = {
  square: () => css`
    border-radius: none;
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
    width: var(--shadow-size-large);
    height: var(--shadow-size-large);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-radius var(--transition-default);
    background: ${boxShadow.length ? 'none' : theme.shadowBg};

    > svg {
      fill: ${theme.background};
      width: 6rem;
      height: 6rem;
    }

    ${!!shape && shapeModifiers[shape]()};
  `}
`
