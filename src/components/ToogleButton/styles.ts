import { lighten, darken, cssVar } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: block;
    width: 5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    cursor: pointer;
    background: ${theme.accent};
    box-shadow: inset 0 0.04rem 0.6rem ${darken(0.1, theme.accent)},
      inset 0 0.05rem 0.05rem ${darken(0.2, theme.accent)},
      inset 0 -0.05rem 0.05rem ${darken(0.2, theme.accent)};

    &:focus {
      outline-offset: 0.4rem;
      outline: 0.2rem solid var(--color-primary);
      &:not(:focus-visible) {
        outline: none;
      }
    }
  `}
`

export type ThumbProps = {
  isChecked?: boolean
}

const thumbModifiers = {
  isChecked: () => css`
    left: 2.5rem;
  `
}

export const Thumb = styled.div<ThumbProps>`
  ${({ isChecked, theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    transform: scale(0.9);
    border-radius: 50%;
    background: ${theme.background};
    box-shadow: 0 0.02rem 0.07rem rgba(0, 0, 0, 0.5),
      inset 0 0.08rem 0.08rem rgba(255, 255, 255, 0.5),
      inset 0 -0.08rem 0.08rem rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in;

    ${isChecked && thumbModifiers.isChecked()};
  `}
`

export const Checkbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
