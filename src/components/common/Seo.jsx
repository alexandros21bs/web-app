import { Helmet } from 'react-helmet-async'

const DEFAULT_SITE_URL = 'https://webhostpro.gr'

export default function Seo({ title, description, path = '/' }) {
  const siteUrl = import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL
  const canonical = `${siteUrl}${path}`
  const fullTitle = `${title} | Web Host Pro`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}
