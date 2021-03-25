import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Overlay = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 50;

    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    transition: ${theme.transition.fast};

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`
export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    min-width: calc(100% / 4);
    background-color: ${theme.colors.card};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${theme.border.radius};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: ${theme.transition.default};

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: ${theme.spacings.small};

    ${ButtonStyles.Wrapper} {
      svg {
        width: 2rem;
      }
    }
  `}
`

export const CloseButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.4rem 0.4rem 0 0;
    cursor: pointer;
    svg {
      width: 2.5rem;
    }
  `}
`

export const Message = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primaryFont};
    padding-bottom: ${theme.spacings.xxsmall};
    font-style: italic;
  `}
`

export const Header = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
  `}
`
