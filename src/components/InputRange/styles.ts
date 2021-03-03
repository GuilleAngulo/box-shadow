import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export type InputProps = {
  isVertical?: boolean
  orient?: string
}

const InputModifiers = {
  vertical: () => css`
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
  `
}

export const Input = styled.input<InputProps>`
  ${({ theme, isVertical }) => css`
    &::-webkit-slider-runnable-track {
      background: ${theme.colors.lightGray};
      cursor: pointer;
      border-radius: 1.2rem;
    }

    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-ms-thumb {
      background-color: black;
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
