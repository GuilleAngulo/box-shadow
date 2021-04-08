import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primaryFont};
    border: 0.2rem solid ${theme.colors.primary};
    transition: border ${theme.transition.fast};

    &:hover {
      border: 0.2rem solid ${darken(0.2, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: white;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: ${minimal ? 'none' : darken(0.1, theme.colors.primary)};
    }

    &:focus {
      outline-offset: 0.2rem;
      outline: 0.2rem solid ${theme.colors.primary};
      &:not(:focus-visible) {
        outline: none;
      }
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
