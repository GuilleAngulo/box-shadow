import Button from 'components/Button'

import { createLike } from 'services/likes'

import { Heart as EmptyHeart } from '@styled-icons/boxicons-regular'
import { Heart as FullHeart } from '@styled-icons/boxicons-solid'

import * as S from './styles'

export type LikeButtonProps = {
  id: number
}

const LikeButton = ({ id }: LikeButtonProps) => {
  const handleLike = async () => {
    const { data, error } = await createLike(id)

    console.log(data, error)
  }
  return (
    <Button variant size="medium" icon={<EmptyHeart />} onClick={handleLike}>
      Awesome
    </Button>
  )
}
export default LikeButton
