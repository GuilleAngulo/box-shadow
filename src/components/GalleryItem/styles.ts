import styled, { css, keyframes } from 'styled-components'
import { opacify } from 'polished'

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: var(--spacings-small);
    border-radius: var(--border-radius);

    &:hover {
      transition: background var(--transition-default);
      background: ${theme.card};
    }
  `}
`

export const Info = styled.div`
  display: flex;
  width: 26rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.8rem;

  label {
    font-size: 2.2rem;
    font-weight: var(--font-bold);
  }
`

export type ImageProps = {
  featured?: boolean
}

export const Image = styled.div<ImageProps>`
  ${({ theme }) => css`
    position: relative;
    border-radius: var(--border-radius);
    border: 0.2rem solid ${theme.variant};
  `}
`

export const Likes = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    color: ${theme.primaryFont};
    font-size: var(--font-size-small);

    svg {
      width: 2rem;
      transition: transform var(--transition-fast);

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
    font-size: var(--font-size-medium);
    font-weight: var(--font-normal);
    color: ${theme.tertiaryFont};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    span {
      color: ${theme.primaryFont};
      font-weight: var(--font-normal);
    }
  `}
`

export const Title = styled.span`
  max-width: 26rem;
  font-size: 2.2rem;
  font-weight: var(--font-bold);
  word-wrap: break-word;
  padding-top: var(--spacings-xxsmall);
  margin-bottom: 0.2rem;
  overflow-wrap: break-word;
`

export const Date = styled.time`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem;
    font-size: var(--font-size-xsmall);
    color: ${theme.tertiaryFont};

    svg {
      width: 1.5rem;
    }
  `}
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4rem;
`

export const FeaturedIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -0.2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    z-index: 5;
    color: ${theme.accent};

    svg {
      width: 4rem;
      height: 4rem;
    }

    animation: ${glow(theme.accent)} 1s ease-out infinite normal;
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

const shine = keyframes`
  0% {
      opacity: 0;
      transform: scale(0);
  }
  50% {
      opacity: 1;
  }
  100% {
      opacity: 0;
      transform: scale(1);
  }
`

export const Ring = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -0.8rem;
    left: -0.9rem;
    width: 6rem;
    height: 6rem;
    background: ${theme.accent};
    border-radius: 50%;
    will-change: transform, opacity;
    animation: ${shine} 1s ease-out infinite normal;
  `}
`

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`
