import styled, { css, DefaultTheme } from 'styled-components'
import { ShadowProps } from 'types'
import { stringify } from 'utils/helpers'
import { shapeModifiers } from 'components/Shadow/styles'
import { BoxShadowProps } from '.'

import { Error } from '@styled-icons/boxicons-regular'

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
  small: (theme: DefaultTheme) => css`
    padding: ${theme.shadow.padding.small};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: ${theme.shadow.padding.medium};
  `,
  large: (theme: DefaultTheme) => css`
    padding: ${theme.shadow.padding.large};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, mode, size }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    ${!!size && paddingModifiers[size](theme)};
    ${!!mode && backgroundModifiers[mode]()};
  `}
`

export const sizeModifiers = {
  small: (theme: DefaultTheme) => css`
    width: ${theme.shadow.sizes.small};
    height: ${theme.shadow.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    width: ${theme.shadow.sizes.medium};
    height: ${theme.shadow.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    width: ${theme.shadow.sizes.large};
    height: ${theme.shadow.sizes.large};
  `
}

export type ShapeProps = {
  boxShadow: ShadowProps[]
} & Pick<BoxShadowProps, 'size' | 'shape'>

export const ShapeBlock = styled.div<ShapeProps>`
  ${({ theme, boxShadow, shape, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.huge};
    box-shadow: ${stringify(boxShadow, false)};

    ${!!size && sizeModifiers[size](theme)};
    ${!!shape && shapeModifiers[shape](theme)};
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

export const Empty = styled(Error)<Omit<BoxShadowProps, 'initialBoxShadow'>>`
  ${({ theme, shape, size, mode }) => css`
    ${!!mode && colorModifiers[mode]()};
    ${!!size && sizeModifiers[size](theme)};
    ${!!shape && shapeModifiers[shape](theme)};
  `}
`
