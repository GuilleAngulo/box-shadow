import Radio from 'components/Radio'
import { useEffect, useState } from 'react'
import { Shape } from 'types'
import * as S from './styles'

export type Field = {
  label: string
  name: Shape
}

export type ShapeSidebarProps = {
  items: Field[]
  initialValue?: Shape
  onFilter: (value: Shape) => void
}

const ShapeSidebar = ({
  items,
  onFilter,
  initialValue = 'square'
}: ShapeSidebarProps) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    onFilter(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const handleRadio = (value: Shape) => {
    setValue(value)
  }
  return (
    <S.Wrapper>
      {items.map((item) => (
        <Radio
          key={item.name}
          id={item.name}
          value={item.name}
          name="shape"
          label={item.label}
          labelFor={item.name}
          defaultChecked={String(item.name) === String(value)}
          onChange={() => handleRadio(item.name)}
        />
      ))}
    </S.Wrapper>
  )
}

export default ShapeSidebar
