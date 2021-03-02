import { Dispatch, SetStateAction } from 'react'
import { ShadowProps } from 'components/Shadow'
import * as S from './styles'
import InputRange from 'components/InputRange'

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
            <InputRange
              label="Horizontal Offset"
              name="horizontal-offset"
              min={-100}
              max={100}
              initialValue={horizontalOffset}
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
              onInput={(value: number) => onInput(value, index, 'blurRadius')}
            />
            <InputRange
              label="Spread Radius"
              name="spread-radius"
              min={-10}
              max={10}
              initialValue={spreadRadius}
              onInput={(value: number) => onInput(value, index, 'spreadRadius')}
            />
          </S.Item>
        )
      )}
    </S.Wrapper>
  )
}

export default Tools

// export default Tools
// horizontalOffset: number
// verticalOffset: number
// blurRadius: number
// spreadRadius: number
// color: RGBAProps
// inset?: boolean
