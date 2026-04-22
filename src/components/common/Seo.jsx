import { Helmet } from 'react-helmet-async'

const DEFAULT_SITE_URL = 'https://webhostpro.gr'

export default function Seo({ title, description, path = '/' }) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
  const canonical = `${siteUrl}${path}`
  const socialImage = `${siteUrl}/wpog.png`
  const twitterImage = `${siteUrl}/ven1.png`
  const imageAlt = 'Web Host Pro Αιγιαλεία — Websites, Hosting, Digital Solutions'
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
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="el_GR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}
