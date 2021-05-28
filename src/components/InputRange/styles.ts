import styled, { css } from 'styled-components'
import { lighten, transparentize } from 'polished'

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
    color: ${theme.colors.primaryFont};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    user-select: none;
    svg {
      width: 2rem;
      margin-right: 0.6rem;
      color: ${theme.colors.secondaryFont};
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
      background: ${theme.colors.primary};
      cursor: ew-resize;
      margin-top: -1rem;
    }

    &:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0.2rem 0.3rem ${lighten(0.2, theme.colors.primary)};
    }
    &::-moz-range-thumb {
      -webkit-appearance: none;
      height: 2.6rem;
      width: 1.2rem;
      border-radius: 0.6rem;
      border: none;
      background: ${theme.colors.primary};
      cursor: ew-resize;
    }
    &:focus::-moz-range-thumb {
      box-shadow: 0 0 0.2rem 0.3rem ${lighten(0.2, theme.colors.primary)};
    }
    &::-ms-thumb {
      -webkit-appearance: none;
      height: 2.6rem;
      width: 1.2rem;
      border-radius: 0.6rem;
      border: none;
      background: ${theme.colors.primary};
      cursor: ew-resize;
    }
    &:focus::-ms-thumb {
      box-shadow: 0 0 0.2rem 0.3rem ${lighten(0.2, theme.colors.primary)};
    }

    &:focus {
      outline: none;
    }

    /** TRACK */
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.colors.accent};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-webkit-slider-runnable-track {
      border: 0.05rem solid ${transparentize(0.5, theme.colors.tertiaryFont)}};
    }

    &::-moz-range-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.colors.accent};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-moz-range-track {
      border: 0.05rem solid ${transparentize(0.5, theme.colors.tertiaryFont)}};
    }

    &::-ms-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.colors.accent};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-ms-track {
      border: 0.05rem solid ${transparentize(0.5, theme.colors.tertiaryFont)}};
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
    color: ${theme.colors.secondaryFont};
    font-size: ${theme.font.sizes.xxsmall};
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
