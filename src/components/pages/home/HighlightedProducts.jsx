import React from 'react'
import { motion } from 'motion/react'
import WhiteBtn from '../../ui/WhiteBtn'
import { Link } from 'react-router-dom'

const HighlightedProducts = () => {
    const tempData = [
        {
          "id": 1,
          "created_at": "2025-01-29T12:32:13.543448+00:00",
          "title": "Grand Illusion",
          "director": "Jean Renoir",
          "price": 100,
          "country": "France",
          "year": 1937,
          "cover_large": "https://s3.amazonaws.com/criterion-production/films/b41a9467bc7a3534c01ba037c019005c/L5fZBJQOnY606k47INf8z9f5ecBFn3_large.jpg",
          "cover_small": "https://s3.amazonaws.com/criterion-production/films/b41a9467bc7a3534c01ba037c019005c/L5fZBJQOnY606k47INf8z9f5ecBFn3_small.jpg",
          "isHighlighted": true
        },
        {
            "id": 2,
            "created_at": "2025-01-29T12:32:13.543448+00:00",
            "title": "Seven Samurai",
            "director": "Jean Renoir",
            "price": 100,
            "country": "France",
            "year": 1937,
            "cover_large": "https://s3.amazonaws.com/criterion-production/films/b41a9467bc7a3534c01ba037c019005c/L5fZBJQOnY606k47INf8z9f5ecBFn3_large.jpg",
            "cover_small": "https://s3.amazonaws.com/criterion-production/films/9d76c0395d994bbb7f9d6f7573796046/cThjxLEYjspgZR4c4TW7itGGxqawj8_small.jpg",
            "isHighlighted": true
        },
        {
            "id": 3,
            "created_at": "2025-01-29T12:32:13.543448+00:00",
            "title": "Taste of Cherry",
            "director": "Jean Renoir",
            "price": 100,
            "country": "France",
            "year": 1937,
            "cover_large": "https://s3.amazonaws.com/criterion-production/films/b41a9467bc7a3534c01ba037c019005c/L5fZBJQOnY606k47INf8z9f5ecBFn3_large.jpg",
            "cover_small": "https://s3.amazonaws.com/criterion-production/films/2b3cb1e242f75f984a61305a512a8417/0IZ7RI0ApmwUqfotR9mOZmFlhsHjvo_small.jpg",
            "isHighlighted": true
        },
        {
            "id": 4,
            "created_at": "2025-01-29T12:32:13.543448+00:00",
            "title": "The Seventh Seal",
            "director": "Jean Renoir",
            "price": 100,
            "country": "France",
            "year": 1937,
            "cover_large": "https://s3.amazonaws.com/criterion-production/films/b41a9467bc7a3534c01ba037c019005c/L5fZBJQOnY606k47INf8z9f5ecBFn3_large.jpg",
            "cover_small": "https://s3.amazonaws.com/criterion-production/films/6fede1f031c07b843ffa8965d47043f3/9QWkE37UXlpfhZrTIsaZHdWmooGJ1a_small.jpg",
            "isHighlighted": true
        },
    ]

  return (
    <section className='h-dvh snap-start relative home-section bg-light dark:bg-gray flex flex-col items-center justify-center gap-5'>
        <h1 className='font-text font-bold text-3xl md:text-5xl dark:text-white text-center px-10'>Highlighted Movies</h1>
        <p className='dark:text-white font-text mb-2 md:mb-5 2xl:mb-20 text-sm md:text-lg text-center px-10'>The most influential and classical movies chosen by professional critics</p>
        <div className='hidden 2xl:flex gap-4'>
            {tempData.map((movie, i) => (
                <Link to={`/movie/${movie.id}`} key={i}>
                    <motion.div className='flex bg-gray dark:bg-black/50 rounded-lg overflow-hidden text-white shadow-2xl' 
                    initial={{width: 300}}
                    whileHover={{width: 650}}
                    transition={{duration: 0.6, ease: 'easeInOut', delay: 0.1}}>
                        <img src={movie.cover_small} alt={movie.title} className='w-[300px] rounded-md' />
                        <div className='flex flex-col p-5 font-text justify-around'>
                            <div>
                                <h2 className='text-4xl font-bold mb-5 w-[300px]'>{movie.title}</h2>
                                <p className='w-[300px] md:text-xl'>{movie.director}</p>
                                <p className='w-[300px] md:text-lg'>{movie.year} - {movie.country}</p>
                            </div>
                            <WhiteBtn textContent={"Learn More"} />
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
        <div className='grid grid-cols-2 2xl:hidden gap-1 sm:gap-4'>
            {tempData.map((movie, i) => (
                <Link to={`/movie/${movie.id}`} key={i} className='px-1'>
                    <motion.img whileHover={{scale: 1.1}} src={movie.cover_small} alt={movie.title} className='w-[175px] sm:w-[200px] xl:w-[230px] rounded-md' />
                </Link>
            ))}
        </div>
    </section>    
  )
}

export default HighlightedProducts
