
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

export default function SEOFriendly({ title, description, type, keywords, author, linkHref, image }) {
  return (
    <Helmet>
      { /* Standard metadata tags */}

      <link rel="canonical" href={`https://dspwebstudio.com/${linkHref}`} />
      {/* <link rel="icon" type="image/png" href="src/assets/Logos/dsp-color.webp" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
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
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  linkHref: PropTypes.string,
  image: PropTypes.string
}