import styled, { css } from 'styled-components'

export const Square = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24rem;
    height: 24rem;
    font-size: ${theme.font.sizes.huge};
    border-radius: ${theme.border.radius};
  `}
`
