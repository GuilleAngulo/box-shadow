import styled, { css } from 'styled-components'
import { ShadowProps } from 'types'
import { stringify } from 'utils/helpers'
import { shapeModifiers } from 'components/Shadow/styles'
import { BoxShadowProps } from '.'

export type WrapperProps = Pick<BoxShadowProps, 'size' | 'mode'>

const backgroundModifiers = {
  light: () => css`
    background: var(--light-background);
  `,
  dark: () => css`
    background: var(--dark-background);
  `
}

export const paddingModifiers = {
  small: () => css`
    padding: var(--shadow-padding-small);
  `,
  medium: () => css`
    padding: var(--shadow-padding-medium);
  `,
  large: () => css`
    padding: var(--shadow-padding-large);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ mode, size }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    overflow: hidden;

    ${!!size && paddingModifiers[size]()};
    ${!!mode && backgroundModifiers[mode]()};
  `}
`

export const sizeModifiers = {
  small: () => css`
    width: var(--shadow-size-small);
    height: var(--shadow-size-small);
  `,
  medium: () => css`
    width: var(--shadow-size-medium);
    height: var(--shadow-size-medium);
  `,
  large: () => css`
    width: var(--shadow-size-large);
    height: var(--shadow-size-large);
  `
}

export type ShapeProps = {
  boxShadow: ShadowProps[]
} & Pick<BoxShadowProps, 'size' | 'shape'>

export const ShapeBlock = styled.div<ShapeProps>`
  ${({ boxShadow, shape, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-huge);
    box-shadow: ${stringify(boxShadow, false)};

    ${!!size && sizeModifiers[size]()};
    ${!!shape && shapeModifiers[shape]()};
  `}
`

export const colorModifiers = {
  light: () => css`
    color: black;
  `,
  dark: () => css`
    color: white;
  `
}

export const Empty = styled.div<Omit<BoxShadowProps, 'initialBoxShadow'>>`
  ${({ shape, size, mode }) => css`
    font-size: var(--font-size-large);
    font-weight: var(--font-bold);
    text-align: center;

    ${!!mode && colorModifiers[mode]()};
    ${!!size && sizeModifiers[size]()};
    ${!!shape && shapeModifiers[shape]()};
  `}
`
