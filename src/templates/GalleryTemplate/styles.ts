import styled, { css } from 'styled-components'

export const Menu = styled.div`
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

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 100vh;
    padding-top: 8rem;
    padding-bottom: ${theme.spacings.large};
  `}
`
