import { darkTheme, lightTheme } from 'styles/theme'

function getCss(theme: string, boxShadow: string, shape: string) {
  const background =
    theme === 'dark' ? darkTheme.background : lightTheme.background

  const card = theme === 'dark' ? darkTheme.accent : lightTheme.accent
  const primaryFont =
    theme === 'dark' ? darkTheme.primaryFont : lightTheme.primaryFont

  const secondaryFont =
    theme === 'dark' ? darkTheme.secondaryFont : lightTheme.secondaryFont

  const tertiaryFont =
    theme === 'dark' ? darkTheme.tertiaryFont : lightTheme.tertiaryFont

  const borderRadius = shape === 'square' ? 'none' : '50%'

  return `
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local(''),
          url('/fonts/inter-v3-latin-regular.woff2') format('woff2');
      }

    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local(''),
          url('/fonts/inter-v3-latin-600.woff2') format('woff2');
    }
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: ${background};
      font-family: Inter, sans-serif;
      font-weight: bold;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .frame {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      padding: 8rem;
      border-radius: 1rem;
      border: 1rem solid ${card};
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;
      }

    .boxShadow {
      width: 300px;
      height: 300px;
      border-radius: ${borderRadius};
      ${boxShadow};

    }

    .text {
      display: flex;
      flex-direction: column;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 600px;
      gap: 0.8rem;
      line-height: 1.2;
      font-size: 4rem;
		  text-align: left;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: ${primaryFont};
    }

    .title svg {
		  flex-shrink: 0;
		  width: 3.6rem;
		  height: 3.6rem;
      fill:  ${tertiaryFont};
    }

    .subtitle {
      font-size: 2.25rem;
      color: ${secondaryFont};
      text-align: left;
      margin-top: 0.2rem;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${primaryFont};
      font-size: 3rem;
      margin-top: 3rem;
    }

    .author img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }`
}

export type ParsedRequest = {
  title: string
  theme: string
  shape: string
  boxShadow: string
  authorName: string
  authorPhoto: string
}

export function getHtml(parsedReq: ParsedRequest) {
  const { title, theme, shape, boxShadow, authorName, authorPhoto } = parsedReq

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, boxShadow, shape)}
    </style>
    <body>
    <div class="frame"></div>
    <div class="wrapper">
      <div class="text">
        <div class="title">
          ${title}
          ${Logo}
        </div>
        <div class="subtitle">A box-shadow design by</div>
        <div class="author">
          <div class="name">${authorName}</div>
          ${getImage(authorPhoto)}
        </div>
      </div>
      <div class="boxShadow"></div>
    </div>
  </body>
</html>`
}

function getImage(src: string) {
  return `<img
        src="${sanitizeHtml(src)}"
    />`
}

const Logo = `<svg
viewBox="0 0 24 24"
fill="currentColor"
xmlns="http://www.w3.org/2000/svg"
>
  <path d="M22 7.999a1 1 0 00-.516-.874l-9.022-5a1.003 1.003 0 00-.968 0l-8.978 4.96a1 1 0 00-.003 1.748l9.022 5.04a.995.995 0 00.973.001l8.978-5A1 1 0 0022 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
  <path d="M20.515 11.126L12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 00.971 0l9-5-.97-1.748z" />
  <path d="M20.515 15.126L12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 00.971 0l9-5-.97-1.748z" />
</svg>
`

const entityMap: { [key: string]: string } = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
}

export function sanitizeHtml(html: string) {
  return String(html).replace(/[&<>"'/]/g, (key) => entityMap[key])
}
