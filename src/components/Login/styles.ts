import styled, { css } from 'styled-components'
import { darken } from 'polished'

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
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
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
    color: ${theme.colors.secondaryFont};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    &:hover {
      color: ${theme.colors.primaryFont};
      background: ${darken(0.05, theme.colors.card)};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
