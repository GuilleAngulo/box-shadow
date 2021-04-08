import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Item = styled.li`
  ${({ theme }) => css`
    list-style: none;
    position: relative;
    padding: 0.5rem 1.2rem 1rem 1.2rem;
    height: fit-content;
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
