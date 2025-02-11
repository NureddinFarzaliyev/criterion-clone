import React, { useState } from 'react'
import supabase from '../../../tools/supabase'
import { IoCloseOutline } from "react-icons/io5";
import spinner from '../../../assets/images/spinner.svg'
import { FaCreditCard } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FiGift } from "react-icons/fi";

const PaymentCarf = ({payment, onDelete}) => {
    const [deleting, setIsDeleting] = useState(false)

    const handleDelete = async (paymentId) => {
        setIsDeleting(true)
        const { error } = await supabase
        .from('payment')
        .delete()
        .eq('id', paymentId)
        if(error) return console.log(error)
        onDelete(paymentId)
        setIsDeleting(false)
    }

    return (
        <div className='dark:bg-white/5 bg-gray text-white font-text p-5 text-lg mt-4 shadow-lg flex items-center justify-between'>
            <h3 className='flex items-center gap-3'>
                {payment.method === "card" ? <FaCreditCard className='text-xl' /> : payment.method === "wallet" ? <IoWallet className='text-xl' /> : <FiGift className='text-xl' />} 
                {payment.method && (payment.method.toUpperCase()[0] + payment.method.slice(1))} <span className='opacity-50'>- {payment.method === 'giftcard' && "$"}{payment.method_id}</span> </h3>
            <button onClick={() => {handleDelete(payment.id)}} className='opacity-50 hover:opacity-100 transition duration-300 cursor-pointer text-3xl'>
                {deleting ? <img className='h-7' src={spinner} alt="loading" /> : <IoCloseOutline />}
            </button>
        </div>
    )
}

export default PaymentCarf
