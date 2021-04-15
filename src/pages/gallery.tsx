import { GalleryProps } from 'components/Gallery'
import {
  getAllBoxShadows,
  getLikesCount,
  getMostPopularBoxShadow
} from 'services/boxShadows'
import GalleryTemplate from 'templates/GalleryTemplate'

export default function BoxShadow({ boxShadowList }: GalleryProps) {
  return <GalleryTemplate boxShadowList={boxShadowList} />
}

export async function getStaticProps() {
  const boxShadowsData = await getAllBoxShadows()

  if (!boxShadowsData) {
    throw new Error(`Error retrieving box shadows.`)
  }

  const { box_shadow_id } = await getMostPopularBoxShadow()

  const promises = boxShadowsData.map(async (item) => ({
    ...item,
    likes: await getLikesCount(item.id),
    ...(box_shadow_id === item.id && {
      featured: true
    })
  }))

  const boxShadowList = await Promise.all(promises)

  return {
    props: {
      boxShadowList
    },
    revalidate: 200
  }
}
