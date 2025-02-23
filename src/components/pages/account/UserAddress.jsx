import { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'
import { useSelector } from 'react-redux'
import AddAddress from './AddAddress';
import AddressCard from './AddressCard';
import StaticLang from '../../lang/StaticLang';
import LoadingPage from '../../ui/LoadingPage';

const UserAddress = () => {
    const { userId } = useSelector(state => state.auth)
    const [addresses, setAddresses] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchAddresses = async () => {
        setIsLoading(true)
        const { data, error } = await supabase
            .from('address')
            .select('*')
            .eq('user_id', userId)
        setIsLoading(false)
        if (error) return console.log(error)
        setAddresses(data)
    }

    useEffect(() => {
        if (userId) {
            fetchAddresses()
        }
    }, [])

    return (
        <div className='mt-20 relative min-h-[30vh]'>
            <h2 className='text-xl md:text-3xl font-display'> <StaticLang en="Your Addresses" az="Ünvanlarınız" /> </h2>
            <p className='text-md opacity-50 font-text mt-1 mb-10'><StaticLang en="Add address details to your account to use them while purchasing." az="Hesabınıza alış-veriş edərkən istifadə etmək üçün ünvan detalları əlavə edin." /></p>
            <LoadingPage isLoading={isLoading}>
                <div>
                    {addresses.map((address, index) => (
                        <AddressCard key={index} address={address}
                            onDelete={(addressId) => { setAddresses(addresses.filter(address => address.id !== addressId)) }} />
                    ))}
                </div>
                <AddAddress onAdd={fetchAddresses} />
            </ LoadingPage>

        </div >
    )
}

export default UserAddress
