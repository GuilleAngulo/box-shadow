import styled, { css } from 'styled-components'

export const Wrapper = styled.div``
export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;
    font-weight: var(--font-bold);
    color: ${theme.primaryFont};
    svg {
      width: 2rem;
      margin-right: 0.4rem;
      color: ${theme.secondaryFont};
    }
  `}
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
