import parserPostcss from 'prettier/parser-postcss'
import prettier from 'prettier/standalone'
import { ShadowProps } from 'types'
import { SIZES } from 'utils/shadow'

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
        inset = false,
        visible
      }) =>
        visible
          ? `${
              inset ? 'inset ' : ''
            }${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(${
              color.red
            }, ${color.green}, ${color.blue}, ${color.alpha})`
          : ''
    )

  let styles = Array.isArray(stylesArray)
    ? stylesArray.filter((item) => !!item).join(', ')
    : ''

  if (semicolon) {
    styles += ';'
  }

  return styles
}

export const stringifyTerminal = (
  shadowStyle: ShadowProps[],
  semicolon = true
) => {
  const stylesArray =
    Array.isArray(shadowStyle) &&
    shadowStyle.map(
      (
        {
          horizontalOffset,
          verticalOffset,
          blurRadius,
          spreadRadius,
          color,
          inset = false,
          visible
        },
        index
      ) => {
        let line = `${
          inset ? 'inset ' : ''
        }${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(${
          color.red
        }, ${color.green}, ${color.blue}, ${color.alpha})`

        if (!visible) {
          line = `/* ${line} */ `
        }

        if (index === 0) {
          line = `\n  ${line}`
        }

        return line
      }
    )

  let styles = Array.isArray(stylesArray)
    ? stylesArray.filter((item) => !!item).join(', ')
    : ''

  if (semicolon && styles) {
    styles += ';'
  }

  return styles
}

export const resizeBoxShadow = (
  boxShadow: ShadowProps[] | undefined,
  size: number
) => {
  // If the boxShadow is undefined or has the same size do nothing
  if (!boxShadow || size === SIZES.large) return boxShadow

  // The size difference converted to px
  const differencePercentage = size / SIZES.large

  const newBoxShadow = boxShadow.map((item) => ({
    ...item,
    horizontalOffset: item.horizontalOffset * differencePercentage,
    verticalOffset: item.verticalOffset * differencePercentage,
    blurRadius: item.blurRadius * differencePercentage,
    spreadRadius: item.spreadRadius * differencePercentage
  }))

  return JSON.parse(JSON.stringify(newBoxShadow))
}
