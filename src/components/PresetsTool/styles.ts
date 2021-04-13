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
    gap: 6rem;
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

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 18rem;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.8rem;

    label {
      font-size: 2.2rem;
      font-weight: ${theme.font.bold};
    }
  `}
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
    position: relative;
    box-shadow: 0 0 2rem 0.4rem ${theme.colors.glow};
    transition: box-shadow ${theme.transition.fast};
    &:hover {
      box-shadow: 0 0 2rem 0.8rem ${theme.colors.glow};
    }
  `}
`

export const Likes = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    padding: 0.8rem;
    color: ${theme.colors.tertiaryFont};
    font-size: ${theme.font.sizes.xsmall};

    svg {
      width: 1.8rem;
    }
  `}
`

export const Author = styled.a`
  ${({ theme }) => css`
    max-width: 100%;
    display: flex;
    align-item: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primaryFont};
  `}
`

export const AuthorPhoto = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`

export const AuthorName = styled.div`
  ${({ theme }) => css`
    align-self: center;
    color: ${theme.colors.tertiaryFont};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    span {
      color: ${theme.colors.secondaryFont};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const FeaturedTitle = styled.span`
  ${({ theme }) => css`
    max-width: 100%;
    font-size: 2.2rem;
    font-weight: ${theme.font.bold};
    word-wrap: break-word;
    overflow-wrap: break-word;
  `}
`
