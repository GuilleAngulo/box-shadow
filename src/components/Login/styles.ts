import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Logged = styled.div`
  display: flex;
  align-items: center;
`

export const UserImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`

export const Username = styled.span`
  padding: 0 var(--spacings-xxsmall);
  ${media.lessThan('small')`
      display: none;
  `}
`

export const Panel = styled.ul`
  width: 18rem;
  list-style: none;
`

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    color: ${theme.secondaryFont};
    padding: var(--spacings-xsmall) var(--spacings-small);

    &:hover {
      color: ${theme.primaryFont};
      background: ${darken(0.05, theme.card)};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
