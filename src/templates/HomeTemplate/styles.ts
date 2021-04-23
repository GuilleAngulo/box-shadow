import { darken } from 'polished'
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
    grid-template-columns: 55rem 80rem;
  `}
`

export const Display = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding-top: 12rem;
    padding-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      gap: 8rem;
    `}

    ${media.greaterThan('large')`
      /** Follow scroll move */
      position: sticky;
      top: 0;
      height: 100vh;
      /* overflow-y: auto;

      ::-webkit-scrollbar {
          width: 0.5rem;
      }
      ::-webkit-scrollbar-thumb {
          background: ${theme.colors.accent};
          border-radius: 0.12rem;
      }
      ::-webkit-scrollbar-track {
          background: ${theme.colors.tertiaryFont};
          border-radius: 0.12rem;
      } */
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
