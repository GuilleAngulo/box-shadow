import GalleryItem, { GalleryItemProps } from 'components/GalleryItem'
import { LikesProvider } from 'hooks/use-likes'
import * as S from './styles'

export type GalleryProps = {
  boxShadowList: [GalleryItemProps]
}

const Gallery = ({ boxShadowList }: GalleryProps) => {
  if (!Array.isArray(boxShadowList)) return null

  return (
    <LikesProvider>
      <S.Wrapper>
        {boxShadowList.map((boxShadow) => (
          <GalleryItem key={boxShadow.id} {...boxShadow} />
        ))}
      </S.Wrapper>
    </LikesProvider>
  )
}

export default Gallery
