import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
`
export const Panel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${media.greaterThan('medium')`
    grid-template-columns: 60rem auto;
  `}
`

export const Display = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding: 8rem ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      gap: 12rem;
    `}
  `}
`
