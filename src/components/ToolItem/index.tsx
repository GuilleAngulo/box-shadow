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
import VisibilityButton from 'components/VisibilityButton'
import { toCamelCase } from 'utils/helpers'
import { BoxShadowKeyProps, RGBAProps } from 'types'

export type ToolItemProps = {
  index: number
  horizontalOffset: number
  verticalOffset: number
  blurRadius: number
  spreadRadius: number
  color: RGBAProps
  inset?: boolean
  visibility?: boolean
}

const ToolItem = ({
  index,
  horizontalOffset,
  verticalOffset,
  blurRadius,
  spreadRadius,
  color,
  inset,
  visibility
}: ToolItemProps) => {
  const { setBoxShadowProperty, removeBoxShadow } = useBoxShadow()

  const handleChange = (
    index: number,
    property: string,
    value?: number | string
  ) => {
    const boxShadowProp = toCamelCase(property) as BoxShadowKeyProps
    setBoxShadowProperty(index, boxShadowProp, value)
  }

  return (
    <S.Item
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
        onInput={(property: string, value: number) => {
          handleChange(index, property, value)
        }}
      />
      <InputRange
        label="Vertical Offset"
        name="vertical-offset"
        min={VERTICAL_OFFSET_RANGES[0]}
        max={VERTICAL_OFFSET_RANGES[1]}
        initialValue={verticalOffset}
        icon={<MoveVertical />}
        onInput={(property: string, value: number) => {
          handleChange(index, property, value)
        }}
      />
      <InputRange
        label="Blur Radius"
        name="blur-radius"
        min={BLUR_RADIUS_RANGES[0]}
        max={BLUR_RADIUS_RANGES[1]}
        initialValue={blurRadius}
        icon={<BlurOn />}
        onInput={(property: string, value: number) => {
          handleChange(index, property, value)
        }}
      />
      <InputRange
        label="Spread Radius"
        name="spread-radius"
        min={SPREAD_RADIUS_RANGES[0]}
        max={SPREAD_RADIUS_RANGES[1]}
        initialValue={spreadRadius}
        icon={<Move />}
        onInput={(property: string, value: number) => {
          handleChange(index, property, value)
        }}
      />
      <Color
        index={index}
        label="Color - Opacity"
        icon={<ColorFill />}
        initialColor={color}
        initialOpacity={Math.round(color?.alpha * 100)}
        handleOpacity={(property: string, value: number) => {
          handleChange(index, property, value)
        }}
        handleColor={(property: string, value: string) => {
          handleChange(index, property, value)
        }}
      />
      <Checkbox
        onCheck={() => handleChange(index, 'inset')}
        isChecked={inset}
        name={`inset ${index}`}
        labelFor={`inset ${index}`}
        label="Inset"
      />
      <S.Index aria-label={`Box Shadow level ${index + 1}`}>
        {index + 1}
      </S.Index>
    </S.Item>
  )
}
export default ToolItem
