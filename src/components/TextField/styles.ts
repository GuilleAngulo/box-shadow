import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & {
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

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
      border: 0.2rem solid ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.primaryFont};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.small};
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

    &::placeholder {
      color: ${theme.colors.secondaryFont};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
      ${theme.colors.accent} inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
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

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.secondaryFont};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      max-height: 100%;
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};

    &::before {
      content: '\\d7';
      font-size: ${theme.font.sizes.large};
      padding-right: 0.4rem;
      vertical-align: middle;
    }
  `}
`

export const Loading = styled.span`
  ${({ theme }) => css`
    position: relative;
    padding-left: 2rem;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};

    &::before {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      border: 0.2rem solid ${theme.colors.accent};
      border-left-color: ${theme.colors.primary};
      border-radius: 50%;
      width: ${theme.font.sizes.small};
      height: ${theme.font.sizes.small};
      animation: spin 1s linear infinite;
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  loading: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.primary};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.secondaryFont};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasError, isLoading, disabled }) => css`
    ${hasError && wrapperModifiers.error(theme)}
    ${isLoading && wrapperModifiers.loading(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`