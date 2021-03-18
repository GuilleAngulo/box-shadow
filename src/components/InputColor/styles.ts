import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

export const Input = styled.input`
  -webkit-appearance: none;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  &::-webkit-focus-ring-color {
    outline: auto 1px;
  }

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
  }
`
