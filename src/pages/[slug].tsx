import { useRouter } from 'next/router'
import {
  getBoxShadowBySlug,
  getLikesCount,
  getSlugs
} from 'services/boxShadows'
import { Preset } from 'types'
import BoxShadowTemplate from 'templates/BoxShadowTemplate'
import { GetStaticPropsContext } from 'next'

export type BoxShadowProps = {
  boxShadow: Preset
}

export default function BoxShadow({ boxShadow }: BoxShadowProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <BoxShadowTemplate boxShadow={boxShadow} />
}

export async function getStaticProps({
  params
}: GetStaticPropsContext<{ slug: string }>) {
  const boxShadow = await getBoxShadowBySlug(params!.slug)

  if (!boxShadow) {
    throw new Error(`Box Shadow with slug '${params!.slug}' not found`)
  }

  const likes = await getLikesCount(boxShadow.id)

  if (likes) {
    boxShadow.likes = likes
  }

  return {
    props: {
      boxShadow
    },
    revalidate: 100
  }
}

export async function getStaticPaths() {
  const LIMIT = 10

  const slugs = await getSlugs(LIMIT)
  const paths = slugs?.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}
