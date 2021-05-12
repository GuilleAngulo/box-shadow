import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Legend = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-style: italic;
    color: ${theme.colors.secondaryFont};
  `}
`
