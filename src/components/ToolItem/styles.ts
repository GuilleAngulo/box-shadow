import { darken } from 'polished'
import styled, { css } from 'styled-components'

export type ItemProps = {
  visibilityHidden?: boolean
}

const itemModifiers = {
  hidden: () => css`
    opacity: 0.8;
    filter: grayscale(70%);
  `
}

export const Item = styled.li<ItemProps>`
  ${({ theme, visibilityHidden }) => css`
    list-style: none;
    position: relative;
    padding: 0.5rem 1.2rem 1rem 1.2rem;
    /* height: fit-content; */
    height: 35rem;
    background-color: ${theme.colors.card};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.accent};
    transition: box-shadow ${theme.transition.default}, filter,
      opacity ${theme.transition.fast};

    ${visibilityHidden && itemModifiers.hidden()};
  `}
`

export const Delete = styled.div`
  ${({ theme }) => css`
    /* position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    margin-top: 0.2rem;
    margin-right: 0.2rem; */
    border-radius: ${theme.border.radius};
    color: ${theme.colors.secondaryFont};

    &:hover {
      background: ${darken(0.1, theme.colors.card)};
      transition: background ${theme.transition.fast};
    }
  `}
`
export const Header = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  gap: 0.4rem;
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
