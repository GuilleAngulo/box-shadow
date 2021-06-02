import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Likes = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    height: 4rem;
    color: ${theme.primaryFont};
    font-size: var(--font-size-small);

    svg {
      width: 1.8rem;
      transition: transform var(--transition-fast);

      &:hover {
        transform: scale(1.2);
      }
    }
  `}
`

export const ButtonContent = styled.div`
  width: 8rem;
`
