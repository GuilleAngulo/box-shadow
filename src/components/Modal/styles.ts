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
    border-radius: 1.2rem;
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
    padding: ${theme.spacings.medium};
    border-radius: 1.2rem;
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.5);

    ${ButtonStyles.Wrapper} {
      svg {
        width: 2rem;
      }
    }
  `}
`

export const CloseButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryFont};
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.4rem 0.4rem 0 0;
    cursor: pointer;
    svg {
      width: 3rem;
    }

    &:hover {
      color: ${theme.colors.secondaryFont};
    }
  `}
`

export const Header = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    /* padding-bottom: ${theme.spacings.xsmall}; */
  `}
`
