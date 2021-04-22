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
  ${media.greaterThan('large')`
    grid-template-columns: 60rem 80rem;
  `}
`

export const Display = styled.div`
  ${({ theme }) => css`
    /** Follow scroll move */
    /* position: sticky;
    top: 0;
    height: 100vh; */

    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding: 12rem ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      gap: 12rem;
    `}
  `}
`

export const Config = styled.div`
  position: absolute;
  display: flex;
  top: 18rem;
  left: 1rem;
  flex-direction: column;
  justify-content: center;
  svg {
    width: 3rem;
  }
`
