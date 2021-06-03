import styled, { css } from 'styled-components'
import { cssVar, lighten, rgba, linearGradient, getContrast } from 'polished'
import { RGBAProps } from 'types'
import media from 'styled-media-query'

const terminalBg = cssVar('--color-terminal-background', '#0c1420') as string
const primary = cssVar('--color-primary', '#6A8BFF') as string

const gradient = (color: string, direction: string) => css`
  background: ${linearGradient({
    colorStops: [rgba(color, 0), rgba(color, 0.5), rgba(color, 1)],
    toDirection: direction
  })};
`

export const Wrapper = styled.div`
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
    ${gradient(terminalBg, 'to top')};
  }

  &::after {
    content: '';
    bottom: 0.2rem;
    left: 0.2rem;
    right: 0.6rem;
    position: absolute;
    height: 2.2rem;
    pointer-events: none;
    ${gradient(terminalBg, 'to bottom')};
  }

  @media (min-width: 840px) {
    width: 50rem;
    margin: auto;
  }
  ${media.greaterThan('large')`
    width: 56rem;
  `}
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    text-align: left;
    width: 100%;
    max-height: 25rem;
    min-height: 7rem;
    overflow-y: auto;
    border-radius: var(--border-radius);
    padding: 2rem var(--spacings-xsmall);
    border: 0.2rem solid ${theme.accent};
    background-color: var(--color-terminal-background);

    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 1.2rem;
    }
    ::-webkit-scrollbar-thumb {
      background: #666d7a;
      border-radius: 0.12rem;
    }
    ::-webkit-scrollbar-track {
      background: var(--color-terminal-background);
      border-radius: 0.12rem;
    }
  `}
`

export type LineProps = {
  isDragging?: boolean
}

const lineModifiers = {
  isDragging: () => css`
    background: ${lighten(
      0.02,
      cssVar('--color-terminal-background') as string
    )};
  `
}

export const Line = styled.div<LineProps>`
  ${({ isDragging }) => css`
    display: flex;
    justify-content: flex-start;
    background: var(--color-terminal-background);
    border-radius: 0.2rem;

    ${isDragging && lineModifiers.isDragging()};
  `}
`

export const DroppableBlock = styled.div``

export const LineContent = styled.span`
  display: flex;
  align-items: center;
  font-family: var(--font-family-code);
  font-size: var(--font-size-small);
  font-weight: 500;
  color: var(--color-terminal-font);

  margin-bottom: 0.2rem;
  padding: 0.1rem 0;

  .token.property {
    display: inline-block;
    color: ${lighten(0.02, primary)};
    font-weight: 700;
  }

  .token.comment {
    color: #9886a7;
  }

  .token.punctuation,
  .token.color.punctuation,
  .token.unit {
    color: ${lighten(0.1, primary)};
    /* color: #c085f2; */
  }

  .token.number {
    color: var(--color-terminal-font);
  }

  .token.color.function,
  .token.plain {
    color: #ffafcc;
  }
`
const RGBAModifiers = (color?: string) => {
  if (!color) return
  const contrastRatio = getContrast(color, terminalBg)
  return (
    contrastRatio < 3 &&
    css`
      box-shadow: 0 0 0.1rem 0.1rem rgba(197, 194, 194, 1);
    `
  )
}

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
    margin-right: 0.3rem;
    background: ${({ color }) => color};
    ${({ color }) => RGBAModifiers(color)}
  }
`

export const CopyWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.secondaryFont};
    position: absolute;
    top: -2.6rem;
    right: 0.4rem;
    z-index: 2;
    transition: color var(--transition-fast);
    font-family: var(--font-family-code);
    font-size: var(--font-size-small);

    &:hover {
      color: ${theme.primaryFont};
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
    color: ${theme.primaryFont};
    position: absolute;
    top: -2.4rem;
    left: 0;
    padding-left: 0.4rem;
    z-index: 2;
    font-family: var(--font-family-code);
    font-size: var(--font-size-small);
  `}
`

export const LineNo = styled.span`
  width: 2em;
  text-align: left;
  padding-right: 0.6rem;
  user-select: none;
  color: #9886a7;
`
