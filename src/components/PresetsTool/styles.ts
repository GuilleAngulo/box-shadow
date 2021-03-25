import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    button {
      svg {
        fill: ${theme.colors.primary};
        width: 3rem;
      }
    }
  `}
`

export const ItemsWrapper = styled.div`
  display: grid;
`
export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
