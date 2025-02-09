import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({products, noProductsMessage}) => {
  return (
    <div className='flex flex-col gap-1 font-text items-center'>
        {products.length === 0 && (<div className='absolute text-center left-[50%] translate-x-[-50%] top-20'>
          <h1 className='text-3xl'>No Products Found</h1>
          {noProductsMessage && <p className='text-sm opacity-70 mt-2'>{noProductsMessage}</p>}
        </div>)}
        {products.map(product => (
            <Link to={`/shop/${product.id}`} key={product.id} className='hover:text-gold h-32 w-full grid grid-cols-3 md:grid-cols-5 items-center gap-3 bg-gray/20 dark:bg-black/20 dark:hover:bg-black hover:bg-gray/20 p-3 md:p-4 transition duration-700 hover:translate-y-[-10px]'>
                <img src={product.cover_small} alt={product.title} className='h-full object-cover' />
                <h1 className={`font-bold md:text-xl md:col-span-2`}>{product.title}</h1>
                <p className='opacity-70 text-sm max-md:hidden'>{product.director}</p>
                <p className='opacity-50 w-min text-lg md:text-xl text-center'>${product.price}</p>
            </Link>
        ))}
    </div>
  )
}

export default ProductsList