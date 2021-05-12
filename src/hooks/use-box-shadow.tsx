import hexRgb from 'hex-rgb'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  AnimationProps,
  BoxShadowKeyProps,
  ShadowProps,
  Shape,
  Preset,
  AuthoredPreset
} from 'types'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { defaultShadow } from 'utils/shadow'
import { useTheme } from 'hooks/use-theme'
import { populateId, uuid } from 'utils/helpers'

export type BoxShadowContextData = {
  boxShadow?: ShadowProps[]
  shape?: Shape | undefined
  animation?: AnimationProps
  keyframe?: Keyframe[]
  loading: boolean
  setBoxShadowProperty: (
    index: number,
    key: BoxShadowKeyProps,
    value?: number | string
  ) => void
  removeBoxShadow: (index: number) => void
  addBoxShadow: (newBoxShadow?: ShadowProps[], isDarkMode?: boolean) => void
  clearBoxShadow: () => void
  saveShape: (shape: Shape) => void
  reorderBoxShadow: (srcIndex: number, destIndex: number) => void
  loadPreset: (preset: Preset | AuthoredPreset) => void
  setVisible: (index: number) => void
}

const BOXSHADOW_KEY = 'boxShadow'
const SHAPE_KEY = 'shape'

const BoxShadowContextDefaultValues = {
  boxShadow: [],
  animation: {},
  keyframe: [],
  shape: undefined,
  loading: false,
  setBoxShadowProperty: () => null,
  removeBoxShadow: () => null,
  addBoxShadow: () => null,
  clearBoxShadow: () => null,
  saveShape: () => null,
  reorderBoxShadow: () => null,
  loadPreset: () => null,
  setVisible: () => null
}

export const BoxShadowContext = createContext<BoxShadowContextData>(
  BoxShadowContextDefaultValues
)

export type BoxShadowProviderProps = {
  initialPreset?: Preset
  children: React.ReactNode
}

const BoxShadowProvider = ({
  initialPreset,
  children
}: BoxShadowProviderProps) => {
  const [boxShadow, setBoxShadow] = useState<ShadowProps[]>(() =>
    populateId(initialPreset?.boxShadow)
  )
  const [shape, setShape] = useState<Shape | undefined>(
    initialPreset?.shape || undefined
  )
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initialPreset?.theme !== theme && toggleTheme) {
      toggleTheme()
    }
    if (initialPreset) return

    const storedBoxShadow = getStorageItem(BOXSHADOW_KEY)
    const storedShape = getStorageItem(SHAPE_KEY)
    setShape(storedShape ? storedShape : 'square')
    storedBoxShadow ? setBoxShadow(storedBoxShadow) : addBoxShadow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveBoxShadow = (boxShadow: ShadowProps[]) => {
    setBoxShadow(boxShadow)
    setStorageItem(BOXSHADOW_KEY, boxShadow)
  }

  const saveShape = (shape: Shape) => {
    setShape(shape)
    setStorageItem(SHAPE_KEY, shape)
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
    // If empty creates a default box shadow
    if (!newBoxShadow) {
      const deepCopy = JSON.parse(JSON.stringify(boxShadow))
      const newShadow = defaultShadow(theme === 'dark')
      return saveBoxShadow([...deepCopy, newShadow])
    }

    //If
    if (Array.isArray(newBoxShadow)) {
      const deepCopy = JSON.parse(JSON.stringify(boxShadow))
      const newShadow = JSON.parse(JSON.stringify(newBoxShadow))
      return saveBoxShadow([...deepCopy, newShadow])
    }

    return
  }

  const setVisible = (index: number) => {
    const copy = JSON.parse(JSON.stringify(boxShadow))
    copy[index].visible = !copy[index].visible
    saveBoxShadow(copy)
  }

  const reorderBoxShadow = (srcIndex: number, destIndex: number) => {
    const copy = JSON.parse(JSON.stringify(boxShadow))
    const [removed] = copy.splice(srcIndex, 1)
    copy.splice(destIndex, 0, JSON.parse(JSON.stringify(removed)))
    saveBoxShadow(copy)
  }

  const clearBoxShadow = () => {
    saveBoxShadow([])
  }

  const loadPreset = (preset: Preset) => {
    setLoading(true)
    if (preset?.theme !== theme && toggleTheme) {
      toggleTheme()
    }

    if (preset?.shape !== shape) {
      saveShape(preset?.shape)
    }

    // Trick to make loading work
    setTimeout(() => {
      //Create IDs to handle unique keys on array map
      const boxShadowIDs = populateId(preset?.boxShadow)
      saveBoxShadow(boxShadowIDs)
      setLoading(false)
    }, 0)
  }

  return (
    <BoxShadowContext.Provider
      value={{
        boxShadow,
        shape,
        loading,
        setBoxShadowProperty,
        removeBoxShadow,
        addBoxShadow,
        clearBoxShadow,
        saveShape,
        reorderBoxShadow,
        loadPreset,
        setVisible
      }}
    >
      {children}
    </BoxShadowContext.Provider>
  )
}

const useBoxShadow = () => useContext(BoxShadowContext)

export { BoxShadowProvider, useBoxShadow }
