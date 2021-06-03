import Head from 'next/head'

export type OpenGraphProps = {
  title?: string
  description?: string
  imageUrl?: string
}

const defaultTitle = 'Box Shadow Club'
const defaultDescription = 'Design beautiful box shadow for CSS with this tool'

const defaultImage = `${process.env.NEXT_PUBLIC_API_URL}/img/og-image.png`

const OpenGraph = ({ title, description, imageUrl }: OpenGraphProps) => (
  <Head>
    <meta property="og:site_name" content="Box Shadow Club" />
    <meta property="og:title" content={title || defaultTitle} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />

    <meta property="og:image" content={imageUrl || defaultImage} />
    <meta property="og:image:type" content="image/png" />

    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title || defaultTitle} />
    <meta
      name="twitter:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:image" content={imageUrl || defaultImage} />
  </Head>
)

export default OpenGraph
