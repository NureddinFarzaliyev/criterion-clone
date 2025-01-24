import React from 'react'
import { Link } from 'react-router-dom'
import WhiteBtn from '../ui/WhiteBtn'

const HomeBlog = ({id, title, author, cover}) => {
  return (
    <Link to={`/blog/${id}`}> 
    <section className='h-dvh snap-start relative'> 
        <div className='absolute flex flex-col justify-center items-center w-dvw inset-0 text-white font-text text-center bg-black/30 gap-8'>
            <h2 className='text-5xl lg:text-8xl w-[85%] lg:w-[70%]'>{title}</h2>
            <p className='italic text-lg font-bold'>{author}</p>
            <WhiteBtn textContent={"Read More"} />
        </div>
        <img className='h-dvh w-dvw object-cover' src={cover} alt={title} />
    </section>
    </Link>
  )
}

export default HomeBlog