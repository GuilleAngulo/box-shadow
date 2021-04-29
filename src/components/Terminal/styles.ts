import styled, { css } from 'styled-components'
import { lighten, darken } from 'polished'
import { RGBAProps } from 'types'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ${media.greaterThan('medium')`
    width: 50rem;
    margin: auto;
  `}
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    text-align: left;
    width: 100%;
    max-height: 22rem;
    min-height: 7rem;
    overflow-y: auto;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
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
      background: #acb1b8;
      border-radius: 0.12rem;
    }

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xsmall};
      padding-top: ${theme.spacings.small};
    `}
  `}
`

export const Line = styled.div`
  display: table-row;
`

export const LineContent = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.code};
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
    color: ${theme.colors.terminalFont};

    .token.property {
      display: inline-block;
    }

    .token.color.function,
    .token.plain {
      font-weight: 700;
      color: #ff9ade;
    }

    .token.number {
      color: ${theme.colors.terminalFont};
    }

    .token.punctuation,
    .token.color.punctuation,
    .token.unit {
      color: #c085f2;
    }

    .token.comment {
      color: #9886a7;
    }
  `}
`

export const RGBA = styled.span<RGBAProps>`
  ${({ red, green, blue, alpha }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    /* &::before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
      background: rgba(${red}, ${green}, ${blue}, ${alpha});
    } */
  `}
`

export const CopyWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${darken(0.2, theme.colors.terminalFont)};
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 0.8rem;
    padding-right: 1rem;
    transition: color ${theme.transition.fast};
    font-family: ${theme.font.code};
    font-size: ${theme.font.sizes.xsmall};

    &:hover {
      color: ${lighten(0.4, theme.colors.terminalFont)};
    }
  `}
`

export const Language = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryFont};
    position: absolute;
    top: -2.4rem;
    left: 0;
    padding-top: 0.8rem;
    padding-left: 1rem;
    font-family: ${theme.font.code};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
