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
export const Error = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    max-width: 30rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    border-radius: 0.2rem;
    padding: 0 0.4rem;
    color: ${theme.colors.red};
    margin-bottom: 0.2rem;

    svg {
      width: 1.4rem;
      height: 1.4rem;
      flex-shrink: 0;
    }
  `}
`
