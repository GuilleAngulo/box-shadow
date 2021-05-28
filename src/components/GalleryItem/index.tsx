import Link from 'next/link'

import GalleryShadow from 'components/GalleryShadow'
import LikeButton from 'components/LikeButton'

import { parseBoxShadow } from 'utils/helpers'

import * as S from './styles'

import { Author } from 'types'
import { definitions } from 'types/supabase'

import { Medal } from '@styled-icons/boxicons-regular'
import useTimeAgo from 'hooks/use-time-ago'

export type GalleryItemProps = Omit<definitions['box_shadows'], 'user_id'> & {
  id: number
  user_id?: Author
  likes?: number
  featured?: boolean
}

const GalleryItem = ({
  id,
  box_shadow,
  inserted_at,
  slug,
  title,
  featured,
  likes,
  shape,
  theme,
  user_id
}: GalleryItemProps) => {
  const timestamp = new Date(inserted_at).getTime()
  const timeAgo = useTimeAgo(timestamp)

  return (
    <S.Item key={id}>
      <S.Title>{title}</S.Title>
      <S.Image featured={featured || false}>
        {featured && (
          <S.FeaturedIcon>
            <Medal />
          </S.FeaturedIcon>
        )}
        <Link href={`/${slug}`}>
          <S.Link>
            <GalleryShadow
              aria-label={`Design name: ${title}`}
              initialBoxShadow={parseBoxShadow(box_shadow)}
              size="medium"
              shape={shape}
              mode={theme}
            />
          </S.Link>
        </Link>
      </S.Image>
      <S.Info>
        {user_id?.name && (
          <S.Author>
            <S.AuthorName>
              Design by <span>{user_id?.name}</span>
            </S.AuthorName>
            <S.AuthorPhoto
              src={user_id?.avatar_url}
              alt={`${user_id?.name}'s photo`}
            />
          </S.Author>
        )}
        <S.Date
          dateTime={inserted_at}
          title={new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          }).format(new Date(inserted_at))}
        >
          {timeAgo}
        </S.Date>
        <S.Footer>
          <LikeButton id={id} likesCount={likes || 0} />
        </S.Footer>
      </S.Info>
    </S.Item>
  )
}

export default GalleryItem
