import { darken } from 'polished'
import styled, { css } from 'styled-components'

export type ItemProps = {
  visibilityHidden?: boolean
}

const itemModifiers = {
  hidden: () => css`
    filter: grayscale(100%) brightness(0.8);
  `
}

export const Item = styled.li<ItemProps>`
  ${({ theme, visibilityHidden }) => css`
    list-style: none;
    position: relative;
    padding: 0.5rem 1.2rem 1rem 1.2rem;
    /* height: 35rem; */
    height: fit-content;
    background-color: ${theme.card};
    border-radius: var(--border-radius);
    border: 1px solid ${theme.accent};
    transition: box-shadow var(--transition-default),
      filter var(--transition-default);

    ${visibilityHidden && itemModifiers.hidden()};
  `}
`

export const Delete = styled.div`
  ${({ theme }) => css`
    border-radius: var(--border-radius);
    color: ${theme.secondaryFont};

    &:hover {
      background: ${darken(0.1, theme.card)};
      transition: background var(--transition-fast);
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
    color: ${theme.secondaryFont};
  `}
`
