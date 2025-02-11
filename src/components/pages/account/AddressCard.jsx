import React, { useState } from 'react'
import supabase from '../../../tools/supabase'
import { IoCloseOutline } from "react-icons/io5";
import spinner from '../../../assets/images/spinner.svg'

const AddressCard = ({address, onDelete}) => {

    const [deleting, setIsDeleting] = useState(false)

    const handleDelete = async (addressId) => {
        setIsDeleting(true)
        const { error } = await supabase
        .from('address')
        .delete()
        .eq('id', addressId)
        if(error) return console.log(error)
        onDelete(addressId)
        setIsDeleting(false)
    }

    return (
        <div className='dark:bg-white/5 bg-gray text-white font-text p-5 text-lg mt-4 shadow-lg flex items-center justify-between'>
            <h3>{address.address}</h3>
            <button onClick={() => {handleDelete(address.id)}} className='opacity-50 hover:opacity-100 transition duration-300 cursor-pointer text-3xl'>
                {deleting ? <img className='h-7' src={spinner} alt="loading" /> : <IoCloseOutline />}
            </button>
        </div>
    )
}

export default AddressCard
