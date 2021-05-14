import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    padding: ${theme.spacings.xsmall} 0;
    ${media.greaterThan('small')`
      padding: ${theme.spacings.xsmall};
      z-index: 10;
    `}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    border-radius: ${theme.border.radius};
  `}
`
