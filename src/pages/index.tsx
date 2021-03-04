import Container from 'components/Container'
// import mock from 'components/Shadow/mock'
import mock from 'components/Shadow/examples'

export type HomeProps = {
  boxShadow: ShadowProps[]
}

export default function Home({ boxShadow }: HomeProps) {
  return <Container boxShadow={boxShadow} />
}

export type RGBAProps = {
  red: number
  green: number
  blue: number
  alpha: number
}

export type ShadowProps = {
  horizontalOffset: number
  verticalOffset: number
  blurRadius: number
  spreadRadius: number
  color: RGBAProps
}

export async function getStaticProps() {
  return {
    props: {
      boxShadow: mock
    }
  }
}
