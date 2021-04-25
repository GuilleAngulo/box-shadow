import InputRange from 'components/InputRange'
import {
  HORIZONTAL_OFFSET_RANGES,
  VERTICAL_OFFSET_RANGES,
  BLUR_RADIUS_RANGES,
  SPREAD_RADIUS_RANGES
} from 'utils/shadow'
import * as S from './styles'
import { BlurOn } from '@styled-icons/material-outlined'
import { ColorFill } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/material-outlined'
import {
  MoveHorizontal,
  MoveVertical,
  Move
} from '@styled-icons/boxicons-regular'
import { useBoxShadow } from 'hooks/use-box-shadow'
import Color from 'components/Color'
import Checkbox from 'components/Checkbox'
import { memo } from 'react'
import VisibilityButton from 'components/VisibilityButton'

export type ToolItemProps = {
  index: number
  horizontalOffset: number
  verticalOffset: number
  blurRadius: number
  spreadRadius: number
  inset?: boolean
  visibility?: boolean
}

const ToolItem = ({
  index,
  horizontalOffset,
  verticalOffset,
  blurRadius,
  spreadRadius,
  inset,
  visibility
}: ToolItemProps) => {
  const { setBoxShadowProperty, removeBoxShadow } = useBoxShadow()

  return (
    <S.Item
      key={index}
      aria-label={`Tool for Box Shadow at level ${index}`}
      visibilityHidden={!visibility}
    >
      <S.Header>
        <VisibilityButton index={index} visible={visibility} />
        <S.Delete
          aria-label={`Delete Box Shadow at level ${index}`}
          onClick={() => removeBoxShadow(index)}
        >
          <Close width={24} />
        </S.Delete>
      </S.Header>
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
      <Color index={index} label="Color - Opacity" icon={<ColorFill />} />
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
export default ToolItem

// // the custom comparison function
// const comparisonFn = function (
//   prevProps: ToolItemProps,
//   nextProps: ToolItemProps
// ) {
//   return prevProps.index === nextProps.index &&
// }
// // exporting the memoized function component
// export default memo(ToolItem, comparisonFn)
