import { useEffect } from 'react'
import useWishlist from '../../../hooks/useWishlist'
import LoadingPage from '../../ui/LoadingPage'
import Products from '../shop/Products'

const Wishlist = () => {
    const { isLoading, wishlist, fetchWishlist } = useWishlist()

    useEffect(() => { window.scrollTo(0, 0) }, [])

    useEffect(() => {
        fetchWishlist()
    }, [fetchWishlist])

    return (
        <LoadingPage isLoading={isLoading}>
            <div className='w-[90%] md:w-[70%] mx-auto pb-96 pt-0'>
                <h1 className='font-display text-xl md:text-5xl md:mt-20'>Your Wishlist</h1>
                <p className='mt-2 font-text text-lg opacity-50 ml-2'>Total value of your wishlist is ${wishlist.reduce((acc, item) => (acc + item.price), 0)}</p>
                <div className='relative'>
                    <Products products={wishlist} noProductsMessage={"Visit shop to add products to your wishlist."} />
                </div>
            </div>
        </LoadingPage>
    )
}

export default Wishlist
