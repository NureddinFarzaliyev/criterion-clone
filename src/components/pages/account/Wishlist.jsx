import React, { useEffect } from 'react'
import useWishlist from '../../../hooks/useWishlist'
import LoadingPage from '../../ui/LoadingPage'
import Products from '../shop/Products'
import WhiteBtn from '../../ui/WhiteBtn'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    const {isLoading, wishlist, fetchWishlist} = useWishlist()

    useEffect(() => {window.scrollTo(0, 0)}, [])

    useEffect(() => {
        fetchWishlist()
    }, [fetchWishlist])

  return (
      <LoadingPage isLoading={isLoading}>
        <div className='w-[90%] md:w-[70%] mx-auto relative'>
            <h1 className='font-display text-xl md:text-5xl md:mt-20'>Your Wishlist</h1>
            <p className='mt-2 font-text text-lg opacity-50 ml-2 mb-10'>Total value of your wishlist is ${wishlist.reduce((acc, item) => (acc + item.price), 0)}</p>
            <Products products={wishlist} noProductsMessage={"Try adding products from the shop."} />
            <Link to={'/'} className='flex items-center justify-center mt-10'>
                <WhiteBtn textContent={"Explore More"} />
            </Link>
        </div>
      </LoadingPage>
  )
}

export default Wishlist
