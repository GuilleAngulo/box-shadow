import Link from 'next/link'

import { Author } from 'types'
import { definitions } from 'types/supabase'

import Button from 'components/Button'
import GalleryShadow from 'components/GalleryShadow'

import {
  CalendarAlt,
  Heart as EmptyHeart,
  Medal
} from '@styled-icons/boxicons-regular'

import { Heart as FullHeart } from '@styled-icons/boxicons-solid'
import { Heart } from '@styled-icons/typicons'
import * as S from './styles'
import { useAuth } from 'hooks/use-auth'
import { createLike } from 'services/likes'

export type GalleryProps = {
  boxShadowList: [
    Omit<definitions['box_shadows'], 'user_id'> & {
      id: number
      user_id?: Author
      likes?: number
      featured?: boolean
    }
  ]
}

const Gallery = ({ boxShadowList }: GalleryProps) => {
  const { user } = useAuth()

  //TO DO GET USER'S LIKES TO ITERATE AND FILL LIKED DESIGNS

  const handleLike = async (boxShadowId: number) => {
    if (user) {
      const { data, error } = await createLike({
        user_id: user.id,
        box_shadow_id: boxShadowId
      })

      console.log(data, error)
    }
  }

  return (
    <S.Wrapper>
      {boxShadowList.map((boxShadow) => (
        <S.Item key={boxShadow.id}>
          <S.Title>{boxShadow.title}</S.Title>
          <S.Image featured={boxShadow?.featured}>
            {boxShadow?.featured && (
              <S.FeaturedIcon>
                <Medal />
              </S.FeaturedIcon>
            )}
            <Link href={`/${boxShadow.slug}`} passHref>
              <a>
                <GalleryShadow
                  aria-label={`Design name: ${boxShadow.title}`}
                  initialBoxShadow={JSON.parse(boxShadow.box_shadow)}
                  size="medium"
                  shape={boxShadow.shape}
                  mode={boxShadow.theme}
                />
              </a>
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
              <S.Likes>
                <Heart />
                {new Intl.NumberFormat('en-GB', {
                  notation: 'compact',
                  compactDisplay: 'short'
                }).format(boxShadow.likes || 0)}
              </S.Likes>
              {user && (
                <Button
                  variant
                  size="medium"
                  icon={<EmptyHeart />}
                  onClick={() => handleLike(boxShadow.id)}
                >
                  Awesome
                </Button>
              )}
            </S.Footer>
          </S.Info>
        </S.Item>
      ))}
    </S.Wrapper>
  )
}

export default Gallery
