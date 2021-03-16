import styled, { css } from 'styled-components'

export const Item = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 0.8rem 1rem;
    height: 32rem;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.border};
  `}
`

export const Delete = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.25rem;
    margin-top: -0.3rem;
    cursor: pointer;

    &:hover {
      svg {
        transition: fill ${theme.transition.fast};
        fill: red;
      }
    }
  `}
`
