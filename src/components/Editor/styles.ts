import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-column: auto / span 2;
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 62rem;
    max-width: 62rem;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow-x: auto;
    background-color: ${theme.colors.black};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.large} ${theme.spacings.small};
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    border: 0.2rem solid ${theme.colors.white};
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

export const CopyWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.2rem;
  `}
`
