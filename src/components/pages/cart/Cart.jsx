import React, { useEffect } from 'react'
import useCart from '../../../hooks/useCart'
import LoadingPage from '../../ui/LoadingPage'

const Cart = () => {
    const {cartProducts, fetchCart, isCartLoading, removeFromCart, decrementCart, localLoading, incrementCart} = useCart()

    useEffect(() => {
        fetchCart()
    }, [])

  return (
    <div className='relative'>
        <LoadingPage isLoading={isCartLoading}>
            {cartProducts?.map((product, index) => (
                <div key={index} className='border-1 border-red-900 m-2'>
                    {product && (
                        <>
                        <h1 key={index}>{product?.title} - {product?.quantity}</h1>
                        <button disabled={localLoading} className='cursor-pointer disabled:bg-red-900' onClick={()=>removeFromCart(product.id)}>{localLoading ? "loading" : "delete"}</button>
                        <button disabled={localLoading || product.quantity === 1} className='cursor-pointer disabled:bg-red-900' onClick={()=>decrementCart(product.id)}>{localLoading ? "loading" : "decrement"}</button>
                        <button disabled={localLoading} className='cursor-pointer disabled:bg-red-900' onClick={()=>incrementCart(product.id)}>{localLoading ? "loading" : "increment"}</button>
                        </>
                    )}
                </div>
            ))}
        </LoadingPage>
    </div>
  )
}

export default Cart
