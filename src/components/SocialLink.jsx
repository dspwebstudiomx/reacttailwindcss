import PropTypes from 'prop-types'

const SocialLink = ({ href, icono, texto }) => {
  return (
    <>
      <a className="text-2xl font-semibold flex gap-4 place-items-center" href={href} target="_blank" >
        {icono}
        <span>
          {texto}
        </span>
      </a>
    </>
  )
}
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icono: PropTypes.object,
  texto: PropTypes.string.isRequired
}

export default SocialLink