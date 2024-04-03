import PropTypes from 'prop-types'

const SocialLink = ({ href, icono }) => {
  return (
    <>
      <a className="text-xl font-semibold flex gap-4 place-items-center" href={href} target="_blank" >
        {icono}
      </a>
    </>
  )
}
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icono: PropTypes.object,
}

export default SocialLink