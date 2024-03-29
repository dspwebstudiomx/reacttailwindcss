import PropType from 'prop-types'

const Card = ({ backgroundImage, cliente, alt, href }) => {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">

      <article className='card relative top-0 overflow-hidden sm:w-[300px] lg:px-5 z-0 h-[200px] rounded-lg border-2 border-slate-800 shadow-lg shadow-slate-600 transition-shadow animate__animated animate__bounceIn duration-1000 animate__slower delay-1000 sm:mb-10'>

        {/* Background Image */}
        <img
          className='absolute inset-0 h-full w-full object-cover object-center rounded-lg'
          src={backgroundImage}
          alt={alt}
          loading='lazy'
        />
        {/* Background Image */}

        {/* Overlay */}
        <div className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'></div>
        {/* Overlay */}

        {/* Content Container */}
        <div id='card' className='flex w-full h-full justify-end items-end pb-4 pr-4'>
          <h3 className='text-white uppercase z-10'>{cliente}</h3>
        </div>
        {/* Content Container */}
      </article>
    </a>
  )
}
Card.propTypes = {
  href: PropType.string,
  backgroundImage: PropType.string,
  alt: PropType.string,
  cliente: PropType.string
}

export default Card
