import React, { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'
import PaymentCard from './PaymentCard'
import { useSelector } from 'react-redux'
import AddPayment from './AddPayment'

const UserPayment = () => {
    const {userId} = useSelector(state => state.auth)
    const [payments, setPayments] = useState([])

    const fetchPayments = async () => {
        const { data, error } = await supabase
        .from('payment')
        .select('*')
        .eq('user_id', userId)
        if(error) return console.log(error)
        setPayments(data)
    }

    useEffect(() => {
        if(userId){
            fetchPayments()
        }
    }, [])

  return (
    <div className='mt-20'>
        <h2 className='text-xl md:text-3xl font-display'>Payment Methods</h2>
        <p className='text-md opacity-50 font-text mt-1 mb-10'>Add payment methods to your account to use them while purchasing.</p>
        <div>
            {payments.map((payment, index) => (
                <PaymentCard key={index} payment={payment} 
                onDelete={(paymentId) => {setPayments(payments.filter(payment => payment.id !== paymentId))}} />
            ))}
        </div>
        <AddPayment onAdd={fetchPayments} />
    </div>
  )
}

export default UserPayment
