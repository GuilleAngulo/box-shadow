import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  margin-bottom: 1.2rem;
  margin-top: 0.8rem;
  z-index: 2;
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacings-xxsmall);
    font-size: var(--font-size-xsmall);
    color: ${theme.secondaryFont};

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: var(--spacings-xxsmall);
      }
    }

    a {
      text-decoration: none;
      color: ${theme.secondaryFont};
      font-weight: bold;
    }
  `}
`
