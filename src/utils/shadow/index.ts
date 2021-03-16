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

/** ECLIPSE
box-shadow: -10px -1px 14px 1px rgba(255, 184, 31, 1),
  -23px 0px 23px 10px rgba(255, 253, 194, 0.36),
  inset -6px 0px 30px 1px rgba(168, 169, 184, 1),
  0px 0px 100px 10px rgba(111, 82, 255, 0.66),
  0px 0px 44px 10px rgba(97, 215, 255, 0.4);
*/
