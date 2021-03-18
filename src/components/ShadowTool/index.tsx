import Checkbox from 'components/Checkbox'
import Color from 'components/Color'
import InputRange from 'components/InputRange'
import { useBoxShadow } from 'hooks/use-box-shadow'
import {
  HORIZONTAL_OFFSET_RANGES,
  VERTICAL_OFFSET_RANGES,
  BLUR_RADIUS_RANGES,
  SPREAD_RADIUS_RANGES
} from 'utils/shadow'

import {
  MoveHorizontal,
  MoveVertical,
  Move
} from '@styled-icons/boxicons-regular'
import { BlurOn } from '@styled-icons/material-outlined'
import { Delete } from '@styled-icons/typicons'
import * as S from './styles'

export type ShadowToolProps = {
  index: number
}

const ShadowTool = ({ index = 0 }: ShadowToolProps) => {
  const {
    boxShadow = [],
    setBoxShadowProperty,
    removeBoxShadow
  } = useBoxShadow()

  const horizontalOffset = boxShadow[index]?.horizontalOffset
  const verticalOffset = boxShadow[index]?.verticalOffset
  const blurRadius = boxShadow[index]?.blurRadius
  const spreadRadius = boxShadow[index]?.spreadRadius
  const inset = boxShadow[index]?.inset

  return (
    <S.Item key={index}>
      <S.Delete onClick={() => removeBoxShadow(index)}>
        <Delete width={20} />
      </S.Delete>
      <InputRange
        label="Horizontal Offset"
        name="horizontal-offset"
        min={HORIZONTAL_OFFSET_RANGES[0]}
        max={HORIZONTAL_OFFSET_RANGES[1]}
        initialValue={horizontalOffset}
        icon={<MoveHorizontal />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'horizontalOffset', value)
        }
      />
      <InputRange
        label="Vertical Offset"
        name="vertical-offset"
        min={VERTICAL_OFFSET_RANGES[0]}
        max={VERTICAL_OFFSET_RANGES[1]}
        initialValue={verticalOffset}
        icon={<MoveVertical />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'verticalOffset', value)
        }
      />
      <InputRange
        label="Blur Radius"
        name="blur-radius"
        min={BLUR_RADIUS_RANGES[0]}
        max={BLUR_RADIUS_RANGES[1]}
        initialValue={blurRadius}
        icon={<BlurOn />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'blurRadius', value)
        }
      />
      <InputRange
        label="Spread Radius"
        name="spread-radius"
        min={SPREAD_RADIUS_RANGES[0]}
        max={SPREAD_RADIUS_RANGES[1]}
        initialValue={spreadRadius}
        icon={<Move />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'spreadRadius', value)
        }
      />
      <Color index={index} label="Color | Opacity" />
      <Checkbox
        onCheck={() => setBoxShadowProperty(index, 'inset')}
        isChecked={inset}
        label="Inset"
      />
      <S.Index aria-label={`Box Shadow level ${index + 1}`}>
        {index + 1}
      </S.Index>
    </S.Item>
  )
}
export default ShadowTool
