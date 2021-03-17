import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const Item = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 1rem 1.2rem;
    padding-top: 1.6rem;
    height: fit-content;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.border};
    transition: box-shadow ${theme.transition.default};

    &:hover {
      box-shadow: 0 4px 6px -1px ${transparentize(0.6, theme.colors.border)},
        0 2px 4px -1px ${transparentize(0.8, theme.colors.border)};
    }
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
