import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    margin: ${theme.spacings.small};
  `}
`
