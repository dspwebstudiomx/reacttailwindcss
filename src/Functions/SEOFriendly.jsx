
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

export default function SEOFriendly({ charset, title, description, type, keywords, author, linkHref, image }) {
  return (
    <Helmet>
      { /* Standard metadata tags */}
      <meta charset={charset} />
      <link rel="canonical" href={`https://dspwebstudio.com/${linkHref}`} />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      { /* End standard metadata tags */}
      { /* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://dspwebstudio.com/${linkHref}`} />
      <meta property="og:image" content={image} />
      { /* End Facebook tags */}
      { /* Twitter tags */}
      <meta name="twitter:card" content={'summary_large_image'} />
      <meta property="twitter:domain" content="dspwebstudio.com" />
      <meta property="twitter:url" content={`https://dspwebstudio.com/${linkHref}`} />
      <meta name="twitter:site" content={'@dspwebstudio'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={author} />
      { /* End Twitter tags */}
    </Helmet>
  )
}
SEOFriendly.propTypes = {
  charset: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  linkHref: PropTypes.string,
  image: PropTypes.string
}