import styled, { css } from 'styled-components'
import { lighten, transparentize } from 'polished'

export const Wrapper = styled.div``

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  svg {
    width: 1.7rem;
    margin-left: 0.8rem;
  }
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
      background: ${theme.colors.secondary};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-webkit-slider-runnable-track {
      border: 0.05rem solid ${transparentize(0.5, theme.colors.border)}};
    }

    &::-moz-range-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.colors.secondary};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-moz-range-track {
      border: 0.05rem solid ${transparentize(0.5, theme.colors.border)}};
    }

    &::-ms-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.colors.secondary};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-ms-track {
      border: 0.05rem solid ${transparentize(0.5, theme.colors.border)}};
    }

    ${isVertical && InputModifiers.vertical()}
  `}
`
// export const VariantInput = styled.input`
//   ${({ theme }) => css`
//     display: block;
//     overflow: hidden;
//     appearance: none;
//     width: 100%;
//     margin: 0;
//     height: 1.4rem;
//     cursor: pointer;
//     border-radius: 1.2rem;
//     background-color: ${theme.colors.secondary};

//     &:focus {
//       outline: none;
//     }

//     &::-webkit-slider-thumb {
//       position: relative;
//       appearance: none;
//       height: 1.4rem;
//       width: 1px;
//       background: transparent;
//       top: 50%;
//       transform: translateY(-50%);
//       box-shadow: -100vw 0 0 100vw ${theme.colors.primary};
//       transition: background-color 150ms;
//     }

//     &:focus::-webkit-slider-thumb {
//     }

//     &::-moz-range-thumb {
//       position: relative;
//       appearance: none;
//       height: 1.4rem;
//       width: 0px;
//       border: none;
//       background: transparent;
//       top: 50%;
//       transform: translateY(-50%);
//       box-shadow: -100vw 0 0 100vw ${theme.colors.primary};
//       transition: background-color 150ms;
//     }

//     &:focus::-moz-range-thumb {
//     }

//     &::-ms-thumb {
//       position: relative;
//       appearance: none;
//       height: 1.4rem;
//       width: 1px;
//       background: transparent;
//       top: 50%;
//       transform: translateY(-50%);
//       box-shadow: -100vw 0 0 100vw ${theme.colors.primary};
//       transition: background-color 150ms;
//     }

//     &:focus::-ms-thumb {
//     }

//     &::-webkit-slider-runnable-track {
//       width: 100%;
//       height: 1.4rem;
//       background: ${theme.colors.secondary};
//     }

//     &:focus::-webkit-slider-runnable-track {
//     }

//     &::-moz-range-track {
//       width: 100%;
//       height: 1.4rem;
//       background: ${theme.colors.secondary};
//     }
//     &:focus::-moz-range-track {
//     }

//     &::-ms-track {
//       width: 100%;
//       height: 1.4rem;
//       background: ${theme.colors.secondary};
//     }
//     &:focus::-ms-track {
//     }
//   `}
// `
