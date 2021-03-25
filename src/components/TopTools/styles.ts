import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    margin: ${theme.spacings.xsmall};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `}
`
