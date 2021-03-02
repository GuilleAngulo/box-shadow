import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    display: flex;
    width: 60rem;
    max-width: 60rem;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow-x: auto;
    background-color: ${theme.colors.black};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
  `}
`

export const Code = styled.code`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-family: monospace;
    font-weight: bold;
    padding: 0 0.4rem;
    margin: 0 0.2rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    font-family: monospace;
    color: ${theme.colors.white};
    background-color: transparent;
  `}
`
