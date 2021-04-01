import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
export const Item = styled.div``
export const Color = styled.div``

export const ToolsWrapper = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
    grid-column-gap: 2.2rem;
    grid-row-gap: 1.4rem;
    padding: 0 ${theme.spacings.small};
    margin: auto;
    margin-top: 2.4rem;
    list-style: none;
    ${media.lessThan('small')`
      grid-template-columns: 1fr;
      width: 100%;
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(3, minmax(20rem, 1fr));
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
    min-height: 32rem;
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
