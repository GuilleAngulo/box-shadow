import styled, { css } from 'styled-components'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: 1.2rem;

    ${ButtonStyles.Wrapper} {
      svg {
        fill: ${theme.colors.primary};
        width: 3rem;
      }
    }
  `}
`
