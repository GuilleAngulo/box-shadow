import ShapeSidebar from 'components/ShapeSidebar'
import { useBoxShadow } from 'hooks/use-box-shadow'
import { Shape } from 'types'

import * as S from './styles'

export type BoxShadowProps = {
  children?: React.ReactNode
}

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
  const { boxShadow = [], shape, saveShape } = useBoxShadow()

  // const renderShape = (type: string | undefined) => {
  //   switch (type) {
  //     case 'square':
  //     case 'circle':
  //       return <S.ShapeBlock boxShadow={boxShadow} shape={type} />

  //     default:
  //       return <div></div>
  //   }
  // }

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
