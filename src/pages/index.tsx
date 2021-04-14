import Container from 'components/Container'
import { getFeaturedBoxShadow } from 'services/boxShadows'
import { Preset } from 'types'

export type IndexProps = {
  featured?: Preset
}

export default function Home({ featured }: IndexProps) {
  return <Container featured={featured} />
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
