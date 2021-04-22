import { GalleryProps } from 'components/Gallery'
import {
  getAllBoxShadows,
  getLikesCount,
  getBoxShadowOrderByLikes
} from 'services/boxShadows'
import GalleryTemplate from 'templates/GalleryTemplate'

export default function BoxShadow({ boxShadowList }: GalleryProps) {
  return <GalleryTemplate boxShadowList={boxShadowList} />
}

export async function getStaticProps() {
  const { data: boxShadowsData, error } = await getAllBoxShadows()

  if (!boxShadowsData) {
    throw new Error(`Error while building gallery static page: ${error}`)
  }

  const { data } = await getBoxShadowOrderByLikes()

  const featuredId = data?.box_shadow_id

  const promises = boxShadowsData.map(async (item) => {
    const { data: likes } = await getLikesCount(item.id)
    return {
      ...item,
      likes,
      ...(featuredId === item.id && {
        featured: true
      })
    }
  })

  const boxShadowList = await Promise.all(promises)

  return {
    props: {
      boxShadowList: boxShadowList ?? null
    },
    revalidate: 200
  }
}
