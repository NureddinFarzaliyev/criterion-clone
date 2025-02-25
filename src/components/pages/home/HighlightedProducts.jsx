import { useEffect } from 'react'
import { motion } from 'motion/react'
import WhiteBtn from '../../ui/WhiteBtn'
import { Link } from 'react-router-dom'
import { errorToast } from '../../../utils/toast'
import useHighlightedProducts from '../../../hooks/useHighlightedProducts'
import StaticLang from '../../lang/StaticLang'

const HighlightedProducts = () => {
    const { highlightedProducts, getHighlightedProducts, error } = useHighlightedProducts()

    useEffect(() => {
        getHighlightedProducts()
    }, [getHighlightedProducts])

    useEffect(() => {
        if (error) errorToast(error)
    }, [error])

    return (
        <section className='h-dvh snap-start relative home-section bg-light dark:bg-gray flex flex-col items-center justify-center gap-5'>
            <h1 className='font-text font-bold text-3xl md:text-5xl dark:text-white text-center px-10'><StaticLang en={"Highlighted Movies"} az={"Tövsiyə Edilən Filmlər"} /></h1>
            <p className='dark:text-white font-text mb-2 md:mb-5 2xl:mb-20 text-sm md:text-lg text-center px-10'><StaticLang en={"The most influential and classical movies chosen by professional critics"} az={"Professional tənqidçilər tərəfindən seçilmiş ən təsirli klassik filmlər."} /></p>
            <div className='hidden 2xl:flex gap-4'>
                {highlightedProducts?.map((movie, i) => (
                    <Link to={`/shop/${movie.id}`} key={i}>
                        <motion.div className='flex bg-gray dark:bg-black/50 rounded-lg overflow-hidden text-white shadow-2xl'
                            initial={{ width: 300 }}
                            whileHover={{ width: 650 }}
                            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}>
                            <img src={movie.cover_small} alt={movie.title} className='w-[300px] rounded-md' />
                            <div className='flex flex-col p-5 font-text justify-around'>
                                <div>
                                    <h2 className='text-4xl font-bold mb-5 w-[300px]'>{movie.title}</h2>
                                    <p className='w-[300px] md:text-xl'>{movie.director}</p>
                                    <p className='w-[300px] md:text-lg'>{movie.year} - {movie.country}</p>
                                </div>
                                <WhiteBtn textContent={<StaticLang en="Learn more" az="Detallı Bax" />} />
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
            <div className='grid grid-cols-2 2xl:hidden gap-1 sm:gap-4'>
                {highlightedProducts?.map((movie, i) => (
                    <Link to={`/shop/${movie.id}`} key={i} className='px-1'>
                        <motion.img whileHover={{ scale: 1.1 }} src={movie.cover_small} alt={movie.title} className='w-[175px] sm:w-[200px] xl:w-[230px] rounded-md' />
                    </Link>
                ))}
            </div>
            <div className='mt-5 2xl:mt-20'>
                <Link to='/shop'>
                    <WhiteBtn textContent={<StaticLang en={"View All Movies"} az={"Bütün Filmlərə Bax"} />} />
                </Link>
            </div>
        </section>
    )
}

export default HighlightedProducts
