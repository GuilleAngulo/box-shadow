import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const Item = styled.li`
  ${({ theme }) => css`
    position: relative;
    padding: 0.5rem 1.2rem 1rem 1.2rem;
    height: fit-content;
    background-color: ${theme.colors.card};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.accent};
    transition: box-shadow ${theme.transition.default};

    &:hover {
      box-shadow: 0 4px 6px -1px ${transparentize(0.6, theme.colors.accent)},
        0 2px 4px -1px ${transparentize(0.8, theme.colors.accent)};
    }
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
    color: ${theme.colors.secondaryFont};

    &:hover {
      svg {
        transition: fill ${theme.transition.fast};
        fill: ${theme.colors.red};
      }
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
