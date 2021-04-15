import { Author } from 'types'
import { definitions } from 'types/supabase'

import GalleryShadow from 'components/GalleryShadow'

import { Heart } from '@styled-icons/typicons'

import * as S from './styles'
import TopTools from 'components/TopTools'

export type BoxShadowProps = {
  boxShadows: [
    Omit<definitions['box_shadows'], 'user_id'> & {
      id: number
      user_id?: Author
      likes?: number
    }
  ]
}

const GalleryTemplate = ({ boxShadows }: BoxShadowProps) => (
  <S.Wrapper>
    <TopTools />
    <S.ItemsWrapper>
      {boxShadows.map((boxShadow) => (
        <S.Item key={boxShadow.id}>
          <S.Title>
            {boxShadow.title} by {boxShadow.user_id?.name}
          </S.Title>
          <S.Image>
            <GalleryShadow
              aria-label={`Design: ${boxShadow.title}`}
              initialBoxShadow={JSON.parse(boxShadow.box_shadow)}
              size="medium"
              shape={boxShadow.shape}
              mode={boxShadow.theme}
            />
          </S.Image>
          <S.Info>
            <S.Date>
              {new Intl.DateTimeFormat('en-GB').format(
                new Date(boxShadow.inserted_at)
              )}
            </S.Date>
            <S.Likes>
              <Heart />
              {new Intl.NumberFormat('en-GB', {
                notation: 'compact',
                compactDisplay: 'short'
              }).format(boxShadow.likes || 0)}
            </S.Likes>
            {boxShadow?.user_id?.name && (
              <S.Author>
                <S.AuthorName>
                  by <span>{boxShadow.user_id?.name}</span>
                </S.AuthorName>

                <S.AuthorPhoto
                  src={boxShadow.user_id?.avatar_url}
                  alt={`${boxShadow.user_id?.name}'s photo`}
                />
              </S.Author>
            )}
          </S.Info>
        </S.Item>
      ))}
    </S.ItemsWrapper>
  </S.Wrapper>
)

export default GalleryTemplate
