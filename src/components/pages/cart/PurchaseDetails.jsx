import React from 'react'
import Payment from './Payment'
import StaticLang from '../../lang/StaticLang.jsx'

const PurchaseDetails = ({total, shipping, onPurchase}) => {
  return (
    <div className='lg:ml-4 min-h-[70vh] px-5 max-lg:mt-10 font-text'>
        <p className='font-display text-xs xl:text-sm mb-5 opacity-70'><StaticLang en="PURCHASE DETAILS" az="SATIŞ DETALLARI" /></p>
        <div className='flex justify-between items-center'>
            <p className='text-lg xl:text-xl'><StaticLang en="Subtotal" az="Məhsullar" /></p>
            <p className='text-lg xl:text-xl'>${total}</p>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <p className='text-lg xl:text-xl'><StaticLang en="Shipping" az="Çatdırılma" /></p>
            <p className='text-lg xl:text-xl'>${shipping}</p>
        </div>
        <p className='mt-5 text-sm opacity-50'><StaticLang en="Shipping is free when the subtotal is above $250." az="$250-dan artıq məhsul aldıqda çatdırılma pulsuzdur." /></p>
        <div className='flex justify-between items-center mt-10'>
            <p className='text-xl xl:text-2xl font-bold'><StaticLang en="Total" az="Cəmi" /></p>
            <p className='text-xl xl:text-2xl'>${total + shipping}</p>
        </div>
        <Payment onPurchase={onPurchase} />
    </div>
  )
}

export default PurchaseDetails
