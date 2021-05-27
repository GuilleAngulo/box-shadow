import { useRouter } from 'next/router'
import { getBoxShadowBySlug, getSlugs } from 'services/boxShadows'
import { AuthoredPreset } from 'types'
import { GetStaticPropsContext } from 'next'
import { resetServerContext } from 'react-beautiful-dnd'
import HomeTemplate from 'templates/HomeTemplate'
import {
  generateOgUrl,
  prettify,
  resizeBoxShadow,
  stringify
} from 'utils/helpers'
import { SIZES } from 'utils/shadow'
import Head from 'next/head'

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

        <meta property="og:site_name" content="Box Shadow Club" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />

        <meta property="og:image" content={ogUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1260" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogUrl} />
      </Head>

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
