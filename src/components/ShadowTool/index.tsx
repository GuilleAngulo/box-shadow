import Checkbox from 'components/Checkbox'
import Color from 'components/Color'
import InputRange from 'components/InputRange'
import { useBoxShadow } from 'hooks/use-box-shadow'
import {
  MoveHorizontal,
  MoveVertical,
  Move
} from '@styled-icons/boxicons-regular'
import { BlurOn } from '@styled-icons/material-outlined'
import { DeleteOutline as Delete } from '@styled-icons/typicons'
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
        min={-100}
        max={100}
        initialValue={horizontalOffset}
        icon={<MoveHorizontal />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'horizontalOffset', value)
        }
      />
      <InputRange
        label="Vertical Offset"
        name="vertical-offset"
        min={-100}
        max={100}
        initialValue={verticalOffset}
        icon={<MoveVertical />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'verticalOffset', value)
        }
      />
      <InputRange
        label="Blur Radius"
        name="blur-radius"
        min={0}
        max={100}
        initialValue={blurRadius}
        icon={<BlurOn />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'blurRadius', value)
        }
      />
      <InputRange
        label="Spread Radius"
        name="spread-radius"
        min={-10}
        max={10}
        initialValue={spreadRadius}
        icon={<Move />}
        onInput={(value: number) =>
          setBoxShadowProperty(index, 'spreadRadius', value)
        }
      />
      <Color index={index} />
      <Checkbox
        onCheck={() => setBoxShadowProperty(index, 'inset')}
        isChecked={inset}
        label="Inset"
        labelColor="black"
      />
    </S.Item>
  )
}
export default ShadowTool
