import parserPostcss from 'prettier/parser-postcss'
import prettier from 'prettier/standalone'
import { ShadowProps } from 'types'

export const prettify = (code: string) => {
  const css = code && `box-shadow: ${code}`
  return prettier.format(css, {
    parser: 'css',
    printWidth: 70,
    plugins: [parserPostcss]
  })
}

export const stringify = (shadowStyle: ShadowProps[], semicolon = true) => {
  const stylesArray =
    Array.isArray(shadowStyle) &&
    shadowStyle.map(
      ({
        horizontalOffset,
        verticalOffset,
        blurRadius,
        spreadRadius,
        color,
        inset = false
      }) =>
        `${
          inset ? 'inset ' : ''
        }${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(${
          color.red
        }, ${color.green}, ${color.blue}, ${color.alpha})`
    )

  let styles = Array.isArray(stylesArray) ? stylesArray.join(', ') : ''

  if (semicolon) {
    styles += ';'
  }

  return styles
}
