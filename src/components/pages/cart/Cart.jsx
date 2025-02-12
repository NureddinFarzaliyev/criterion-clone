import React, { useEffect } from 'react'
import useCart from '../../../hooks/useCart'
import LoadingPage from '../../ui/LoadingPage'
import WhiteBtn from '../../ui/WhiteBtn'
import { Link } from 'react-router-dom'
import PurchaseDetails from './PurchaseDetails'
import supabase from '../../../tools/supabase'

const Cart = () => {
    const {cartProducts, fetchCart, isCartLoading, removeFromCart, decrementCart, localLoading, incrementCart, getTotal, clearCart} = useCart()

    useEffect(() => {
        fetchCart()
        window.scrollTo(0,0)
    }, [])

    const onPurchase = async (chosenMethod, chosenAddress) => {
        const {error} = await supabase
        .from('orders')
        .insert([{
            payment_method: chosenMethod.method,
            payment_id: chosenMethod.method_id,
            shipping_address: chosenAddress.address,
            price: getTotal().total + getTotal().shipping,
            products: cartProducts.map(product => (`${product.id}/${product.quantity}`)),
        }])

        if(error) return console.error(error)

        await clearCart()
        await fetchCart()
    }

  return (
    <div className='relative w-[90%] md:w-[80%] mx-auto mt-20 CART'>
        <LoadingPage isLoading={isCartLoading}>
            {cartProducts.length > 0 ? (
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='font-text gap-3 flex flex-col col-span-2'>
                    {cartProducts.map(product => (
                        <div key={product.id} className='max-lg:flex flex-col max-lg:gap-3 grid grid-cols-5 items-center justify-around min-h-32 w-full bg-gray/20 dark:bg-black/20 dark:hover:bg-black hover:bg-gray/20 p-3 md:p-4 transition duration-700'>
                            <div className='flex items-center justify-center h-24'>
                                <img src={product.cover_small} alt={product.title} className='h-full object-cover' />
                            </div>
                            <h1 className={`font-bold md:text-xl`}>{product.title}</h1>
                            <div className='flex items-center justify-center'>
                                <p className='opacity-50 w-min text-lg md:text-xl text-center'>${product.price * product.quantity}</p>
                            </div>
                            <div className='flex items-center justify-center col-span-2'>
                                <button disabled={localLoading || product.quantity === 1} onClick={() => decrementCart(product.id)} className='opacity-70 dark:opacity-50 disabled:opacity-20 hover:opacity-100 text-black dark:text-white not-disabled:cursor-pointer px-3 py-1 border-2 border-black dark:border-white/50 transition duration-500 text-xl rounded-full h-8 w-8 flex items-center justify-center'>-</button>
                                <span className='text-xl md:text-2xl mx-5'>{product.quantity}</span>
                                <button disabled={localLoading} onClick={() => incrementCart(product.id)} className='opacity-70 dark:opacity-50 disabled:opacity-20 hover:opacity-100 text-black dark:text-white not-disabled:cursor-pointer px-3 py-1 border-2 border-black dark:border-white/50 transition duration-500 text-xl rounded-full h-8 w-8 flex items-center justify-center'>+</button>
                                <button disabled={localLoading} onClick={() => removeFromCart(product.id)} className='opacity-70 dark:opacity-50 disabled:opacity-20 hover:opacity-100 text-black dark:text-white not-disabled:cursor-pointer font-display p-2 ml-3 border-2 border-black dark:border-white/50 transition duration-500 rounded-full h-8 w-8 flex items-center justify-center'>x</button>
                            </div>
                        </div>
                    ))}
                </div>
                <PurchaseDetails total={getTotal().total} shipping={getTotal().shipping} onPurchase={onPurchase} />
            </div>
            ) : (
            <div className='flex flex-col gap-3 items-center justify-center'>
                <h1 className='font-text text-3xl'>Your cart is empty</h1>
                <p className='font-text opacity-70'>Start by adding items from the shop.</p>
                <Link to='/shop' className='mt-10'>
                    <WhiteBtn textContent={"Explore the Shop"} />
                </Link>
            </div>
            )}
        </LoadingPage>
    </div>
  )
}

export default Cart
