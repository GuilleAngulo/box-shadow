import HomeTemplate from 'templates/HomeTemplate'
import { getFeaturedBoxShadow } from 'services/boxShadows'
import { AuthoredPreset } from 'types'
import { resetServerContext } from 'react-beautiful-dnd'
import OpenGraph from 'components/OpenGraph'

export type HomeProps = {
  featured?: AuthoredPreset
}

export default function Home({ featured }: HomeProps) {
  return (
    <>
      <OpenGraph
        title={'Box Shadow Tool'}
        description={'CSS Box Shadow Tool'}
      />
      <HomeTemplate featured={featured} />
    </>
  )
}

export async function getStaticProps() {
  const { data: featured } = await getFeaturedBoxShadow()

  // Avoid client-server mismatch for react-beautiful-dnd ensuring that context state does
  // not persist across multiple renders
  resetServerContext()

  return {
    revalidate: 200,
    props: {
      featured
    }
  }
}
