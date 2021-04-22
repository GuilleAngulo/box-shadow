import HomeTemplate from 'templates/HomeTemplate'
import { getFeaturedBoxShadow } from 'services/boxShadows'
import { AuthoredPreset } from 'types'

export type HomeProps = {
  featured?: AuthoredPreset
}

export default function Home({ featured }: HomeProps) {
  return <HomeTemplate featured={featured} />
}

export async function getStaticProps() {
  const { data: featured } = await getFeaturedBoxShadow()

  return {
    revalidate: 200,
    props: {
      featured
    }
  }
}
