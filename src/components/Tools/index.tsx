import { useBoxShadow } from 'hooks/use-box-shadow'
import Checkbox from 'components/Checkbox'
import Color from 'components/Color'
import InputRange from 'components/InputRange'
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
import { ColorFill } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/material-outlined'
import * as S from './styles'

import { LayerPlus as AddIcon } from '@styled-icons/boxicons-regular'
import ToolItem from 'components/ToolItem'
import { useEffect, useRef, useState } from 'react'

const Tools = () => {
  const {
    boxShadow = [],
    addBoxShadow,
    setBoxShadowProperty,
    removeBoxShadow,
    setVisible
  } = useBoxShadow()

  const [scroll, setScroll] = useState(false)
  const addShadowRef = useRef<HTMLLIElement>(null)

  const scrollToBottom = () => {
    if (addShadowRef.current && scroll) {
      addShadowRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom()
    setScroll(false)
  }, [scroll])

  return (
    <S.Wrapper>
      <S.ToolsWrapper>
        {boxShadow.map((item, index) => {
          const horizontalOffset = boxShadow[index]?.horizontalOffset
          const verticalOffset = boxShadow[index]?.verticalOffset
          const blurRadius = boxShadow[index]?.blurRadius
          const spreadRadius = boxShadow[index]?.spreadRadius
          const inset = boxShadow[index]?.inset

          const props = {
            horizontalOffset: boxShadow[index]?.horizontalOffset,
            verticalOffset: boxShadow[index]?.verticalOffset,
            blurRadius: boxShadow[index]?.blurRadius,
            spreadRadius: boxShadow[index]?.spreadRadius,
            inset: boxShadow[index]?.inset,
            visibility: boxShadow[index]?.visible
          }
          return (
            <ToolItem key={index} index={index} {...props} />
            // <S.Item
            //   key={index}
            //   aria-label={`Tool for Box Shadow Level ${index}`}
            // >
            //   <button onClick={() => setVisible(index)}>Visible</button>
            //   <S.Delete
            //     aria-label={`Delete Box Shadow Level ${index}`}
            //     onClick={() => removeBoxShadow(index)}
            //   >
            //     <Close width={24} />
            //   </S.Delete>
            //   <InputRange
            //     label="Horizontal Offset"
            //     name="horizontal-offset"
            //     min={HORIZONTAL_OFFSET_RANGES[0]}
            //     max={HORIZONTAL_OFFSET_RANGES[1]}
            //     initialValue={horizontalOffset}
            //     icon={<MoveHorizontal />}
            //     onInput={(value: number) =>
            //       setBoxShadowProperty(index, 'horizontalOffset', value)
            //     }
            //   />
            //   <InputRange
            //     label="Vertical Offset"
            //     name="vertical-offset"
            //     min={VERTICAL_OFFSET_RANGES[0]}
            //     max={VERTICAL_OFFSET_RANGES[1]}
            //     initialValue={verticalOffset}
            //     icon={<MoveVertical />}
            //     onInput={(value: number) =>
            //       setBoxShadowProperty(index, 'verticalOffset', value)
            //     }
            //   />
            //   <InputRange
            //     label="Blur Radius"
            //     name="blur-radius"
            //     min={BLUR_RADIUS_RANGES[0]}
            //     max={BLUR_RADIUS_RANGES[1]}
            //     initialValue={blurRadius}
            //     icon={<BlurOn />}
            //     onInput={(value: number) =>
            //       setBoxShadowProperty(index, 'blurRadius', value)
            //     }
            //   />
            //   <InputRange
            //     label="Spread Radius"
            //     name="spread-radius"
            //     min={SPREAD_RADIUS_RANGES[0]}
            //     max={SPREAD_RADIUS_RANGES[1]}
            //     initialValue={spreadRadius}
            //     icon={<Move />}
            //     onInput={(value: number) =>
            //       setBoxShadowProperty(index, 'spreadRadius', value)
            //     }
            //   />
            //   <Color
            //     index={index}
            //     label="Color - Opacity"
            //     icon={<ColorFill />}
            //   />
            //   <Checkbox
            //     onCheck={() => setBoxShadowProperty(index, 'inset')}
            //     isChecked={inset}
            //     label="Inset"
            //   />
            //   <S.Index aria-label={`Box Shadow level ${index + 1}`}>
            //     {index + 1}
            //   </S.Index>
            // </S.Item>
          )
        })}
        <S.Add
          role="button"
          aria-label="create new box shadow"
          ref={addShadowRef}
          onClick={() => {
            addBoxShadow()
            setScroll(true)
          }}
        >
          <AddIcon width={50} />
        </S.Add>
      </S.ToolsWrapper>
    </S.Wrapper>
  )
}

export default Tools
