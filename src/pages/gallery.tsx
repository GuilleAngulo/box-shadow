import { GalleryProps } from 'components/Gallery'
import {
  getAllBoxShadows,
  getBoxShadowOrderByLikes,
  populateWithLikes
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

  const boxShadowList = await populateWithLikes(boxShadowsData, featuredId)

  return {
    props: {
      boxShadowList: boxShadowList ?? null
    },
    revalidate: 200
  }
}
