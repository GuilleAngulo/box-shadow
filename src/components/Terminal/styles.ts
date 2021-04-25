import styled, { css } from 'styled-components'
import { lighten, darken } from 'polished'
import { RGBAProps } from 'types'

export const Wrapper = styled.div`
  position: relative;
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    text-align: left;
    width: 100%;
    max-height: 24rem;
    min-height: 7rem;
    /* word-wrap: break-word; */
    /* overflow-wrap: break-word; */
    overflow-y: auto;
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.small};
    /* white-space: pre-wrap; */
    border: 0.2rem solid ${theme.colors.accent};
    background-color: ${theme.colors.terminalBg} !important;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      background: #666d7a;
      border-radius: 0.12rem;
    }
    ::-webkit-scrollbar-track {
      background: #acb1b8;
      border-radius: 0.12rem;
    }
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
    font-weight: ${theme.font.normal};

    .token.property {
      color: #a382ff !important;
      font-weight: ${theme.font.bold};
      display: inline-block !important;
    }

    .token.color.function {
      color: #ff9ade !important;
    }

    .token.number {
      color: ${theme.colors.terminalFont} !important;
    }

    .token.punctuation,
    .token.color.punctuation,
    .token.unit {
      color: #d0b9e3 !important;
    }
  `}
`

export const Token = styled.span`
  /* display: flex; */
`

export const RGBA = styled.span<RGBAProps>`
  ${({ red, green, blue, alpha }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
      border: none;
      background: rgba(${red}, ${green}, ${blue}, ${alpha});
      border-radius: 50%;
    }
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
