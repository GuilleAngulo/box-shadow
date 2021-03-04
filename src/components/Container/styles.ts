import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.grid.gutter};
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2rem;
  `}
`

export const Panel = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.grid.gutter};
    margin-bottom: 8rem;
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-around;
    `}
  `}
`
