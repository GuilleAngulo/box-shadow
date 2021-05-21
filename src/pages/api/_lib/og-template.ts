import { readFileSync } from 'fs'
import { darkTheme, lightTheme } from 'styles/theme'

const regular = readFileSync(`fonts/inter-v3-latin-regular.woff2`).toString(
  'base64'
)
const bold = readFileSync(`fonts/inter-v3-latin-600.woff2`).toString('base64')

function getCss(theme: string, boxShadow: string) {
  const background =
    theme === 'dark'
      ? darkTheme.colors.background
      : lightTheme.colors.background

  const card = theme === 'dark' ? darkTheme.colors.card : lightTheme.colors.card
  const primaryFont =
    theme === 'dark'
      ? darkTheme.colors.primaryFont
      : lightTheme.colors.primaryFont

  const secondaryFont =
    theme === 'dark'
      ? darkTheme.colors.secondaryFont
      : lightTheme.colors.secondaryFont

  const tertiaryFont =
    theme === 'dark'
      ? darkTheme.colors.tertiaryFont
      : lightTheme.colors.tertiaryFont

  return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${regular}) format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }
    body {
      background: ${background};
      height: 100vh;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-family: Inter, sans-serif;
      font-weight: bold;
      }

    .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8rem;
      padding: 4rem;
      border: 0.8rem solid ${card};
      border-radius: 2rem;
    }

    .boxShadow {
      width: 32rem;
      height: 32rem;
      border-radius: 50%;
      box-shadow: ${boxShadow};

    }

    .text {
      display: flex;
      flex-direction: column;
    }

    .title {
      display: flex;
      gap: 1rem;
      font-size: 8rem;
      color: ${primaryFont};
    }

    .title svg {
      width: 10rem;
      height: 10rem;
      fill:  ${tertiaryFont};
    }

    .subtitle {
      font-size: 4.5rem;
      color: ${secondaryFont};
      text-align: left;
      margin-top: -1.4rem;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 2rem;
      color: ${primaryFont};
      font-size: 5rem;
      margin-top: 6rem;
    }

    .author img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    .link {
      position: absolute;
      font-weight: 400;
      color: ${tertiaryFont};
      bottom: 0;
      right: 0;
      font-size: 2rem;
      padding: 1.6rem;
    }`
}

export type ParsedRequest = {
  title: string
  theme: string
  boxShadow: string
  authorName: string
  authorPhoto: string
}

export function getHtml(parsedReq: ParsedRequest) {
  const { title, theme, boxShadow, authorName, authorPhoto } = parsedReq

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, boxShadow)}
    </style>
    <body>
    <div className="wrapper">
      <div className="boxShadow"></div>
      <div className="text">
        <div className="title">
          ${title}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 7.999a1 1 0 00-.516-.874l-9.022-5a1.003 1.003 0 00-.968 0l-8.978 4.96a1 1 0 00-.003 1.748l9.022 5.04a.995.995 0 00.973.001l8.978-5A1 1 0 0022 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
            <path d="M20.515 11.126L12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 00.971 0l9-5-.97-1.748z" />
            <path d="M20.515 15.126L12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 00.971 0l9-5-.97-1.748z" />
          </svg>
        </div>
        <div className="subtitle">A box-shadow design by</div>
        <div className="author">
          <div className="name">${authorName}</div>
          ${getImage(authorPhoto, authorName)}
        </div>
      </div>
      <div className="link">${process.env.NEXT_PUBLIC_API_URL}</div>
    </div>
  </body>
</html>`
}

function getImage(src: string, alt: string) {
  return `<img
        class="author"
        alt=${alt}
        src="${sanitizeHtml(src)}"
    />`
}

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
