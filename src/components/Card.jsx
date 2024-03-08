import PropType from 'prop-types'

const Card = ({ backgroundImage, cliente, alt }) => {

  return (

    <article className='relative top-0 overflow-hidden sm:w-[360px] lg:px-5 z-0 h-[220px] rounded-lg border-2 border-slate-800'>

      {/* Background Image */}
      <img
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center hover:scale-50'
        src={backgroundImage}
        alt={alt}
      />
      {/* Background Image */}

      {/* Content Container */}
      <div id='card' className='absolute inset-0 z-0 md:w-[360px] md:h-[220px] bg-black opacity-65 flex justify-end items-end p-6'>
        <h3 className='text-white uppercase z-10'>{cliente}</h3>
      </div>
      {/* Content Container */}
    </article>
  )
}
Card.propTypes = {
  backgroundImage: PropType.string,
  alt: PropType.string,
  cliente: PropType.string
}

export default Card
