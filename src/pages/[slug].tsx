import { useRouter } from 'next/router'
import { getBoxShadowBySlug, getSlugs } from 'services/boxShadows'
import { getLikesCount } from 'services/likes'
import { AuthoredPreset } from 'types'
import BoxShadowTemplate from 'templates/BoxShadowTemplate'
import { GetStaticPropsContext } from 'next'

export type BoxShadowProps = {
  boxShadow?: AuthoredPreset
}

export default function BoxShadow({ boxShadow }: BoxShadowProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <BoxShadowTemplate boxShadow={boxShadow} />
}

export async function getStaticProps({
  params
}: GetStaticPropsContext<{ slug: string }>) {
  const { data: boxShadow, error } = await getBoxShadowBySlug(params!.slug)

  if (!boxShadow) {
    throw new Error(
      `Box Shadow with slug '${params!.slug}' not found: ${error}`
    )
  }

  const { data: likes } = await getLikesCount(boxShadow.id)

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

  const { data: slugs } = await getSlugs(LIMIT)
  const paths = slugs?.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}
