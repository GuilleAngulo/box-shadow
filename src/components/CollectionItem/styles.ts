import styled, { css, DefaultTheme } from 'styled-components'
import { Mode } from 'types'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.2rem;
  width: 17rem;
`

export const ItemHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`
export const ItemTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryFont};
    font-size: ${theme.font.sizes.large};
    text-align: center;
  `}
`

export const ItemDate = styled.time`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryFont};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const ItemControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export type ImageProps = {
  deleteMode?: boolean
  mode: Mode | undefined
}

const imageModifiers = {
  deleteMode: (theme: DefaultTheme, mode: Mode | undefined) => css`
    box-shadow: 0 0 0 0.3rem ${theme.colors.card},
      0 0 0 0.5rem ${theme.colors.red};

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
    border-radius: ${theme.border.radius};
    transition: ${theme.transition.fast};
    ${deleteMode && imageModifiers.deleteMode(theme, mode)};
  `}
`

export type DeleteMessageProps = {
  deleteMode?: boolean
  mode: Mode | undefined
}

export const Message = styled.div<DeleteMessageProps>`
  ${({ theme, deleteMode, mode }) => css`
    position: absolute;
    color: ${mode === 'light' ? 'var(--light-font)' : 'var(--dark-font)'};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    z-index: 1;
    transition: opacity ${theme.transition.fast};
    opacity: ${deleteMode ? '1' : '0'};
  `}
`
