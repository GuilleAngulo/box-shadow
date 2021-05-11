import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Item } from 'components/CollectionItem/styles'

export const Wrapper = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    /* margin-bottom: ${theme.spacings.large}; */
  `}
`

export const Info = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondaryFont};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-items: center;
    overflow-y: auto;
    padding: 0 2rem 0.2rem 0.4rem;
    margin-bottom: 1rem;

    ::-webkit-scrollbar {
      width: 1rem;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.accent};
      border-radius: 0.4rem;
    }
    ::-webkit-scrollbar-track {
      background: ${darken(0.02, theme.colors.card)};
      border-radius: 0.4rem;
    }

    .item-exit-active {
      opacity: 0;
      transition: opacity 700ms ease-out;
    }

    ${media.greaterThan('small')`
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    `}

    ${media.greaterThan('medium')`
      height: 52rem;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 6rem;
      grid-row-gap: 2rem;
    `}
  `}
`

export const Skeleton = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.accent};
    background-image: linear-gradient(
      to right,
      ${theme.colors.accent} 0%,
      ${theme.colors.card} 20%,
      ${theme.colors.accent} 40%,
      ${theme.colors.accent} 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0%;
      }

      100% {
        background-position: 40rem 0%;
      }
    }
  `}
`

export const SkeletonItem = styled(Item)``

export const SkeletonImage = styled(Skeleton)`
  ${({ theme }) => css`
    height: 17rem;
    width: 17rem;
    border-radius: ${theme.border.radius};
  `}
`

export const SkeletonTitle = styled(Skeleton)`
  ${({ theme }) => css`
    height: 1.92rem;
    width: 100%;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const SkeletonControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.spacings.xsmall};
    width: 100%;
    height: 3rem;
  `}
`

export const SkeletonButton = styled(Skeleton)`
  ${({ theme }) => css`
    width: 7rem;
    border-radius: ${theme.border.radius};
  `}
`
