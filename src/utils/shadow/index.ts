import { Mode, Shape } from 'types'

export const HORIZONTAL_OFFSET_RANGES = [-100, 100]
export const VERTICAL_OFFSET_RANGES = [-100, 100]
export const BLUR_RADIUS_RANGES = [0, 100]
export const SPREAD_RADIUS_RANGES = [-50, 50]
export const OPACITY_RANGES = [0, 100]

export const SIZES = {
  large: 24,
  medium: 12,
  small: 9
}

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

export const simplePreset = {
  name: 'Simple',
  theme: 'light' as Mode,
  shape: 'square' as Shape,
  boxShadow: [
    {
      horizontalOffset: 0,
      verticalOffset: 5,
      blurRadius: 12,
      spreadRadius: 3,
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0.15
      }
    },
    {
      horizontalOffset: 0,
      verticalOffset: 30,
      blurRadius: 40,
      spreadRadius: -10,
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0.3
      }
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 90,
      spreadRadius: 10,
      color: {
        red: 70,
        green: 70,
        blue: 70,
        alpha: 0.15
      }
    }
  ]
}

export const neumorphismPreset = {
  name: 'Neumorphism',
  theme: 'light' as Mode,
  shape: 'square' as Shape,
  boxShadow: [
    {
      horizontalOffset: 20,
      verticalOffset: 20,
      blurRadius: 50,
      spreadRadius: 0,
      color: {
        red: 165,
        green: 165,
        blue: 165,
        alpha: 0.4
      }
    },
    {
      horizontalOffset: 40,
      verticalOffset: 40,
      blurRadius: 65,
      spreadRadius: -5,
      color: {
        red: 160,
        green: 160,
        blue: 160,
        alpha: 0.25
      },
      inset: true
    },
    {
      horizontalOffset: -20,
      verticalOffset: -20,
      blurRadius: 50,
      spreadRadius: 0,
      color: {
        red: 255,
        green: 255,
        blue: 255,
        alpha: 1
      }
    }
  ]
}

export const ringsPreset = {
  name: 'Rings',
  theme: 'light' as Mode,
  shape: 'circle' as Shape,
  boxShadow: [
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 0,
      spreadRadius: 10,
      color: {
        red: 106,
        green: 139,
        blue: 255,
        alpha: 1
      }
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 0,
      spreadRadius: 20,
      color: {
        red: 106,
        green: 139,
        blue: 255,
        alpha: 0.6
      }
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 0,
      spreadRadius: 30,
      color: {
        red: 106,
        green: 139,
        blue: 255,
        alpha: 0.2
      }
    }
  ]
}

export const ledsPreset = {
  name: 'Leds',
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

export const eclipsePreset = {
  name: 'Eclipse',
  theme: 'dark' as Mode,
  shape: 'circle' as Shape,
  boxShadow: [
    {
      horizontalOffset: -30,
      verticalOffset: 10,
      blurRadius: 30,
      spreadRadius: -10,
      color: {
        red: 230,
        green: 0,
        blue: 0,
        alpha: 1
      },
      inset: true
    },
    {
      horizontalOffset: 50,
      verticalOffset: -15,
      blurRadius: 10,
      spreadRadius: -5,
      color: {
        red: 250,
        green: 255,
        blue: 160,
        alpha: 1
      }
    },
    {
      horizontalOffset: 55,
      verticalOffset: -15,
      blurRadius: 25,
      spreadRadius: 0,
      color: {
        red: 255,
        green: 96,
        blue: 10,
        alpha: 1
      }
    },
    {
      horizontalOffset: 60,
      verticalOffset: -20,
      blurRadius: 60,
      spreadRadius: 15,
      color: {
        red: 255,
        green: 123,
        blue: 0,
        alpha: 0.85
      }
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 20,
      spreadRadius: 5,
      color: {
        red: 10,
        green: 161,
        blue: 255,
        alpha: 0.85
      }
    }
  ]
}

export const featuredPreset = {
  name: 'Featured',
  author: 'GuilleAngulo',
  theme: 'dark' as Mode,
  shape: 'circle' as Shape,
  boxShadow: [
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 90,
      spreadRadius: 35,
      color: {
        red: 206,
        green: 1,
        blue: 208,
        alpha: 0.7
      },
      inset: true
    },
    {
      horizontalOffset: -100,
      verticalOffset: -45,
      blurRadius: 50,
      spreadRadius: -50,
      color: {
        red: 245,
        green: 1,
        blue: 90,
        alpha: 1
      },
      inset: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 70,
      spreadRadius: 24,
      color: {
        red: 245,
        green: 20,
        blue: 245,
        alpha: 0.4
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
