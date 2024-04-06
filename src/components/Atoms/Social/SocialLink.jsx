import PropTypes from 'prop-types'

const SocialLink = ({ href, icono, ariaLabel, title }) => {
  return (
    <>
      <a className="text-xl font-semibold flex gap-4 place-items-center" href={href} target="blank" rel="noopener noreferrer" aria-label={ariaLabel} title={title}>
        {icono}
      </a>
    </>
  )
}
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  icono: PropTypes.object,
}

export default SocialLink