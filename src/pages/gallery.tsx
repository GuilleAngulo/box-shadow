import { getAllBoxShadows, getLikesCount } from 'services/boxShadows'
import GalleryTemplate, { BoxShadowProps } from 'templates/GalleryTemplate'

export default function BoxShadow({ boxShadows }: BoxShadowProps) {
  return <GalleryTemplate boxShadows={boxShadows} />
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

  const boxShadows = await Promise.all(promises)

  return {
    props: {
      boxShadows
    },
    revalidate: 200
  }
}
