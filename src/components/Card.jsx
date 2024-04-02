import PropType from 'prop-types'

const Card = ({ backgroundImage, cliente, alt, href }) => {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">

      <article id={`card-${cliente}`} className='card relative overflow-hidden w-[360px] sm:w-[260px] md:w-[300px] lg:w-[420px] xl:w-[320px] z-0 h-[220px] lg:h-[240px] xl:h-[180px] rounded-lg border-2 border-slate-800 shadow-lg shadow-slate-600 transition-shadow animate__animated animate__bounceIn duration-1000 animate__slower delay-1000'>

        {/* Background Image */}
        <img
          className='absolute inset-0 h-full w-full object-cover object-center rounded-lg'
          src={backgroundImage}
          alt={alt}
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
