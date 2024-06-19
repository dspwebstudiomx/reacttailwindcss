import PropType from 'prop-types'

const Card = ({ backgroundImage, cliente, alt, href }) => {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">

      <article id={`card-${cliente}`} className='card relative mx-auto overflow-hidden w-[80vw] sm:w-[380px] xl:w-[320px] z-0 h-[240px] lg:h-[210px] rounded-lg border-2 border-slate-800 shadow-lg shadow-slate-600 transition-shadow animate__animated animate__bounceIn duration-1000 animate__slower delay-1000 dark:shadow-none'>

        {/* Background Image */}
        <img
          className='absolute inset-0 h-full w-full object-cover object-center rounded-lg'
          src={backgroundImage}
          alt={alt}
          loading='lazy'
        />
        {/* Background Image */}

        {/* Overlay */}
        <div className='absolute inset-0 z-0 w-full h-full bg-black opacity-50' />
        {/* Overlay */}

        {/* Content Container */}
        <div className='flex w-full h-full justify-end items-end pb-4 pr-4'>
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
