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

  const handleLike = async () => {
    if (user) {
      setLoading(true)

      const { data: createdLike } = await createLike({
        box_shadow_id: id,
        user_id: user?.id
      })

      createdLike &&
        setLikedIds((likedIds) => [
          ...likedIds,
          Number(createdLike?.box_shadow_id)
        ])

      /** Saving another API Call */
      setLikes((numberLikes) => numberLikes + 1)

      /** Refresh Likes count */
      // const { data: numberLikes, error } = await getLikesCount(id)
      // console.log(error)
      // if (numberLikes !== null && !isNaN(numberLikes)) {
      //   setLikes(numberLikes)
      // }

      setLoading(false)
    }
  }

  const handleDislike = async () => {
    if (user) {
      setLoading(true)

      const { data: deletedLike } = await removeLike({
        box_shadow_id: id,
        user_id: user?.id
      })

      deletedLike &&
        setLikedIds((likedIds) =>
          likedIds.filter((id) => id !== deletedLike?.box_shadow_id)
        )

      /** Saving another API Call */
      if (likes > 0) {
        setLikes((numberLikes) => numberLikes - 1)
      }
      /** Refresh Likes count */
      // const { data: numberLikes, error } = await getLikesCount(id)
      // console.log(error)
      // if (numberLikes !== null && !isNaN(numberLikes)) {
      //   setLikes(numberLikes)
      // }

      setLoading(false)
    }
  }

  if (!user) return null
  return (
    <>
      <S.Likes>
        <Heart />
        {new Intl.NumberFormat('en-GB', {
          notation: 'compact',
          compactDisplay: 'short'
        }).format(likes)}
      </S.Likes>
      <Button
        variant
        size="medium"
        icon={hasLike ? <FullHeart color="#f20089" /> : <EmptyHeart />}
        onClick={hasLike ? handleDislike : handleLike}
        aria-label={hasLike ? 'Dislike' : 'Like'}
        disabled={loading}
        loading={loading}
      >
        <S.ButtonContent>{hasLike ? 'Dislike' : 'Awesome'}</S.ButtonContent>
      </Button>
    </>
  )
}
export default LikeButton
