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
      ({
        horizontalOffset,
        verticalOffset,
        blurRadius,
        spreadRadius,
        color,
        inset = false,
        visible
      }) => {
        let line = `${
          inset ? 'inset ' : ''
        }${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(${
          color.red
        }, ${color.green}, ${color.blue}, ${color.alpha})`

        if (!visible) {
          line = `/*${line}*/ `
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
  size: number,
  unparsed = false
) => {
  // If the boxShadow is undefined or has the same size or is not an array do nothing
  if (!boxShadow || size === SIZES.large || !Array.isArray(boxShadow))
    return boxShadow

  // The size difference converted to px
  const differencePercentage = size / SIZES.large

  const newBoxShadow = boxShadow.map((item) => ({
    ...item,
    horizontalOffset: (item.horizontalOffset * differencePercentage).toFixed(2),
    verticalOffset: (item.verticalOffset * differencePercentage).toFixed(2),
    blurRadius: (item.blurRadius * differencePercentage).toFixed(2),
    spreadRadius: (item.spreadRadius * differencePercentage).toFixed(2)
  }))

  if (unparsed) return newBoxShadow

  return JSON.parse(JSON.stringify(newBoxShadow))
}

export const parseBoxShadow = (boxShadow: string) => {
  try {
    return JSON.parse(boxShadow)
  } catch {
    return boxShadow
  }
}

export const uuid = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const toCamelCase = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, text) => text.toUpperCase())
}

export const populateId = (boxShadow: ShadowProps[] | undefined) => {
  if (Array.isArray(boxShadow) && !!boxShadow) {
    return boxShadow?.map((item) => ({ ...item, id: uuid() }))
  }
  return []
}

export type OgUrlProps = {
  title: string
  theme: string
  shape: string
  boxShadow: string
  authorName: string
  authorPhoto: string
}

export const generateOgUrl = ({
  title,
  theme,
  shape,
  boxShadow,
  authorName,
  authorPhoto
}: OgUrlProps) => {
  return `${
    process.env.NEXT_PUBLIC_API_URL
  }/api/og-image.png?title=${encodeURIComponent(
    title
  )}&theme=${encodeURIComponent(theme)}&shape=${encodeURIComponent(
    shape
  )}&boxShadow=${encodeURIComponent(boxShadow)}&authorName=${encodeURIComponent(
    authorName
  )}&authorPhoto=${encodeURIComponent(authorPhoto)}`
}
