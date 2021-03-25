import { Mode, Shape } from 'types'

export const HORIZONTAL_OFFSET_RANGES = [-100, 100]
export const VERTICAL_OFFSET_RANGES = [-100, 100]
export const BLUR_RADIUS_RANGES = [0, 100]
export const SPREAD_RADIUS_RANGES = [-50, 50]
export const OPACITY_RANGES = [0, 100]

export const defaultShadow = (isDarkMode = false) => {
  const color = isDarkMode
    ? { red: 255, green: 255, blue: 255, alpha: 0.6 }
    : { red: 0, green: 0, blue: 0, alpha: 0.4 }

  return {
    horizontalOffset: 0,
    verticalOffset: 0,
    blurRadius: 32,
    spreadRadius: isDarkMode ? 15 : 0,
    inset: false,
    color
  }
}

export const preset = {
  theme: 'dark' as Mode,
  shape: 'square' as Shape,
  boxShadow: [
    {
      horizontalOffset: -2,
      verticalOffset: -2,
      blurRadius: 4,
      spreadRadius: 1,
      color: {
        red: 0,
        green: 204,
        blue: 255,
        alpha: 1
      }
    },
    {
      horizontalOffset: 2,
      verticalOffset: 2,
      blurRadius: 4,
      spreadRadius: 1,
      color: {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 1
      }
    },
    {
      horizontalOffset: -50,
      verticalOffset: -30,
      blurRadius: 80,
      spreadRadius: -10,
      color: {
        red: 0,
        green: 145,
        blue: 255,
        alpha: 0.6
      }
    },
    {
      horizontalOffset: 30,
      verticalOffset: 30,
      blurRadius: 80,
      spreadRadius: -10,
      color: {
        red: 255,
        green: 31,
        blue: 31,
        alpha: 0.8
      }
    }
  ]
}
export const shadow = [
  {
    horizontalOffset: -2,
    verticalOffset: -2,
    blurRadius: 5,
    spreadRadius: 0,
    color: {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1
    }
  },
  {
    horizontalOffset: 3,
    verticalOffset: 3,
    blurRadius: 5,
    spreadRadius: 0,
    color: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0.1
    }
  }
]

/** ECLIPSE
box-shadow: -10px -1px 14px 1px rgba(255, 184, 31, 1),
  -23px 0px 23px 10px rgba(255, 253, 194, 0.36),
  inset -6px 0px 30px 1px rgba(168, 169, 184, 1),
  0px 0px 100px 10px rgba(111, 82, 255, 0.66),
  0px 0px 44px 10px rgba(97, 215, 255, 0.4);
*/
