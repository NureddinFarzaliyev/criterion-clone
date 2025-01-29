import React from 'react'
import shopImg from '../../../assets/images/shop-girl.jpg'
import blogImg from '../../../assets/images/blog-girl.png'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const BlogAndStore = () => {
  return (
    <section className="home-section h-dvh bg-light dark:bg-gray snap-start flex items-center justify-center gap-5 flex-col">
        <Link to={`/shop`} className='flex items-center justify-center w-full' >
            <motion.div transition={{duration: 0.3, ease: 'easeOut'}} whileHover={{'--home-seperator-color': '#B4841E', '--home-seperator-width': '75%'}} 
            className='h-64 lg:h-96 shadow-lg w-[70%] md:w-[50%] bg-white flex flex-col justify-between lg:grid grid-cols-2'>

                <img className='w-full max-h-[70%] md:max-h-[60%] lg:max-h-none lg:h-full object-cover' src={shopImg} alt="shop" />
                <div className='flex flex-col justify-center items-center text-center px-4 md:px-10 gap-1 md:gap-2 lg:gap-5 h-full'>
                    <p className='text-xs font-bold font-display'>OUR FILMS</p>
                    <h3 className='text-2xl lg:text-4xl 2xl:w-[50%] font-text'>Shop the Collection</h3>
                    <motion.div className='h-0.5 hidden lg:block' initial={{backgroundColor: `var(--home-seperator-color)`, width: `var(--home-seperator-width)`}}></motion.div>
                    <p className='hidden lg:block text-md opacity-50 italic font-text 2xl:w-[70%]'>A series of important classic, influential and contemporary films around the world in special editions.</p>
                </div>

            </motion.div>
        </Link>

        <Link to={`/blog`} className='flex items-center justify-center w-full' >
            <motion.div transition={{duration: 0.3, ease: 'easeOut'}} whileHover={{'--home-seperator-color': '#B4841E', '--home-seperator-width': '75%'}} 
            className='h-64 lg:h-96 shadow-lg w-[70%] md:w-[50%] bg-white flex flex-col justify-between lg:grid lg:grid-cols-2'>

                <div className='flex flex-col justify-center items-center text-center px-4 md:px-10 gap-1 md:gap-2 lg:gap-5 h-full'>
                    <p className='text-xs font-bold font-display'>OUR MAGAZINE</p>
                    <h3 className='text-2xl lg:text-4xl 2xl:w-[50%] font-text'>Blog</h3>
                    <motion.div className='h-0.5 hidden lg:block' initial={{backgroundColor: `var(--home-seperator-color)`, width: `var(--home-seperator-width)`}}></motion.div>
                    <p className='hidden lg:block text-md opacity-50 italic font-text 2xl:w-[70%]'>In-depth film writing, daily news, Top 10 lists, video essays, interviews, and sneak peeks inside Criterion</p>
                </div>
                <img className='w-full max-h-[70%] md:max-h-[60%] lg:max-h-none lg:h-full object-cover' src={blogImg} alt="shop" />

            </motion.div>
        </Link>
    </section>
  )
}

export default BlogAndStore
