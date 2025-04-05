import { motion } from 'framer-motion'
import { useState } from 'react'
import Logo from '../../ui/Logo'

const ProductPoster = ({ cover_large, title, director }) => {

  const [isBackVisible, setIsBackVisible] = useState(false)
  const [showBack, setShowBack] = useState(false)

  return (
    <motion.div
      className="mx-auto w-[80%]"
      onMouseEnter={() => setIsBackVisible(true)}
      onMouseLeave={() => setIsBackVisible(false)}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isBackVisible ? 180 : 0 }}
        transition={{ duration: 0.75, ease: 'circOut' }}
        onUpdate={(latest) => {
          if (latest.rotateY >= 90 && !showBack) {
            setShowBack(true);
          } else if (latest.rotateY < 90 && showBack) {
            setShowBack(false);
          }
        }}
      >
        {
          showBack ? (
            <div>
              <img src={cover_large} alt={title} style={{ transform: 'scaleX(-1)' }} />
              <div className='h-full w-full absolute top-0 bg-gray/90 blur-lg'></div>
              <div style={{ transform: 'scaleX(-1)' }} className='h-full w-full absolute top-0 flex flex-col items-center justify-evenly p-12'>
                <Logo height={100} color={'#fff'} />
                <div className='text-center'>
                  <h1 className="text-2xl text-white md:text-4xl font-text">{title}</h1>
                  <p className="text-gold font-bold">{director}</p>
                </div>
              </div>
            </div>
          ) : (
            <img src={cover_large} alt={title} className='shadow-xl' />
          )
        }
      </motion.div>
    </motion.div >
  )
}

export default ProductPoster
