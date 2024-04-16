import PropTypes from 'prop-types'

const BackgroundSection = ({ background, opacity, children }) => {
  return (
    <section id='hero' className='relative overflow-hidden py-20 px-8 w-full z-0 flex items-center min-h-fit  xl:px-0'>

      {/* Background Image */}
      <img
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-100'
        src={background}
        alt='hero image'
      />
      {/* Background Image */}

      {/* Overlay */}
      <div className={`absolute inset-0 z-0 w-full h-full bg-black ${opacity}`}></div>
      {/* Overlay */}

      {/* Content Container */}
      <div id="heroContainer" className="mx-auto flex flex-col md:items-start z-10">
        <div className="max-w-screen-lg lg:mx-0 mb-6 mx-5">
          {children}
        </div>
        {/* Content Container */}
      </div>
    </section >
  )
}
BackgroundSection.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.string.isRequired
};
export default BackgroundSection