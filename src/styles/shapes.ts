import styled, { css } from 'styled-components'

export const Square = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;
    font-size: ${theme.font.sizes.large};
    border-radius: ${theme.border.radius};
  `}
`
