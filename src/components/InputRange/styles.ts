import styled, { css } from 'styled-components'
import { cssVar, lighten, transparentize } from 'polished'

const primary = cssVar('--color-primary', '#6A8BFF') as string

export const Wrapper = styled.div`
  width: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;
    color: ${theme.primaryFont};
    font-size: var(--font-size-medium);
    font-weight: var(--font-bold);
    user-select: none;
    svg {
      width: 2rem;
      margin-right: 0.6rem;
      color: ${theme.secondaryFont};
    }
  `}
`

export type InputProps = {
  isVertical?: boolean
  orient?: string
}

const InputModifiers = {
  vertical: () => css`
    writing-mode: bt-lr;
    /*-webkit-appearance: slider-vertical; */
    transform: rotate(270deg);
    &::-webkit-slider-thumb {
      cursor: ns-resize;
    }
    &::-moz-range-thumb {
      cursor: ns-resize;
    }
    &::-ms-thumb {
      cursor: ns-resize;
    }
  `
}

export const Input = styled.input<InputProps>`
  ${({ theme, isVertical }) => css`
    -webkit-appearance: none;
    width: 100%;
    background: transparent;

    /** THUMB */
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 2.6rem;
      width: 1.2rem;
      border-radius: 0.6rem;
      border: none;
      background: var(--color-primary);
      cursor: ew-resize;
      margin-top: -1rem;
    }

    &:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0.2rem 0.3rem ${lighten(0.2, primary)};
    }
    &::-moz-range-thumb {
      -webkit-appearance: none;
      height: 2.6rem;
      width: 1.2rem;
      border-radius: 0.6rem;
      border: none;
      background: var(--color-primary);
      cursor: ew-resize;
    }
    &:focus::-moz-range-thumb {
      box-shadow: 0 0 0.2rem 0.3rem ${lighten(0.2, primary)};
    }
    &::-ms-thumb {
      -webkit-appearance: none;
      height: 2.6rem;
      width: 1.2rem;
      border-radius: 0.6rem;
      border: none;
      background: var(--color-primary);
      cursor: ew-resize;
    }
    &:focus::-ms-thumb {
      box-shadow: 0 0 0.2rem 0.3rem ${lighten(0.2, primary)};
    }

    &:focus {
      outline: none;
    }

    /** TRACK */
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.accent};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-webkit-slider-runnable-track {
      border: 0.05rem solid ${transparentize(0.5, theme.tertiaryFont)}};
    }

    &::-moz-range-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.accent};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-moz-range-track {
      border: 0.05rem solid ${transparentize(0.5, theme.tertiaryFont)}};
    }

    &::-ms-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.accent};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-ms-track {
      border: 0.05rem solid ${transparentize(0.5, theme.tertiaryFont)}};
    }

    ${isVertical && InputModifiers.vertical()}
  `}
`
export const Ranges = styled.div`
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`

export const RangeUnit = styled.span`
  ${({ theme }) => css`
    color: ${theme.secondaryFont};
    font-size: var(--font-size-xxsmall);
    margin-bottom: 0.1rem;
    user-select: none;
  `}
`

export const RangeWrapper = styled.div`
  width: 100%;
`

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
