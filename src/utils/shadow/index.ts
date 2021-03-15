export const defaultShadow = (isDarkMode = false) => {
  const color = isDarkMode
    ? { red: 255, green: 255, blue: 255, alpha: 0.6 }
    : { red: 0, green: 0, blue: 0, alpha: 0.4 }
  return {
    horizontalOffset: 0,
    verticalOffset: 0,
    blurRadius: 32,
    spreadRadius: 0,
    inset: false,
    color
  }
}
