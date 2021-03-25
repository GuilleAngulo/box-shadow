import Dropdown from 'components/Dropdown'
import { useBoxShadow } from 'hooks/use-box-shadow'

import { Square, Circle } from '@styled-icons/boxicons-regular'
import * as S from './styles'

const ShapeTool = () => {
  const { shape } = useBoxShadow()

  return (
    <S.Wrapper>
      <Dropdown title={shape === 'square' ? <Circle /> : <Square />}>
        <div>
          <Square /> <Circle />
        </div>
      </Dropdown>
    </S.Wrapper>
  )
}

export default ShapeTool
