import styled, { css } from 'styled-components'

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
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
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
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
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
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
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
      border: 0.05rem solid ${`${theme.colors.border}66`};
    }

    &::-moz-range-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.colors.secondary};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-moz-range-track {
      border: 0.05rem solid ${`${theme.colors.border}66`};
    }

    &::-ms-track {
      width: 100%;
      height: 0.8rem;
      background: ${theme.colors.secondary};
      cursor: pointer;
      border-radius: 1.2rem;
    }
    &:focus::-ms-track {
      border: 0.05rem solid ${`${theme.colors.border}66`};
    }

    ${isVertical && InputModifiers.vertical()}
  `}
`
// export const Input = styled.input
//   ${({ theme }) => css`
//     display: block;
//     overflow: hidden;
//     appearance: none;
//     width: 100%;
//     margin: 0;
//     height: 2rem;
//     cursor: pointer;
//     border-radius: 1.2rem;
//     background-color: ${theme.colors.lightBg};

//     &:focus {
//       outline: none;
//     }

//     &::-webkit-slider-runnable-track {
//       width: 100%;
//       height: 2rem;
//       background: ${theme.colors.lightBg};
//     }

//     &::-webkit-slider-thumb {
//       position: relative;
//       appearance: none;
//       height: 20px;
//       width: 1px;
//       background: transparent;
//       cursor: ew-resize;
//       top: 50%;
//       transform: translateY(-50%);
//       box-shadow: -100vw 0 0 100vw ${theme.colors.primary};
//       transition: background-color 150ms;
//     }
//   `}
// `
