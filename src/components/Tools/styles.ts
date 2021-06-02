import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: var(--spacings-xsmall) 0;

    @media (min-width: 840px) {
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: scroll;
      scroll-behavior: smooth;

      ::-webkit-scrollbar {
        width: 1.2rem;
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.accent};
        border-radius: 0.4rem;
      }
      ::-webkit-scrollbar-track {
        background: ${darken(0.05, theme.background)};
        border-radius: 0.4rem;
      }
    }
  `}
`

export const ToolsGrid = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-row-gap: 2.4rem;
  width: 100%;
  list-style: none;

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  @media (min-width: 840px) {
    grid-template-columns: 26rem;
  }
  ${media.greaterThan('large')`
      grid-template-columns: repeat(2, 26rem);
      grid-column-gap: 2.2rem;
  `}
  ${media.greaterThan('huge')`
      grid-template-columns: repeat(3, 26rem);
      grid-row-gap: 1.4rem;
  `}
`
export const Add = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    min-height: 34.8rem;
    border-radius: var(--border-radius);
    border: 0.2rem dashed ${theme.tertiaryFont};
    cursor: pointer;

    svg {
      fill: ${theme.tertiaryFont};
      transition: all var(--transition-default);
    }
    &:hover {
      svg {
        fill: ${theme.secondaryFont};
        transform: translateY(-0.5rem);
      }
    }
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    list-style: none;
    position: relative;
    padding: 0.5rem 1.2rem 1rem 1.2rem;
    /* height: fit-content; */
    height: 35rem;
    background-color: ${theme.card};
    border-radius: var(--border-radius);
    border: 1px solid ${theme.accent};
    transition: box-shadow var(--transition-default);
  `}
`

export const Delete = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    border-radius: var(--border-radius);
    color: ${theme.secondaryFont};

    &:hover {
      background: ${darken(0.1, theme.card)};
      transition: background var(--transition-fast);
    }
  `}
`

export const Index = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    right: 0;
    padding-bottom: 0.6rem;
    margin-right: 0.8rem;
    color: ${theme.secondaryFont};
  `}
`
