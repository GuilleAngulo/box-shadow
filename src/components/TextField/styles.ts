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
    background: ${theme.accent};
    border-radius: 0.2rem;
    padding: 0 var(--spacings-xxsmall);
    border: 0.2rem solid;
    border-color: ${theme.accent};

    &:focus-within {
      box-shadow: 0 0 0.5rem var(--color-primary);
      border: 0.2rem solid var(--color-primary);
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.primaryFont};
    font-family: var(--font-family);
    font-size: var(--font-size-medium);
    padding: var(--spacings-xxsmall) 0;
    padding-${iconPosition}: var(--spacings-xsmall);
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

    &::placeholder {
      color: ${theme.secondaryFont};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 var(--spacings-small)
      ${theme.accent} inset;
      filter: none;
      &::first-line {
        color: ${theme.primaryFont};
        font-family: var(--font-family);
        font-size: var(--font-size-medium);
      }
    }

  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: var(--font-size-small);
    color: ${theme.primaryFont};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.secondaryFont};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      max-height: 100%;
    }
  `}
`

export const Error = styled.span`
  color: var(--color-light-red);
  font-size: var(--font-size-xsmall);

  &::before {
    content: '\\d7';
    font-size: var(--font-size-large);
    padding-right: 0.4rem;
    vertical-align: middle;
  }
`

export const Loading = styled.span`
  ${({ theme }) => css`
    position: relative;
    padding-left: 2rem;
    color: var(--color-primary);
    font-size:  var(--font-size-xsmall)

    &::before {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      border: 0.2rem solid ${theme.accent};
      border-left-color: var(--color-primary);
      border-radius: 50%;
      width: var(--font-size-small);
      height: var(--font-size-small);
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
  error: () => css`
    ${InputWrapper} {
      border-color: var(--color-light-red);
    }
    ${Icon},
    ${Label} {
      color: var(--color-light-red);
    }
  `,
  loading: () => css`
    ${InputWrapper} {
      border-color: var(--color-primary);
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.secondaryFont};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasError, isLoading, disabled }) => css`
    ${hasError && wrapperModifiers.error()}
    ${isLoading && wrapperModifiers.loading()}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
