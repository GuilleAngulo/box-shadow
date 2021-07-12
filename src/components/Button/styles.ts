import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { cssVar, darken } from 'polished'
import { Warning } from '@styled-icons/material-outlined'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal' | 'variant' | 'isActive' | 'error'
>

const wrapperModifiers = {
  small: () => css`
    height: 3rem;
    font-size: var(--font-size-medium);
    padding: 0 var(--spacings-xxsmall);
  `,
  medium: () => css`
    height: 4rem;
    font-size: var(--font-size-large);
    padding: var(--spacings-xxsmall) var(--spacings-small);
  `,
  large: () => css`
    height: 5rem;
    font-size: var(--font-size-large);
    padding: var(--spacings-xxsmall) var(--spacings-xlarge);
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 2rem;

      & + span {
        margin-left: var(--spacings-xxsmall);
      }
    }

    ${media.lessThan('small')`
      svg {
        display:none;
      }
    `}
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.primaryFont};

    &:hover {
      color: ${theme.secondaryFont};
      transition: color var(--transition-fast);
    }
  `,
  variant: (theme: DefaultTheme) => css`
    background: ${theme.variant};
    color: ${theme.primaryFont};
    transition: color var(--transition-fast);

    &:hover {
      color: ${theme.primaryFont};
      background: ${darken(0.02, theme.variant)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: progress;
    }
  `,
  error: () => css`
    outline: solid 0.2rem var(--color-light-red);
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    minimal,
    variant,
    disabled,
    isActive,
    error
  }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--color-primary);
    color: white;
    border: 0;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: var(--spacings-xxsmall);
    text-decoration: none;
    transition: background var(--transition-fast);
    font-weight: ${isActive ? 'var(--font-bold)' : 'var(--font-normal)'};
    white-space: nowrap;

    &:hover {
      background: ${minimal
        ? 'none'
        : darken(0.1, cssVar('--color-primary', '#6A8BFF') as string)};
    }

    &:focus {
      outline-offset: 0.2rem;
      outline: 0.2rem solid var(--color-primary);
      &:not(:focus-visible) {
        outline: none;
      }
    }

    ${!!size && wrapperModifiers[size]()};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${!!variant && wrapperModifiers.variant(theme)};
    ${!!error && wrapperModifiers.error()};
    ${disabled && wrapperModifiers.disabled()};
  `}
`

export const Error = styled(Warning)`
  position: absolute;
  bottom: -0.8rem;
  right: -0.8rem;
  width: 2rem;
  height: 2rem;
  fill: var(--color-light-red);
`
