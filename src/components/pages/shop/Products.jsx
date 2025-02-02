import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-1 mt-14 font-text'>
        {products.length === 0 && (<div className='absolute text-center left-[50%] translate-x-[-50%] top-20'>
          <h1 className='text-3xl'>No Products Found</h1>
          <p className='text-sm opacity-70 mt-2'>Please try different filters filters.</p>
        </div>)}
        {products.map(product => (
            <Link to={`/shop/${product.id}`} key={product.id} className='hover:text-gold dark:hover:bg-black hover:bg-gray/20 p-3 md:py-6 md:px-4 transition duration-700 hover:translate-y-[-15px]'>
                <img src={product.cover_small} alt={product.title} className='w-full object-cover' />
                <h1 className='font-bold mt-3 text-lg'>{product.title}</h1>
                <p className='opacity-70 text-sm'>{product.director}</p>
                <span className='text-sm opacity-50'>${product.price}</span>
            </Link>
        ))}
    </div>
  )
}

export default Products
