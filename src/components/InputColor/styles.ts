import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

export const Input = styled.input`
  -webkit-appearance: none;
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;

  &::-webkit-focus-ring-color {
    outline: auto 1px;
  }

  &::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 50%;
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
    padding: 0;
  }
`
