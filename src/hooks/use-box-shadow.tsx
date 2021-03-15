import hexRgb from 'hex-rgb'
import { createContext, useContext, useEffect, useState } from 'react'
import { AnimationProps, BoxShadowKeyProps, ShadowProps } from 'types'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { defaultShadow } from 'utils/shadow'

export type BoxShadowContextData = {
  boxShadow?: ShadowProps[]
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
  isEmpty: () => boolean
}

const BOXSHADOW_KEY = 'boxShadow'

const BoxShadowContextDefaultValues = {
  boxShadow: [],
  animation: {},
  keyframe: [],
  setBoxShadowProperty: () => null,
  removeBoxShadow: () => null,
  addBoxShadow: () => null,
  clearBoxShadow: () => null,
  isEmpty: () => false
}

export const BoxShadowContext = createContext<BoxShadowContextData>(
  BoxShadowContextDefaultValues
)

export type BoxShadowProviderProps = {
  children: React.ReactNode
}

const BoxShadowProvider = ({ children }: BoxShadowProviderProps) => {
  const [boxShadow, setBoxShadow] = useState<ShadowProps[]>([])

  useEffect(() => {
    const data = getStorageItem(BOXSHADOW_KEY)

    if (data) {
      setBoxShadow(data)
    }
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
    // const arr = [...boxShadow]
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
      const newShadow = defaultShadow()
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

  const isEmpty = () => {
    return !boxShadow.length
  }

  return (
    <BoxShadowContext.Provider
      value={{
        boxShadow,
        setBoxShadowProperty,
        removeBoxShadow,
        addBoxShadow,
        clearBoxShadow,
        isEmpty
      }}
    >
      {children}
    </BoxShadowContext.Provider>
  )
}

const useBoxShadow = () => useContext(BoxShadowContext)

export { BoxShadowProvider, useBoxShadow }
