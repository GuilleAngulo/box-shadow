import { useBoxShadow } from 'hooks/use-box-shadow'

import { Square, Circle } from '@styled-icons/boxicons-regular'
import * as S from './styles'
import Button from 'components/Button'

const ShapeTool = () => {
  const { shape, saveShape } = useBoxShadow()

  return (
    <S.Wrapper>
      <Button minimal icon={<Square />} aria-label="select square shape" />
      <Button minimal icon={<Circle />} aria-label="select circle shape" />
    </S.Wrapper>
  )
}

export default ShapeTool
