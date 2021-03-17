import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
`
export const Item = styled.div`
  margin: 0 1rem;
`
export const Color = styled.div``

export const ToolsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
    grid-column-gap: 2.2rem;
    grid-row-gap: 1.4rem;
    padding: 0 ${theme.spacings.small};
    margin: auto;
    margin-top: 4rem;
    ${media.lessThan('small')`
      grid-template-columns: 1fr;
      width: 100%;
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(3, minmax(20rem, 1fr));
    `}
  `}
`
export const Add = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    height: auto;
    min-height: 32rem;
    border-radius: ${theme.border.radius};
    border: 2px dashed ${theme.colors.border};
    cursor: pointer;

    svg {
      fill: ${theme.colors.border};
    }
  `}
`
