import Container from 'components/Container'
import mock from 'components/Shadow/examples'
import { ShadowProps } from 'types'

export type HomeProps = {
  boxShadow: ShadowProps[]
}

export default function Home({ boxShadow }: HomeProps) {
  return <Container />
}

export async function getStaticProps() {
  return {
    props: {
      boxShadow: mock
    }
  }
}
