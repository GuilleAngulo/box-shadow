import styled, { css } from 'styled-components'

export const Visible = styled.div`
  ${({ theme }) => css`
    border-radius: var(--border-radius);
    color: ${theme.secondaryFont};

    &:hover {
      color: ${theme.primaryFont};
      transition: color var(--transition-fast);
    }
  `}
`
