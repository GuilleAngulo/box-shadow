import Button from 'components/Button'

import { createLike, removeLike } from 'services/likes'

import { Heart as EmptyHeart } from '@styled-icons/boxicons-regular'
import { Heart as FullHeart } from '@styled-icons/boxicons-solid'
import { Heart } from '@styled-icons/typicons'

import * as S from './styles'
import { useAuth } from 'hooks/use-auth'
import { Dispatch, SetStateAction, useState } from 'react'
//import { getLikesCount } from 'services/boxShadows'

export type LikeButtonProps = {
  id: number
  likesCount: number
  hasLike?: boolean
  setLikedIds: Dispatch<SetStateAction<number[]>>
}

const LikeButton = ({
  id,
  hasLike = false,
  likesCount,
  setLikedIds
}: LikeButtonProps) => {
  const { user } = useAuth()
  const [likes, setLikes] = useState(likesCount)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

      createdLike &&
        setLikedIds((likedIds) => [
          ...likedIds,
          Number(createdLike?.box_shadow_id)
        ])

      createdLike && setLikes((numberLikes) => numberLikes + 1)

      setLoading(false)
    }
  }

  const handleDislike = async () => {
    if (user) {
      setLoading(true)

      const { data: deletedLike, error } = await removeLike({
        box_shadow_id: id,
        user_id: user?.id
      })

      if (error) {
        setError(error.details)
      }

      setError('')

      deletedLike &&
        setLikedIds((likedIds) =>
          likedIds.filter((id) => id !== deletedLike?.box_shadow_id)
        )

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
