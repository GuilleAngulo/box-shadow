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

const GalleryShadow = ({
  size = 'large',
  initialBoxShadow,
  shape = 'square',
  mode = 'light'
}: BoxShadowProps) => {
  const boxShadow =
    size !== 'large'
      ? resizeBoxShadow(initialBoxShadow, SIZES[size])
      : initialBoxShadow

  return (
    <S.Wrapper mode={mode} size={size}>
      {boxShadow ? (
        <S.ShapeBlock boxShadow={boxShadow} shape={shape} size={size} />
      ) : (
        <S.Empty shape={shape} size={size} mode={mode} />
      )}
    </S.Wrapper>
  )
}
export default GalleryShadow
