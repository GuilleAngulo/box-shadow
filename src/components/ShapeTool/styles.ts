import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.2rem;
`

export type ButtonProps = {
  selected?: boolean
}

const buttonModifiers = {
  selected: () => css`
    svg {
      fill: var(--color-primary);
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, selected = false }) => css`
    position: relative;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    svg {
      fill: ${theme.accent};
      width: 3rem;
    }

    ${selected && buttonModifiers['selected']()};
  `}
`
