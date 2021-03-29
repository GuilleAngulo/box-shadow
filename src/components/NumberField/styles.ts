import styled, { css, keyframes, DefaultTheme } from 'styled-components'
import { NumberFieldProps } from '.'

type WrapperProps = Pick<NumberFieldProps, 'disabled'> & {
  hasError?: boolean
} & { isLoading?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.accent};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.accent};
    margin-left: 1rem;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
      border: 0.2rem solid ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.primaryFont};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    padding: 0.2rem 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 3rem;
    text-align: center;

    /** HIDE ARROWS */
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primaryFont};
    cursor: pointer;
  `}
`

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: red;
    }
    ${Label} {
      color: red;
    }
  `,
  loading: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.primary};
      animation: ${glow(theme.colors.primary)} 0.6s ease-in-out infinite
        alternate;
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.accent};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasError, isLoading, disabled }) => css`
    ${hasError && wrapperModifiers.error()}
    ${isLoading && wrapperModifiers.loading(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

const glow = (color: string) => keyframes`
  from {
    box-shadow: 0 0 0px ${color};
  }

  to {
    box-shadow: 0 0 10px 1px ${color};
  }
`
