import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

import { lightTheme, darkTheme } from 'styles/theme'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
      --light-background: ${lightTheme.colors.background};
      --dark-background: ${darkTheme.colors.background};
      --light-font: ${lightTheme.colors.primaryFont};
      --dark-font: ${darkTheme.colors.primaryFont};
      --red: "#FF1717";
    }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.background};
      color: ${theme.colors.primaryFont};
    }
  `}
`

export default GlobalStyles
