import { useState } from 'react'

import Button from 'components/Button'

import { createLike, deleteLike } from 'services/likes'

import { useAuth } from 'hooks/use-auth'
import { useLikes } from 'hooks/use-likes'

import * as S from './styles'
import { Heart as EmptyHeart } from '@styled-icons/boxicons-regular'
import { Heart as FullHeart } from '@styled-icons/boxicons-solid'
import { Heart } from '@styled-icons/typicons'

export type LikeButtonProps = {
  id: number
  likesCount: number
}

const LikeButton = ({ id, likesCount }: LikeButtonProps) => {
  const { user } = useAuth()
  const { isLiked, addLike, removeLike } = useLikes()
  const [likes, setLikes] = useState(likesCount)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const hasLike = isLiked(id)

  const handleLike = async () => {
    if (user) {
      setLoading(true)

      const { data: createdLike, error } = await createLike({
        box_shadow_id: id,
        user_id: user?.id
      })

      if (error) {
        setError(error.details)
      }

      setError('')

      createdLike && addLike(createdLike?.box_shadow_id)

      createdLike && setLikes((numberLikes) => numberLikes + 1)

      setLoading(false)
    }
  }

  const handleDislike = async () => {
    if (user) {
      setLoading(true)

      const { data: deletedLike, error } = await deleteLike({
        box_shadow_id: id,
        user_id: user?.id
      })

      if (error) {
        setError(error.details)
      }

      setError('')

      deletedLike && removeLike(deletedLike?.box_shadow_id)

      if (likes > 0) {
        deletedLike && setLikes((numberLikes) => numberLikes - 1)
      }

      setLoading(false)
    }
  }

  return (
    <>
      <S.Likes>
        <Heart />
        {new Intl.NumberFormat('en-GB', {
          notation: 'compact',
          compactDisplay: 'short'
        }).format(likes)}
      </S.Likes>
      {user && (
        <Button
          variant
          size="medium"
          icon={hasLike ? <FullHeart color="#f20089" /> : <EmptyHeart />}
          onClick={hasLike ? handleDislike : handleLike}
          aria-label={hasLike ? 'Dislike' : 'Like'}
          disabled={loading}
          loading={loading}
          error={error}
        >
          <S.ButtonContent>{hasLike ? 'Dislike' : 'Awesome'}</S.ButtonContent>
        </Button>
      )}
    </>
  )
}
export default LikeButton
