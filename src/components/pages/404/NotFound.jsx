import React, { useEffect } from 'react'
import notFoundImg from '../../../assets/images/404.jpeg'
import { Link } from 'react-router-dom'

const NotFound = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='h-dvh dark:bg-gray bg-light flex items-center justify-center lg:justify-start overflow-hidden'>
        <img src={notFoundImg} alt="404" className='h-dvh w-dvw object-cover absolute z-0' />
        <div className='absolute bg-black/70 block lg:hidden h-dvh w-dvw'></div>
        <div className='flex flex-col gap-3 items-center justify-center lg:ml-10 xl:ml-32 z-10'>
            <h1 className='text-white text-9xl font-display'>404</h1>
            <p className='text-white font-text text-xl opacity-70'>This page does not exist...</p>
            <Link to='/' className='text-white px-6 py-3 mt-5 shadow-xl hover:scale-110 transition duration-500 bg-gray font-display font-bold text-xs'>BACK TO HOME</Link>
        </div>
    </div>
  )
}

export default NotFound
