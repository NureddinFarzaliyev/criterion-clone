import React from 'react'
import { Link } from 'react-router-dom'
import WhiteBtn from '../../ui/WhiteBtn'

const StoreLink = () => {
  return (
    <Link to={`/shop`}> 
    <section className='h-dvh snap-start relative home-section'> 
        <div className='absolute flex flex-col justify-center items-center w-dvw inset-0 text-white font-text text-center bg-black/60 gap-8'>
            <h2 className='text-5xl lg:text-8xl w-[85%] lg:w-[70%] font-bold'>The Criterion Collection</h2>
            <p className='italic text-xl font-bold w-[85%] md:w-[70%] lg:w-[40%]'>Shop a series of important, influential classical and contemporary films in special editions from our Collection.</p>
            <WhiteBtn textContent={"Shop the Collection"} />
        </div>
        <img className='h-dvh w-dvw object-cover' src={"https://s3.amazonaws.com/criterion-production/spotlight_images/8530-e2def711ac6482132b4d7711728804df/qYDwYetXEmrm0zwg2ROaVYHKQVaSSA_original.jpg"} alt={"The Criterion Collection"} />
    </section>
    </Link>
  )
}

export default StoreLink
