import { Mode, ShadowProps, Shape } from 'types'
import { resizeBoxShadow } from 'utils/helpers'
import { SIZES } from 'utils/shadow'

import * as S from './styles'

export type BoxShadowProps = {
  initialBoxShadow?: ShadowProps[]
  shape?: Shape
  size?: 'large' | 'medium' | 'small'
  mode?: Mode
}

const Shadow = ({
  size = 'large',
  initialBoxShadow,
  shape,
  mode = 'light'
}: BoxShadowProps) => {
  const boxShadow =
    size !== 'large'
      ? resizeBoxShadow(initialBoxShadow, SIZES[size])
      : initialBoxShadow

  return (
    <S.Wrapper mode={mode} size={size}>
      {shape && (
        <S.ShapeBlock boxShadow={boxShadow} shape={shape} size={size} />
      )}
    </S.Wrapper>
  )
}
export default Shadow
