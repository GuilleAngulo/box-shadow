import parserPostcss from 'prettier/parser-postcss'
import prettier from 'prettier/standalone'
import { ShadowProps } from 'components/Shadow'

export const prettify = (code: string) => {
  const css = `box-shadow: ${code}`
  return prettier.format(css, {
    parser: 'css',
    plugins: [parserPostcss]
  })
}

export const stringify = (shadowStyle: ShadowProps[]) => {
  const styles =
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

  return Array.isArray(styles) ? styles.join(', ') + ';' : ''
}
