import styled, { css } from 'styled-components'

export const Wrapper = styled.div``
export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primaryFont};
    svg {
      width: 2rem;
      margin-right: 0.4rem;
      color: ${theme.colors.secondaryFont};
    }
  `}
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
