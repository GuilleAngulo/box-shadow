import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import media from 'styled-media-query'
import { opacify } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 46rem;
    grid-template-columns: minmax(26rem, 1fr);
    gap: 4rem;
    padding: 0 ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, minmax(26rem, 1fr));
      padding: 0 ${theme.spacings.xlarge};
    `}

    ${media.greaterThan('large')`
      grid-template-columns: repeat(4, minmax(26rem, 1fr));
      grid-template-rows: 46rem;
    `}
  `}
`
export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 26rem;
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

export type ImageProps = {
  featured?: boolean
}

export const Image = styled.div<ImageProps>`
  ${({ theme, featured }) => css`
    position: relative;
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.variant};
  `}
`

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

export const Author = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  text-decoration: none;
`

export const AuthorPhoto = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`

export const AuthorName = styled.div`
  ${({ theme }) => css`
    align-self: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiaryFont};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    span {
      color: ${theme.colors.primaryFont};
      font-weight: ${theme.font.normal};
    }
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    max-width: 26rem;
    font-size: 2.2rem;
    font-weight: ${theme.font.bold};
    word-wrap: break-word;
    margin-bottom: ${theme.spacings.xxsmall};
    overflow-wrap: break-word;
  `}
`

export const Date = styled.time`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.tertiaryFont};

    svg {
      width: 1.5rem;
    }
  `}
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FeaturedIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -0.2rem;
    width: 4rem;
    border-radius: 50%;
    color: ${theme.colors.accent};

    svg {
      width: 4rem;
      height: 4rem;
    }

    animation: ${glow(theme.colors.accent)} 1s ease-out infinite normal;
  `}
`

const glow = (color: string) => keyframes`
0% {
    box-shadow: 0 0 0 0 ${opacify(0.4, color)};
  }
  80%, 100% {
    box-shadow: 0 0 0 1.2rem rgba(0, 0, 0, 0)};
  }
`

export const Link = styled.a`
  text-decoration: none;
`
