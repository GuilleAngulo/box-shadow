import { GalleryProps } from 'components/Gallery'
import { getAllBoxShadows, getLikesCount } from 'services/boxShadows'
import GalleryTemplate from 'templates/GalleryTemplate'

export default function BoxShadow({ boxShadowList }: GalleryProps) {
  return <GalleryTemplate boxShadowList={boxShadowList} />
}

export async function getStaticProps() {
  const boxShadowsData = await getAllBoxShadows()

  if (!boxShadowsData) {
    throw new Error(`Error retrieving box shadows.`)
  }

  const promises = boxShadowsData.map(async (item) => ({
    ...item,
    likes: await getLikesCount(item.id)
  }))

  const boxShadowList = await Promise.all(promises)

  return {
    props: {
      boxShadowList
    },
    revalidate: 200
  }
}
