import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import { useEffect, useState } from 'react';
import supabase from '../../../tools/supabase';
import { errorToast } from '../../../utils/toast';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const RecommendedProducts = () => {
    const [recommendedProducts, setRecommendedProducts] = useState([])

    useEffect(() => {
        const fetchRecommendedProducts = async () => {
            // NOTE: This requires creating a Postgres function which returns random items in the Supabase database
            const { data, error } = await supabase.rpc('random_items', { limit_count: 10 });
    
            if (error) {
                errorToast(error.message)
            } else {
                setRecommendedProducts(data)
            }
    
        }

        fetchRecommendedProducts()
    }, [])

  return (
    <div className='w-[90%] md:w-[80%] xl:w-[70%] mx-auto mt-40'>
      <h1 className='text-xl md:text-4xl font-text mb-10'>More Products</h1>

        {recommendedProducts.length > 0 && (
            <Swiper className='m-0 w-full'
                breakpoints={{
                      320: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      1024: {
                        slidesPerView: 5,
                      },
                }}
                modules={[ Navigation]}
                navigation
                loop >
                    {recommendedProducts.map((product, index) => {
                        return(
                        <SwiperSlide key={index}>
                            <div>
                            <motion.div key={index} className='m-2 relative'>
                                <Link to={`/shop/${product.id}`}>
                                    <motion.div key={index} whileHover={{opacity: 0.9}} transition={{duration: 0.2, ease: 'linear'}}
                                    className='absolute h-full w-full bg-black opacity-0 flex flex-col items-center justify-center'>
                                        <h1 className='px-2 text-2xl font-text text-white text-center font-bold'>{product.title}</h1>
                                        <p className='text-gold font-display text-xs px-2'>{product.director}</p>
                                    </motion.div>
                                    <img src={product.cover_small} alt={product.title} />
                                </Link>
                            </motion.div>
                            </div>
                        </SwiperSlide>
                    )})}
            </Swiper>
        )}
    </div>
  )
}

export default RecommendedProducts
