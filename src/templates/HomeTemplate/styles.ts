import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    /* max-width: 160rem; */
    margin: auto;

    &::before {
      content: '';
      top: 0;
      left: 2rem;
      right: 2rem;
      position: absolute;
      height: 2rem;
      z-index: 1;
      pointer-events: none;
      background: linear-gradient(
        ${rgba(theme.colors.background, 1)},
        ${rgba(theme.colors.background, 0.5)},
        ${rgba(theme.colors.background, 0)}
      );
    }

    &::after {
      content: '';
      bottom: 0;
      left: 2rem;
      right: 2rem;
      position: absolute;
      height: 2rem;
      z-index: 1;
      pointer-events: none;
      background: linear-gradient(
        ${rgba(theme.colors.background, 0)},
        ${rgba(theme.colors.background, 0.5)},
        ${rgba(theme.colors.background, 1)}
      );
    }
  `}
`
export const Panel = styled.div`
  padding-bottom: 1.4rem;

  @media (min-width: 840px) {
    display: grid;
    justify-content: center;
    grid-template-columns: 1.4fr 1fr;
    padding: 0;
  }
  ${media.greaterThan('large')`
  grid-template-columns: 1.4fr 2fr;
  `}
  ${media.greaterThan('huge')`
    grid-template-columns: 1.4fr 2fr;
  `}
`

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding-top: 12rem;
  padding-bottom: 2.4rem;

  @media (min-width: 840px) {
    padding-bottom: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`
