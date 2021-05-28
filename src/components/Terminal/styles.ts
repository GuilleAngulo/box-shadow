import styled, { css, DefaultTheme } from 'styled-components'
import { lighten, rgba } from 'polished'
import { RGBAProps } from 'types'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    &::before {
      content: '';
      top: 0.2rem;
      left: 0.2rem;
      right: 0.6rem;
      position: absolute;
      height: 2.2rem;
      pointer-events: none;
      z-index: 1;
      background: linear-gradient(
        ${rgba(theme.colors.terminalBg, 1)},
        ${rgba(theme.colors.terminalBg, 0.5)},
        ${rgba(theme.colors.terminalBg, 0)}
      );
    }

    &::after {
      content: '';
      bottom: 0.2rem;
      left: 0.2rem;
      right: 0.6rem;
      position: absolute;
      height: 2.2rem;
      pointer-events: none;
      background: linear-gradient(
        ${rgba(theme.colors.terminalBg, 0)},
        ${rgba(theme.colors.terminalBg, 0.5)},
        ${rgba(theme.colors.terminalBg, 1)}
      );
    }

    @media (min-width: 840px) {
      width: 50rem;
      margin: auto;
    }
    ${media.greaterThan('large')`
    width: 56rem;
    `}
  `}
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    text-align: left;
    width: 100%;
    max-height: 25rem;
    min-height: 7rem;
    overflow-y: auto;
    border-radius: ${theme.border.radius};
    padding: 2rem ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.accent};
    background-color: ${theme.colors.terminalBg};

    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 1.2rem;
    }
    ::-webkit-scrollbar-thumb {
      background: #666d7a;
      border-radius: 0.12rem;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.terminalBg};
      border-radius: 0.12rem;
    }
  `}
`

export type LineProps = {
  isDragging?: boolean
}

const lineModifiers = {
  isDragging: (theme: DefaultTheme) => css`
    background: ${lighten(0.02, theme.colors.terminalBg)};
  `
}

export const Line = styled.div<LineProps>`
  ${({ theme, isDragging }) => css`
    display: flex;
    justify-content: flex-start;
    background: ${theme.colors.terminalBg};
    border-radius: 0.2rem;

    ${isDragging && lineModifiers.isDragging(theme)};
  `}
`

export const DroppableBlock = styled.div``

export const LineContent = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.code};
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
    color: ${theme.colors.terminalFont};

    margin-bottom: 0.2rem;
    padding: 0.1rem 0;

    .token.property {
      display: inline-block;
      color: #f8a691;
    }

    .token.comment {
      color: #9886a7;
    }

    .token.punctuation,
    .token.color.punctuation,
    .token.unit {
      color: #c085f2;
    }

    .token.number {
      color: ${theme.colors.terminalFont};
    }

    .token.color.function,
    .token.plain {
      font-weight: 700;
      color: #ff9ade;
    }
  `}
`

export type Color = {
  color?: string
} & RGBAProps

export const RGBA = styled.span.attrs<RGBAProps>(
  ({ red, green, blue, alpha }) => ({
    color: `rgba(${red}, ${green}, ${blue}, ${alpha})`
  })
)<Color>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 30%;
    border: 0.02rem solid white;
    margin-right: 0.3rem;
    background: ${({ color }) => color};
  }
`

export const CopyWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.secondaryFont};
    position: absolute;
    top: -2.6rem;
    right: 0.4rem;
    z-index: 2;
    transition: color ${theme.transition.fast};
    font-family: ${theme.font.code};
    font-size: ${theme.font.sizes.small};

    &:hover {
      color: ${theme.colors.primaryFont};
    }

    > span {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
  `}
`

export const Language = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryFont};
    position: absolute;
    top: -2.4rem;
    left: 0;
    padding-left: 0.4rem;
    z-index: 2;
    font-family: ${theme.font.code};
    font-size: ${theme.font.sizes.small};
  `}
`

export const LineNo = styled.span`
  width: 2em;
  text-align: left;
  padding-right: 0.6rem;
  user-select: none;
  color: #9886a7;
`
