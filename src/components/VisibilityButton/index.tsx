import * as S from './styles'
import { Eye, EyeOff } from '@styled-icons/heroicons-solid'
import { useBoxShadow } from 'hooks/use-box-shadow'

export type VisibilityButtonProps = {
  index: number
  visible?: boolean
}

const VisibilityButton = ({ visible, index }: VisibilityButtonProps) => {
  const { setVisible } = useBoxShadow()
  return (
    <S.Visible
      aria-label={
        visible
          ? `Hide Box Shadow at index ${index}`
          : `Show Box Shadow at index ${index}`
      }
      onClick={() => setVisible(index)}
    >
      {visible ? <Eye width={18} /> : <EyeOff width={18} />}
    </S.Visible>
  )
}

export default VisibilityButton
