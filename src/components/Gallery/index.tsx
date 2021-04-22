import Link from 'next/link'

import { Author } from 'types'
import { definitions } from 'types/supabase'

import GalleryShadow from 'components/GalleryShadow'

import { CalendarAlt, Medal } from '@styled-icons/boxicons-regular'

import * as S from './styles'
import { useAuth } from 'hooks/use-auth'
import LikeButton from 'components/LikeButton'
import { useEffect, useState } from 'react'
import { getLikesByUser } from 'services/likes'

export type GalleryProps = {
  boxShadowList: [
    Omit<definitions['box_shadows'], 'user_id'> & {
      id: number
      user_id?: Author
      likes?: number
      featured?: boolean
      hasLike?: boolean
    }
  ]
}

const Gallery = ({ boxShadowList }: GalleryProps) => {
  const { user } = useAuth()
  const [likedIds, setLikedIds] = useState<number[]>([])

  //TO DO GET USER'S LIKES TO ITERATE AND FILL LIKED DESIGNS

  useEffect(() => {
    if (user) {
      getLikesByUser(user.id)
        .then(({ data, error }) => {
          if (error) throw error
          !!data && setLikedIds(() => data.map((like) => like.box_shadow_id))
        })
        .catch((err) => console.log(err))
    }
  }, [user])

  const parseBoxShadow = (boxShadow: string) => {
    try {
      return JSON.parse(boxShadow)
    } catch {
      return boxShadow
    }
  }

  if (!Array.isArray(boxShadowList)) return null

  return (
    <S.Wrapper>
      {boxShadowList.map((boxShadow) => {
        const hasLike = likedIds.includes(boxShadow.id)

        return (
          <S.Item key={boxShadow.id}>
            <S.Title>{boxShadow.title}</S.Title>
            <S.Image featured={boxShadow?.featured}>
              {boxShadow?.featured && (
                <S.FeaturedIcon>
                  <Medal />
                </S.FeaturedIcon>
              )}
              <Link href={`/${boxShadow.slug}`}>
                <S.Link>
                  <GalleryShadow
                    aria-label={`Design name: ${boxShadow.title}`}
                    initialBoxShadow={parseBoxShadow(boxShadow.box_shadow)}
                    size="medium"
                    shape={boxShadow.shape}
                    mode={boxShadow.theme}
                  />
                </S.Link>
              </Link>
            </S.Image>
            <S.Info>
              {boxShadow?.user_id?.name && (
                <S.Author>
                  <S.AuthorName>
                    Design by <span>{boxShadow.user_id?.name}</span>
                  </S.AuthorName>
                  <S.AuthorPhoto
                    src={boxShadow.user_id?.avatar_url}
                    alt={`${boxShadow.user_id?.name}'s photo`}
                  />
                </S.Author>
              )}
              <S.Date dateTime={boxShadow.inserted_at}>
                <CalendarAlt />
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'long'
                }).format(new Date(boxShadow.inserted_at))}
              </S.Date>
              <S.Footer>
                {user && (
                  <LikeButton
                    id={boxShadow.id}
                    likesCount={boxShadow.likes || 0}
                    hasLike={hasLike}
                    setLikedIds={setLikedIds}
                  />
                )}
              </S.Footer>
            </S.Info>
          </S.Item>
        )
      })}
    </S.Wrapper>
  )
}

export default Gallery
