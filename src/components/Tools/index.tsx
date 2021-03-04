import { Dispatch, SetStateAction } from 'react'
import { ShadowProps } from 'components/Shadow'
import * as S from './styles'
import InputRange from 'components/InputRange'
import Checkbox from 'components/Checkbox'
import {
  MoveHorizontal,
  MoveVertical,
  Move
} from '@styled-icons/boxicons-regular'
import { BlurOn } from '@styled-icons/material-outlined'
import Color from 'components/Color'

export type ToolProps = {
  boxShadow: ShadowProps[]
  setBoxShadow?: Dispatch<SetStateAction<ShadowProps[]>>
}

const Tools = ({ boxShadow, setBoxShadow }: ToolProps) => {
  const onInput = (value: number, index: number, key: string) => {
    setBoxShadow &&
      setBoxShadow((prev) => {
        const arr = [...prev]
        const obj = arr[index]
        const hasProperty = Object.prototype.hasOwnProperty.call(obj, key)
        if (hasProperty) {
          arr[index] = {
            ...obj,
            [key]: value
          }
        }
        return arr
      })
  }
  return (
    <S.Wrapper>
      {boxShadow.map(
        (
          { horizontalOffset, verticalOffset, blurRadius, spreadRadius },
          index
        ) => (
          <S.Item key={index}>
            <h2>Shadow {index + 1}</h2>
            <InputRange
              label="Horizontal Offset"
              name="horizontal-offset"
              min={-100}
              max={100}
              initialValue={horizontalOffset}
              icon={<MoveHorizontal />}
              onInput={(value: number) =>
                onInput(value, index, 'horizontalOffset')
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
                onInput(value, index, 'verticalOffset')
              }
            />
            <InputRange
              label="Blur Radius"
              name="blur-radius"
              min={0}
              max={100}
              initialValue={blurRadius}
              icon={<BlurOn />}
              onInput={(value: number) => onInput(value, index, 'blurRadius')}
            />
            <InputRange
              label="Spread Radius"
              name="spread-radius"
              min={-10}
              max={10}
              initialValue={spreadRadius}
              icon={<Move />}
              onInput={(value: number) => onInput(value, index, 'spreadRadius')}
            />
            <Color
              boxShadow={boxShadow}
              setBoxShadow={setBoxShadow}
              index={index}
            />
            <Checkbox
              onCheck={() =>
                setBoxShadow &&
                setBoxShadow((prev) => {
                  const arr = [...prev]
                  arr[index].inset = !arr[index].inset
                  return arr
                })
              }
              isChecked={boxShadow[index].inset}
              label="Inset"
              labelColor="black"
            />
          </S.Item>
        )
      )}
    </S.Wrapper>
  )
}

export default Tools
