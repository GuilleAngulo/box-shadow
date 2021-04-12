import styled, { css, keyframes } from 'styled-components'
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
  justify-content: flex-start;
  align-items: center;
`

const glow = (color: string) => keyframes`
  from {
    box-shadow: 0 0 0.2rem ${color};
  }

  to {
    box-shadow: 0 0 0.8rem 0.6rem ${color};
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 0.4rem;

  label {
    font-size: 2.2rem;
  }
`

export const FeaturedItem = styled(Item)``

export const Image = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    transition: box-shadow ${theme.transition.fast};

    &:hover {
      box-shadow: 0 0 0 0.4rem ${theme.colors.primary};
    }
  `}
`

export const FeaturedImage = styled(Image)`
  ${({ theme }) => css`
    box-shadow: none;
    animation: ${glow(theme.colors.glow)} 0.8s ease-in-out infinite alternate;
  `}
`

export const Author = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-item: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primaryFont};
  `}
`

export const AuthorPhoto = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
`

export const FeaturedTitle = styled.span`
  ${({ theme }) => css`
    font-size: 2.2rem;
  `}
`
