import hexRgb from 'hex-rgb'
import { createContext, useContext, useEffect, useState } from 'react'
import { AnimationProps, BoxShadowKeyProps, ShadowProps, Shape } from 'types'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { defaultShadow } from 'utils/shadow'
import { useDarkMode } from './use-dark-mode'

export type BoxShadowContextData = {
  boxShadow?: ShadowProps[]
  shape?: Shape
  animation?: AnimationProps
  keyframe?: Keyframe[]
  setBoxShadowProperty: (
    index: number,
    key: BoxShadowKeyProps,
    value?: number | string
  ) => void
  removeBoxShadow: (index: number) => void
  addBoxShadow: (newBoxShadow?: ShadowProps[], isDarkMode?: boolean) => void
  clearBoxShadow: () => void
}

const BOXSHADOW_KEY = 'boxShadow'

const BoxShadowContextDefaultValues = {
  boxShadow: [],
  animation: {},
  keyframe: [],
  setBoxShadowProperty: () => null,
  removeBoxShadow: () => null,
  addBoxShadow: () => null,
  clearBoxShadow: () => null
}

export const BoxShadowContext = createContext<BoxShadowContextData>(
  BoxShadowContextDefaultValues
)

export type BoxShadowProviderProps = {
  children: React.ReactNode
}

const BoxShadowProvider = ({ children }: BoxShadowProviderProps) => {
  const [boxShadow, setBoxShadow] = useState<ShadowProps[]>([])
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    const data = getStorageItem(BOXSHADOW_KEY)
    data ? setBoxShadow(data) : addBoxShadow()
  }, [])

  const saveBoxShadow = (boxShadow: ShadowProps[]) => {
    setBoxShadow(boxShadow)
    setStorageItem(BOXSHADOW_KEY, boxShadow)
  }

  const setBoxShadowProperty = (
    index: number,
    key: BoxShadowKeyProps,
    value?: number | string
  ) => {
    const arr = JSON.parse(JSON.stringify(boxShadow))
    const obj = JSON.parse(JSON.stringify(arr[index]))
    if (obj) {
      switch (key) {
        case 'inset':
          arr[index].inset = !arr[index].inset
          break

        case 'color':
          arr[index].color = {
            ...hexRgb(String(value)),
            alpha: arr[index].color.alpha
          }
          break
        case 'opacity':
          arr[index].color.alpha = value
            ? Number(value) / 100
            : arr[index].color.alpha
          break
        default:
          arr[index] = {
            ...obj,
            [key]: Number(value)
          }
      }
    }
    saveBoxShadow(arr)
  }

  const removeBoxShadow = (index: number) => {
    const newBoxShadow = boxShadow.filter((_, i) => i !== index)
    const copy = JSON.parse(JSON.stringify(newBoxShadow))
    saveBoxShadow(copy)
  }

  const addBoxShadow = (newBoxShadow?: ShadowProps[]) => {
    if (!newBoxShadow) {
      const deepCopy = JSON.parse(JSON.stringify(boxShadow))
      const newShadow = defaultShadow(isDarkMode())
      return saveBoxShadow([...deepCopy, newShadow])
    }

    //TODO
    return (
      Array.isArray(newBoxShadow) &&
      saveBoxShadow([...boxShadow, ...newBoxShadow])
    )
  }

  const clearBoxShadow = () => {
    saveBoxShadow([])
  }

  return (
    <BoxShadowContext.Provider
      value={{
        boxShadow,
        setBoxShadowProperty,
        removeBoxShadow,
        addBoxShadow,
        clearBoxShadow
      }}
    >
      {children}
    </BoxShadowContext.Provider>
  )
}

const useBoxShadow = () => useContext(BoxShadowContext)

export { BoxShadowProvider, useBoxShadow }
