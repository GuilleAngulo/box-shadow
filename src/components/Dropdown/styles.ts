import styled, { css } from 'styled-components'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.primaryFont};
    position: relative;
    display: flex;
    align-items: center;
    z-index: 30;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.card};
    color: ${theme.primaryFont};
    margin-top: var(--spacings-small);
    border-radius: var(--border-radius);
    position: absolute;
    right: 0;
    z-index: 30;
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.5);

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.card};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
`

type WrapperProps = {
  isOpen?: boolean
}

const overlayModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

const contentModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    transition: transform 250ms ease-out;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content} {
      will-change: transform;
      transition: transform 400ms ease-in, opacity var(--transition-default);
      ${isOpen && contentModifiers.open()}
      ${!isOpen && contentModifiers.close()}
    }
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity var(--transition-default);
      ${isOpen && overlayModifiers.open()}
      ${!isOpen && overlayModifiers.close()}
    }
  `}
`

const arrowModifiers = {
  open: () => css`
    transform: rotate(180deg);
  `
}

export const Chevron = styled(ChevronDown)<WrapperProps>`
  ${({ isOpen }) => css`
    transition: transform var(--transition-default);
    transform: rotate(0);
    ${isOpen && arrowModifiers.open()};
  `}
`
