import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Likes = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    color: ${theme.colors.primaryFont};
    font-size: ${theme.font.sizes.small};

    svg {
      width: 2rem;
      transition: transform ${theme.transition.fast};

      &:hover {
        transform: scale(1.2);
      }
    }
  `}
`

export const ButtonContent = styled.div`
  width: 8rem;
`
