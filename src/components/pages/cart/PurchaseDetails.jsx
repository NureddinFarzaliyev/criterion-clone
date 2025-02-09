import React from 'react'
import Payment from './Payment'

const PurchaseDetails = ({total, shipping}) => {
  return (
    <div className='lg:ml-4 h-[70vh] px-5 max-lg:mt-10 font-text'>
        <p className='font-display text-xs xl:text-sm mb-5 opacity-70'>PURCHASE DETAILS</p>
        <div className='flex justify-between items-center'>
            <p className='text-lg xl:text-xl'>Subtotal</p>
            <p className='text-lg xl:text-xl'>${total}</p>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <p className='text-lg xl:text-xl'>Shipping</p>
            <p className='text-lg xl:text-xl'>${shipping}</p>
        </div>
        <p className='mt-5 text-sm opacity-50'>Shipping is free when the subtotal is above $250.</p>
        <div className='flex justify-between items-center mt-10'>
            <p className='text-xl xl:text-2xl font-bold'>Total</p>
            <p className='text-xl xl:text-2xl'>${total + shipping}</p>
        </div>
        <Payment />
    </div>
  )
}

export default PurchaseDetails
