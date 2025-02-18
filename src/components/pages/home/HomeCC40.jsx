import React from 'react'
import cc40 from '../../../assets/images/cc40.png'
import WhiteBtn from '../../ui/WhiteBtn'
import { Link } from 'react-router-dom'
import StaticLang from '../../lang/StaticLang'

const HomeCC40 = () => {
  return (
    <Link to={'/shop/1739'}>
    <section className='h-dvh snap-start relative home-section bg-light dark:bg-gray flex items-center justify-center cc40'>
      <img src={cc40} alt="CC40 box" className='h-[50%] sm:h-[75%] z-20 cc40-img cursor-pointer hover:scale-110 transition-all duration-900' />
      <span className='hidden lg:block lg:text-[15rem] 2xl:text-[20rem] text-gray dark:text-white font-display absolute z-10 font-bold cc40-span-left transition-all duration-900 opacity-0 delay-100 scale-70 left-[50%] translate-x-[-50%]'>CC</span>
      <span className='hidden lg:block lg:text-[15rem] 2xl:text-[20rem] text-gray dark:text-white font-display absolute z-10 font-bold cc40-span-right transition-all duration-900 opacity-0 delay-100 scale-70 right-[50%] translate-x-[50%]'>40</span>
      <span className='hidden lg:block absolute dark:text-white text-gray font-text bottom-96 text-xl font-bold cc40-span-bottom transition-all duration-900 opacity-0'><StaticLang az={"Kliklə və Məlumat Əldə Et"} en={"Click to Learn More"} /></span>
      <div className='block lg:hidden absolute z-20 top-[80%]'>
        <WhiteBtn textContent={<StaticLang az={"Detallı Oxu"} en={"Read More"} />} />
      </div>
    </section>
    </Link>
  )
}

export default HomeCC40