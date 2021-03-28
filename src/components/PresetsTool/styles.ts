import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    button {
      outline: none;
      svg {
        fill: ${theme.colors.primary};
        width: 2.8rem;
      }
    }
  `}
`

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  `}
`
export const Item = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 15rem;
    height: 15rem;
    border-radius: ${theme.border.radius};
    transition: box-shadow ${theme.transition.fast};

    &:hover {
      box-shadow: 0 0 0 0.4rem ${theme.colors.primary};
    }
  `}
`
