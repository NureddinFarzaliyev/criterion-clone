import { useAnimationControls } from 'motion/react'
import { motion } from 'motion/react'
import useWishlist from '../../../hooks/useWishlist';
import spinner from '../../../assets/images/spinner.svg'
import { useEffect, useState } from 'react';
import useCart from '../../../hooks/useCart';
import { useSelector } from 'react-redux';
import { infoToast } from '../../../utils/toast';
import StaticLang from '../../lang/StaticLang';
import ProductPoster from './ProductPoster';

const PurchaseProduct = ({ singleProduct }) => {
    const cartBtnControls = useAnimationControls()
    const [inWishlist, setInWishlist] = useState(true)
    const { addToWishlist, removeFromWishlist, isLoading, checkIfInWishlist } = useWishlist()
    const { addToCart, isCartLoading } = useCart()
    const { userId } = useSelector(state => state.auth)

    const checkWishlist = async () => {
        const response = await checkIfInWishlist(singleProduct.id)
        setInWishlist(response)
    }

    useEffect(() => {
        if (singleProduct.id) checkWishlist()
    }, [singleProduct.id, checkIfInWishlist, window.location.pathname])

    const handleWishlist = async () => {
        if (inWishlist) {
            await removeFromWishlist(singleProduct.id)
        } else {
            await addToWishlist(singleProduct.id)
        }
        checkWishlist()
    }

    const handleCart = async () => {
        if (userId) {
            addToCart(singleProduct.id)
        } else {
            infoToast(<StaticLang en="Login to add to cart." az="Səbətə əlavə etmək üçün giriş edin." />)
        }
    }

    return (
        <div className='lg:w-1/2 flex flex-col items-center'>
            <ProductPoster cover_large={singleProduct?.cover_large} title={singleProduct?.title} director={singleProduct?.director} />
            <div className='mt-10 w-[80%]'>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5 }}
                    onClick={() => handleCart(singleProduct.id)}
                    onHoverStart={() => cartBtnControls.start({ height: '100%' })} onHoverEnd={() => cartBtnControls.start({ height: '0%' })}
                    className='border-2 w-full border-gold h-20 px-5 flex items-center justify-between cursor-pointer relative overflow-hidden font-display font-bold'>
                    {isCartLoading ? (
                        <img src={spinner} alt="Loading" className='h-14 mx-auto opacity-40' />
                    ) : (
                        <><motion.div animate={cartBtnControls} initial={{ height: '0%' }}
                            className='bg-gold h-full w-full absolute left-0 z-0 top-0 origin-top'></motion.div>
                            <div className='z-10'> <StaticLang en="ADD TO CART" az="SƏBƏTƏ ƏLAVƏ EDİN" /> </div>
                            <div className='z-10 font-text text-2xl'>${singleProduct.price}</div></>
                    )}
                </motion.button>

                <motion.button disabled={isLoading} whileHover={{ scale: 1.05, opacity: 1 }} whileTap={{ scale: 0.95, opacity: 0.5 }} transition={{ duration: 0.5 }}
                    onClick={handleWishlist}
                    className='mt-4 border-2 w-full border-light-gray h-20 px-5 flex items-center justify-between cursor-pointer relative overflow-hidden font-display font-bold'>
                    {isLoading ? (
                        <img src={spinner} alt="Loading" className='h-14 mx-auto' />
                    ) : (
                        <div className='z-10'>{inWishlist ? <StaticLang en="REMOVE FROM WISHLIST" az="İSTƏK SİYAHISINDAN SİL" /> : <StaticLang en="ADD TO WISHLIST" az="İSTƏK SİYAHISINDA SAXLA" />}</div>
                    )}
                </motion.button>
            </div>
        </div>
    )
}

export default PurchaseProduct
