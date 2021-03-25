import styled, { css } from 'styled-components'
import { lighten, darken } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow-x: auto;
    background-color: ${theme.colors.terminalBg};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    border: 0.2rem solid ${theme.colors.accent};
  `}
`

export const Code = styled.code`
  ${({ theme }) => css`
    font-family: monospace;
    font-weight: bold;
    padding: 0 0.4rem;
    margin: 0 0.2rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    font-family: monospace;
    color: ${theme.colors.terminalFont};
    background-color: transparent;
  `}
`

export const CopyWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${darken(0.2, theme.colors.terminalFont)};
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.8rem;
    transition: color ${theme.transition.fast};

    &:hover {
      color: ${lighten(0.4, theme.colors.terminalFont)};
    }
  `}
`
