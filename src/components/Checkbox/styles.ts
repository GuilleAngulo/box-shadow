import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.tertiaryFont};
    border-radius: 0.2rem;
    transition: all var(--transition-fast);
    transition-property: background, border;
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid white;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: var(--transition-fast);
    }

    &:focus {
      box-shadow: 0 0 0.5rem var(--color-primary);
    }

    &:hover {
      border-color: ${theme.secondaryFont};
      transition: var(--transition-fast);
    }

    &:checked {
      border-color: var(--color-primary);
      background: var(--color-primary);

      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    padding-left: var(--spacings-xxsmall);
    line-height: 1.8rem;
    color: ${theme.primaryFont};
    font-weight: var(--font-bold);
  `}
`
