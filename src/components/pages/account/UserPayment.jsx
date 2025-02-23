import { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'
import PaymentCard from './PaymentCard'
import { useSelector } from 'react-redux'
import AddPayment from './AddPayment'
import StaticLang from '../../lang/StaticLang'
import LoadingPage from '../../ui/LoadingPage'

const UserPayment = () => {
    const { userId } = useSelector(state => state.auth)
    const [payments, setPayments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchPayments = async () => {
        setIsLoading(true)
        const { data, error } = await supabase
            .from('payment')
            .select('*')
            .eq('user_id', userId)
        setIsLoading(false)
        if (error) return console.log(error)
        setPayments(data)
    }

    useEffect(() => {
        if (userId) {
            fetchPayments()
        }
    }, [])

    return (
        <div className='mt-20 relative min-h-[30vh]'>
            <h2 className='text-xl md:text-3xl font-display'><StaticLang en="Payment Methods" az="Ödəniş Üsulları" /></h2>
            <p className='text-md opacity-50 font-text mt-1 mb-10'><StaticLang en="Add payment methods to your account to use them while purchasing." az="Hesabınıza alış-veriş edərkən istifadə etmək üçün ödəniş üsulları əlavə edin." /></p>
            <LoadingPage isLoading={isLoading}>
                <div>
                    {payments.map((payment, index) => (
                        <PaymentCard key={index} payment={payment}
                            onDelete={(paymentId) => { setPayments(payments.filter(payment => payment.id !== paymentId)) }} />
                    ))}
                </div>
                <AddPayment onAdd={fetchPayments} />
            </LoadingPage>
        </div>
    )
}

export default UserPayment
