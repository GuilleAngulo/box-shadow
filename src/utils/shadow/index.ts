import { Mode, Shape } from 'types'
import { uuid } from 'utils/helpers'

export const HORIZONTAL_OFFSET_RANGES = [-100, 100]
export const VERTICAL_OFFSET_RANGES = [-100, 100]
export const BLUR_RADIUS_RANGES = [0, 100]
export const SPREAD_RADIUS_RANGES = [-100, 100]
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
    id: uuid(),
    horizontalOffset: 0,
    verticalOffset: 0,
    blurRadius: 32,
    spreadRadius: isDarkMode ? 15 : 0,
    inset: false,
    color,
    visible: true
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
      },
      visible: true
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
      },
      visible: true
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
      },
      visible: true
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
      },
      visible: true
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
      inset: true,
      visible: true
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
      },
      visible: true
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
      spreadRadius: 20,
      color: {
        red: 0,
        green: 180,
        blue: 216,
        alpha: 1
      },
      inset: true,
      visible: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 20,
      spreadRadius: 20,
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      inset: true,
      visible: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 100,
      spreadRadius: 100,
      color: {
        red: 160,
        green: 225,
        blue: 238,
        alpha: 1
      },
      inset: true,
      visible: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 20,
      spreadRadius: 0,
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      visible: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 0,
      spreadRadius: 20,
      color: {
        red: 0,
        green: 150,
        blue: 199,
        alpha: 1
      },
      visible: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 20,
      spreadRadius: 20,
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      visible: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 0,
      spreadRadius: 40,
      color: {
        red: 0,
        green: 119,
        blue: 182,
        alpha: 1
      },
      visible: true
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
      blurRadius: 2,
      spreadRadius: 1,
      color: {
        red: 0,
        green: 204,
        blue: 255,
        alpha: 1
      },
      visible: true
    },
    {
      horizontalOffset: 2,
      verticalOffset: 2,
      blurRadius: 2,
      spreadRadius: 1,
      color: {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 1
      },
      visible: true
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
      },
      visible: true
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
      },
      visible: true
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
      blurRadius: 40,
      spreadRadius: -10,
      color: {
        red: 230,
        green: 0,
        blue: 0,
        alpha: 1
      },
      inset: true,
      visible: true
    },
    {
      horizontalOffset: 40,
      verticalOffset: -15,
      blurRadius: 5,
      spreadRadius: -5,
      color: {
        red: 250,
        green: 255,
        blue: 160,
        alpha: 1
      },
      visible: true
    },
    {
      horizontalOffset: 45,
      verticalOffset: -15,
      blurRadius: 20,
      spreadRadius: 0,
      color: {
        red: 255,
        green: 96,
        blue: 10,
        alpha: 1
      },
      visible: true
    },
    {
      horizontalOffset: 50,
      verticalOffset: -15,
      blurRadius: 30,
      spreadRadius: 10,
      color: {
        red: 255,
        green: 123,
        blue: 0,
        alpha: 0.85
      },
      visible: true
    },
    {
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 10,
      spreadRadius: 5,
      color: {
        red: 10,
        green: 161,
        blue: 255,
        alpha: 1
      },
      visible: true
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
    },
    visible: true
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
    },
    visible: true
  }
]
