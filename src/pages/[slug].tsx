import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AuthoredPreset } from 'types'
import { resetServerContext } from 'react-beautiful-dnd'
import { getBoxShadowBySlug, getSlugs } from 'services/boxShadows'
import HomeTemplate from 'templates/HomeTemplate'
import {
  generateOgUrl,
  prettify,
  resizeBoxShadow,
  stringify
} from 'utils/helpers'
import { SIZES } from 'utils/shadow'
import OpenGraph from 'components/OpenGraph'

export type BoxShadowProps = {
  initialPreset?: AuthoredPreset
}

export default function BoxShadow({ initialPreset }: BoxShadowProps) {
  const router = useRouter()

  const ogPayload = {
    title: initialPreset?.name || '',
    theme: String(initialPreset?.theme),
    boxShadow: prettify(
      stringify(resizeBoxShadow(initialPreset?.boxShadow, SIZES['xlarge']))
    ),
    shape: initialPreset?.shape || '',
    authorName: initialPreset?.author.name || '',
    authorPhoto: initialPreset?.author.avatar_url || ''
  }

  const ogUrl = generateOgUrl(ogPayload)
  const ogTitle = initialPreset?.name
  const ogDescription = `${initialPreset?.name}: A box-shadow design by ${initialPreset?.name}`

  if (router.isFallback) return null
  return (
    <>
      <Head>
        <title>{ogTitle}</title>
        <meta property="description" content={ogDescription} />
      </Head>
      <OpenGraph title={ogTitle} description={ogDescription} imageUrl={ogUrl} />
      <HomeTemplate initialPreset={initialPreset} />
    </>
  )
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
