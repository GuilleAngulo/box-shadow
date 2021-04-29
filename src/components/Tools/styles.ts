import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      padding: ${theme.spacings.xsmall} 0;

      ::-webkit-scrollbar {
        width: 1.2rem;
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.accent};
        border-radius: 0.4rem;
      }
      ::-webkit-scrollbar-track {
        background: ${darken(0.05, theme.colors.background)};
        border-radius: 0.4rem;
      }
    `}
  `}
`
export const Color = styled.div``

export const ToolsWrapper = styled.ul`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-row-gap: 2.4rem;
    width: 100%;
    /* max-width: 47rem; */
    /* padding: 0 ${theme.spacings.small}; */
    /* margin: auto;
    margin-top: 2rem; */
    list-style: none;
    ${media.greaterThan('medium')`
      grid-template-columns: 26rem;
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(2, 26rem);
      grid-column-gap: 2.2rem;
    `}
    ${media.greaterThan('huge')`
      grid-template-columns: repeat(3, 26rem);
      grid-row-gap: 1.4rem;
    `}
  `}
`
export const Add = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    height: 35rem;
    border-radius: ${theme.border.radius};
    border: 0.2rem dashed ${theme.colors.tertiaryFont};
    cursor: pointer;

    svg {
      fill: ${theme.colors.tertiaryFont};
      transition: all ${theme.transition.default};
    }
    &:hover {
      svg {
        fill: ${theme.colors.secondaryFont};
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
    background-color: ${theme.colors.card};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.accent};
    transition: box-shadow ${theme.transition.default};
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
    border-radius: ${theme.border.radius};
    color: ${theme.colors.secondaryFont};

    &:hover {
      background: ${darken(0.1, theme.colors.card)};
      transition: background ${theme.transition.fast};
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
    color: ${theme.colors.secondaryFont};
  `}
`
