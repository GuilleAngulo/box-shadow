import { useBoxShadow } from 'hooks/use-box-shadow'

import { Square, Circle } from '@styled-icons/boxicons-regular'
import * as S from './styles'
import { Shape } from 'types'

const ShapeTool = () => {
  const { shape = 'square', saveShape } = useBoxShadow()

  const handleClick = (selectedShape: Shape) => {
    if (shape !== selectedShape) {
      saveShape(selectedShape)
    }
    return
  }

  return (
    <S.Wrapper>
      <S.Button
        aria-label="select square shape"
        onClick={() => handleClick('square')}
        selected={shape === 'square'}
      >
        <Square />
      </S.Button>
      <S.Button
        aria-label="select circle shape"
        onClick={() => handleClick('circle')}
        selected={shape === 'circle'}
      >
        <Circle />
      </S.Button>
    </S.Wrapper>
  )
}

export default ShapeTool
