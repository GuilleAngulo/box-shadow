import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Content = styled.div`
  margin-bottom: var(--spacings-large);
`

export const Info = styled.p`
  ${({ theme }) => css`
    font-size: var(--font-size-medium);
    color: ${theme.secondaryFont};
    margin-bottom: var(--spacings-small);
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
    font-size: var(--font-size-xsmall);
    font-style: italic;
    color: ${theme.secondaryFont};
  `}
`
export const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  max-width: 30rem;
  font-size: var(--font-size-small);
  font-weight: var(--font-bold);
  border-radius: 0.2rem;
  padding: 0 0.4rem;
  color: var(--color-light-red);
  margin-bottom: 0.2rem;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    flex-shrink: 0;
  }
`
