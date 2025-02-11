import React, { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'
import { useSelector } from 'react-redux'
import { Disclosure, DisclosureButton, CloseButton } from '@headlessui/react'
import { AnimatePresence, motion } from 'motion/react'
import { FaCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import AddAddress from '../account/AddAddress'

const ChooseAddress = () => {
    const [addresses, setAddresses] = useState([])
    const {userId} = useSelector(state => state.auth)
    const [chosenAddress, setChosenAddress] = useState({})

    const fetchAddresses = async () => {
        const { data, error } = await supabase
            .from('address')
            .select('*')
            .eq('user_id', userId)
        if (error) return console.log(error)
        setAddresses(data)
    }

    useEffect(() => {
        if (userId) {
            fetchAddresses()
        }
    }, [])

    return (
        <Disclosure >
        {({ open }) => (
          <>
            <DisclosureButton  className='p-3 mt-5 text-xl shadow-lg cursor-pointer w-full bg-gray hover:bg-gray-90 text-white dark:text-gray dark:bg-white dark:hover:bg-white/90 transition duration-500'>
              {chosenAddress.address ? (
                <div className='flex items-center gap-3'>
                <div className='text-2xl'><IoLocationSharp /></div>
                <p className='text-left'>{chosenAddress.address}</p>
                </div>
            ) : <p>Choose Shipping Address</p>}
            </DisclosureButton>

            <AnimatePresence>{open && (

            <motion.div className='overflow-hidden mt-1'
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{duration: 0.4, ease: 'easeOut'}}>

              {addresses?.map((address, index) => (
                <CloseButton key={index} onClick={() => {setChosenAddress(address)}}
                className='w-full cursor-pointer p-3 py-4 text-sm font-bold dark:bg-light-gray/60 dark:hover:bg-light-gray bg-gray/95 hover:bg-gray/85 text-white transition duration-500'>
                  <div className='flex items-center gap-3'>
                    <div className='text-2xl'>{chosenAddress.id === address.id ? <FaCheck /> : <IoLocationSharp />}</div>
                    <div className='text-md'>{address.address}</div>
                  </div>
                </CloseButton>
              ))}

              <AddAddress onAdd={fetchAddresses} />

            </motion.div>

            )}</AnimatePresence>
          </>
        )}
        </Disclosure>
    )
}

export default ChooseAddress
