import HomeTemplate from 'templates/HomeTemplate'
import { getFeaturedBoxShadow } from 'services/boxShadows'
import { Preset } from 'types'

export type HomeProps = {
  featured?: Preset
}

export default function Home({ featured }: HomeProps) {
  return <HomeTemplate featured={featured} />
}

export async function getStaticProps() {
  const featured = await getFeaturedBoxShadow()

  return {
    revalidate: 60,
    props: {
      featured
    }
  }
}
