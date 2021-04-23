import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

type ModalProps = {
  isOpen: boolean
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

export const Overlay = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 50;

    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    transition: opacity ${theme.transition.default};

    ${isOpen && overlayModifiers.open()}
    ${!isOpen && overlayModifiers.close()}
  `}
`

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    will-change: transform;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 1.2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: opacity ${theme.transition.default};
    background-color: ${theme.colors.card};
    overflow-y: auto;

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}

    ${media.lessThan('medium')`
      width: 100%;
      height: 100%;
      border-radius: 0;
    `}
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
    border-radius: ${theme.border.radius};
    position: absolute;
    right: 0;
    top: 0;
    margin: 0.4rem 0.4rem 0 0;
    cursor: pointer;
    svg {
      width: 3rem;
    }

    &:hover {
      background: ${darken(0.1, theme.colors.card)};
    }
  `}
`

export const Header = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 2.6rem;
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    /* padding-bottom: ${theme.spacings.xsmall}; */
  `}
`
