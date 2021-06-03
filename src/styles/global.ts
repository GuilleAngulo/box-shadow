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
  :root {
    --light-background: ${lightTheme.background};
    --dark-background: ${darkTheme.background};
    --light-font: ${lightTheme.primaryFont};
    --dark-font: ${darkTheme.primaryFont};

    --color-primary: #6A8BFF;
    --color-red: #FF1717;
    --color-white: #FFF;
    --color-light-red: #ef4444;
    --color-terminal-font: #F9F9F9;
    --color-terminal-background: #0c1420;

    --grid-container: 130rem;
    --grid-gutter: 3.2rem;

    --shadow-size-og: 30rem;
    --shadow-size-large: 24rem;
    --shadow-size-medium: 12rem;
    --shadow-size-small: 9rem;
    --shadow-padding-large: 12.25rem;
    --shadow-padding-medium: 7rem;
    --shadow-padding-small: 4rem;

    --border-radius: 0.4rem;

    --font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-family-code: "Source Code Pro", monocode, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-light: 300;
    --font-normal: 400;
    --font-bold: 600;
    --font-size-xxsmall: 1rem;
    --font-size-xsmall: 1.2rem;
    --font-size-small: 1.4rem;
    --font-size-medium: 1.6rem;
    --font-size-large: 1.8rem;
    --font-size-xlarge: 2rem;
    --font-size-xxlarge: 2.8rem;
    --font-size-huge: 5.2rem;

    --spacings-xxsmall: 0.8rem;
    --spacings-xsmall: 1.6rem;
    --spacings-small: 2.4rem;
    --spacings-medium: 3.2rem;
    --spacings-large: 4rem;
    --spacings-xlarge: 4.8rem;
    --spacings-xxlarge: 5.6rem;

    --transition-default: 0.3s ease-in-out;
    --transition-fast: 0.1s ease-in-out;
  }

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

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: var(--font-family);
      font-size: var(--font-size-medium);
      background-color: ${theme.background};
      color: ${theme.primaryFont};
    }
  `}
`

export default GlobalStyles
