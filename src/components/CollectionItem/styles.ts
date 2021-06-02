import styled, { css, DefaultTheme } from 'styled-components'
import { Mode } from 'types'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--spacings-xxsmall);
`
export const ItemTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.primaryFont};
    font-size: var(--font-size-large);
    text-align: center;
  `}
`

export const ItemDate = styled.time`
  ${({ theme }) => css`
    color: ${theme.secondaryFont};
    font-size: var(--font-size-xsmall);
  `}
`

export const ItemControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: var(--spacings-xsmall);
  margin-bottom: 0.4rem;
`

export type ImageProps = {
  deleteMode?: boolean
  mode: Mode | undefined
}

const imageModifiers = {
  deleteMode: (theme: DefaultTheme, mode: Mode | undefined) => css`
    box-shadow: 0 0 0 0.3rem ${theme.card}, 0 0 0 0.5rem var(--color-light-red);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background-color: ${mode === 'light'
        ? 'var(--light-background)'
        : 'var(--dark-background)'};
      opacity: 0.7;
    }
  `
}

export const Image = styled.div<ImageProps>`
  ${({ theme, deleteMode, mode }) => css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    transition: var(--transition-fast);
    ${deleteMode && imageModifiers.deleteMode(theme, mode)};
  `}
`

export type DeleteMessageProps = {
  deleteMode?: boolean
  mode: Mode | undefined
}

export const Message = styled.div<DeleteMessageProps>`
  ${({ deleteMode, mode }) => css`
    position: absolute;
    will-change: opacity;
    color: ${mode === 'light' ? 'var(--light-font)' : 'var(--dark-font)'};
    font-weight: var(--font-bold);
    font-size: var(--font-size-large);
    z-index: 1;
    transition: opacity var(--transition-fast);
    opacity: ${deleteMode ? '1' : '0'};
  `}
`
