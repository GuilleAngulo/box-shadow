import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    top: 0;
    left: 0;
    padding: ${theme.spacings.xsmall} 0;
    ${media.greaterThan('small')`
      padding: ${theme.spacings.xsmall};
      z-index: 10;
      backdrop-filter: blur(20px);
    `}
  `}
`
export const Content = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
`
