import styled, { css } from 'styled-components'

export const Visible = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    color: ${theme.colors.secondaryFont};

    &:hover {
      color: ${theme.colors.primaryFont};
      transition: color ${theme.transition.fast};
    }
  `}
`
