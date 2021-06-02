import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  button {
    outline: none;
    svg {
      fill: var(--color-primary);
      width: 2.8rem;
    }
  }
`

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${media.greaterThan('small')`
  grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  `}

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
  display: flex;
  width: 18rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.8rem;

  label {
    font-size: 2.2rem;
    font-weight: var(--font-bold);
  }
`

export const FeaturedItem = styled(Item)``

export const Image = styled.div`
  border-radius: var(--border-radius);
  transition: box-shadow var(--transition-fast);

  &:hover {
    box-shadow: 0 0 0 0.4rem var(--color-primary);
  }
`

export const FeaturedImage = styled(Image)`
  ${({ theme }) => css`
    position: relative;
    box-shadow: 0 0 2rem 0.4rem ${theme.glow};
    transition: box-shadow var(--transition-fast);
    &:hover {
      box-shadow: 0 0 2rem 0.8rem ${theme.glow};
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
    padding-top: 0.4rem;
    padding-right: 0.6rem;
    color: ${theme.tertiaryFont};
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-bold);

    svg {
      width: 1.8rem;
    }
  `}
`

export const Author = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    display: flex;
    align-item: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: var(--font-size-small);
    color: ${theme.primaryFont};
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
    color: ${theme.tertiaryFont};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    span {
      color: ${theme.secondaryFont};
      font-weight: var(--font-bold);
    }
  `}
`

export const FeaturedTitle = styled.span`
  max-width: 100%;
  text-align: center;
  font-size: 2.2rem;
  font-weight: var(--font-bold);
  word-wrap: break-word;
  overflow-wrap: break-word;
`
