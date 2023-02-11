import Head from 'next/head'

import { getStrapiMedia } from '@utils/index'

const Seo = ({ seo }) => {
  const {
    metaTitle,
    metaImage,
    metaRobots,
    metaSocial,
    structuredData,
    preventIndexing,
    metaDescription
  } = seo ? seo : {}

  const metaImageAttr = !seo
    ? {}
    : seo.metaImage
    ? seo.metaImage.data.attributes
    : {}

  // const metaTitle = seo.metaTitle
  // const metaRobots = seo.metaRobots
  // const metaSocial = seo.metaSocial
  // const structuredData = seo.structuredData
  // const preventIndexing = seo.preventIndexing
  // const metaDescription = seo.metaDescription

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta
        name="description"
        content={metaDescription}
        key="description"
      />

      <meta
        name="twitter:card"
        content="summary"
      />

      {metaSocial &&
        metaSocial.find((item) => item.socialNetwork == 'Twitter') && (
          <>
            <meta
              data-hid="twitter:title"
              name="twitter:title"
              property="twitter:title"
              content={item.title}
            />
            <meta
              data-hid="twitter:description"
              name="twitter:description"
              property="twitter:description"
              content={item.description}
            />
            <meta
              data-hid="twitter:image"
              name="twitter:image"
              property="twitter:image"
              content={getStrapiMedia(item.image.data.attributes.url)}
            />
            <meta
              data-hid="twitter:image:alt"
              name="twitter:image:alt"
              property="twitter:image:alt"
              content={item.image.data.attributes.alternativeText}
            />
          </>
        )}

      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:title"
        name="og:title"
        property="og:title"
        content={metaTitle}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:description"
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:image"
        name="og:image"
        property="og:image"
        content={metaImageAttr.url}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:image:alt"
        name="og:image:alt"
        property="og:image:alt"
        content={metaImageAttr.alternativeText}
      />

      <meta
        name="robots"
        content={metaRobots}
      />

      {preventIndexing && !metaRobots.includes('noindex') && (
        <>
          <meta
            name="robots"
            content="noindex"></meta>
          <meta
            name="googlebot"
            content="noindex"></meta>
        </>
      )}
      <script type="application/ld+json">{structuredData}</script>
    </Head>
  )
}

export default Seo
