import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade, Navigation} from 'swiper/modules'
import { motion } from 'motion/react'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Link } from 'react-router-dom';

const Spotlight = ({highlightedBlogs}) => {
    

  return (
    <Swiper className='m-0 w-full lg:w-1/2 shadow-xl'
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{delay: 5000}}
        navigation
        loop
        effect='fade'
        slidesPerView={1}>
            {highlightedBlogs?.map((blog, index) => (
                <SwiperSlide key={index} className='w-full'>
                    <Link to={`/blog/${blog.id}`} className='h-full w-full'>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='absolute z-20 bottom-0 bg-gradient-to-t from-black to-transparent p-6 w-full'>
                            <p className='font-display text-sm ml-1 font-bold mb-2 text-white'>FEATURED</p>
                            <h1 className='font-text font-bold text-2xl lg:text-4xl text-white'>{blog.title}</h1>
                        </motion.div>
                        <img src={blog.cover} className='h-[30rem] w-full object-cover' />
                    </Link>
                </SwiperSlide>
            ))}
    </Swiper>
  )
}

export default Spotlight
