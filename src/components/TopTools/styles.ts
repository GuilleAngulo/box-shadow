import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: absolute;
    width: 55rem;
    top: 0;
    left: 0;
    padding: ${theme.spacings.xsmall};
    z-index: 10;
    background: ${theme.colors.background};
  `}
`
export const Content = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  background: transparent;
`
