import { useRouter } from 'next/router'
import { getBoxShadowBySlug, getSlugs } from 'services/boxShadows'
import { AuthoredPreset } from 'types'
import { GetStaticPropsContext } from 'next'
import { resetServerContext } from 'react-beautiful-dnd'
import HomeTemplate from 'templates/HomeTemplate'

export type BoxShadowProps = {
  initialPreset?: AuthoredPreset
}

export default function BoxShadow({ initialPreset }: BoxShadowProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <HomeTemplate initialPreset={initialPreset} />
}

export async function getStaticProps({
  params
}: GetStaticPropsContext<{ slug: string }>) {
  const { data: initialPreset } = await getBoxShadowBySlug(params!.slug)

  resetServerContext()

  return {
    props: {
      initialPreset
    },
    revalidate: 100
  }
}

export async function getStaticPaths() {
  const LIMIT = 10

  const { data: slugs } = await getSlugs(LIMIT)
  const paths = slugs?.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}
