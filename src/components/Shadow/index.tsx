import ShapeSidebar from 'components/ShapeSidebar'
import { useBoxShadow } from 'hooks/use-box-shadow'
import { useEffect, useState } from 'react'
import { Shape } from 'types'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

import * as S from './styles'

export type BoxShadowProps = {
  children?: React.ReactNode
}

const SHAPE_KEY = 'shape'

const defaultShape = 'square'

const items = [
  {
    label: 'Square',
    name: 'square' as Shape
  },
  {
    label: 'Circle',
    name: 'circle' as Shape
  }
]

const Shadow = ({ children }: BoxShadowProps) => {
  const { boxShadow = [] } = useBoxShadow()
  const [shape, setShape] = useState<Shape | undefined>(undefined)

  useEffect(() => {
    const data = getStorageItem(SHAPE_KEY)
    setShape(data ? data : defaultShape)
  }, [])

  const saveShape = (shape: Shape) => {
    setShape(shape)
    setStorageItem(SHAPE_KEY, shape)
  }

  const renderShape = (type: string | undefined) => {
    switch (type) {
      case 'square':
      case 'circle':
        return <S.ShapeBlock boxShadow={boxShadow} shape={type} />

      default:
        return <div></div>
    }
  }

  return (
    <S.Wrapper>
      {shape && (
        <>
          <S.ShapeBlock boxShadow={boxShadow} shape={shape} />
          <ShapeSidebar
            items={items}
            onFilter={saveShape}
            initialValue={shape}
          />
        </>
      )}
    </S.Wrapper>
  )
}
export default Shadow
