import React, { useEffect } from 'react'
import useCart from '../../../hooks/useCart'
import LoadingPage from '../../ui/LoadingPage'

const Cart = () => {
    const {cartProducts, fetchCart, isLoading} = useCart()

    useEffect(() => {
        fetchCart()
    }, [])

  return (
    <div className='relative'>
        <LoadingPage isLoading={isLoading}>
            {cartProducts?.map((product, index) => (
                <h1 key={index}>{[product.title]}</h1>
            ))}
        </LoadingPage>
    </div>
  )
}

export default Cart
