import { Helmet } from 'react-helmet-async'

const DEFAULT_SITE_URL = 'https://webhostpro.gr'

export default function Seo({ title, description, path = '/' }) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
  const canonical = `${siteUrl}${path}`
  const socialImage = `${siteUrl}/wpog.png`
  const fullTitle = `${title} | Web Host Pro`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={socialImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}
