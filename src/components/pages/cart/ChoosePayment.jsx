import { AnimatePresence, motion } from 'motion/react'
import { Disclosure, DisclosureButton } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { FaCreditCard } from 'react-icons/fa6'
import { IoWallet } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { useSelector } from 'react-redux';
import supabase from '../../../tools/supabase';

const ChoosePayment = ({}) => {
  const [chosenMethod, setChosenMethod] = useState({})
  const { userId } = useSelector(state => state.auth)
  const [payments, setPayments] = useState([])

  useEffect(() => {
    const fetchPayments = async () => {
      const { data, error } = await supabase
        .from('payment')
        .select('*')
        .eq('user_id', userId)
      if (error) return console.log(error)
      setPayments(data)
    }

    if (userId) {
      fetchPayments()
    }
  }, [])

  const methodIcons = {
    card: <FaCreditCard />,
    wallet: <IoWallet />,
    giftcard: <FiGift />
  }

  return (
    <Disclosure >
        {({ open }) => (
          <>
            <DisclosureButton  className='p-3 text-xl shadow-lg cursor-pointer w-full bg-gray hover:bg-gray-90 text-white dark:text-gray dark:bg-white dark:hover:bg-white/90 transition duration-500'>
              {chosenMethod.method ? (
                <div className='flex items-center gap-3'>
                  <div className='text-2xl'>{methodIcons[chosenMethod.method]}</div>
                  <p className='text-md'>{chosenMethod.method.toUpperCase()[0] + chosenMethod.method.slice(1)} <span className='opacity-50 text-sm ml-1'>{chosenMethod.method_id}</span></p>
                </div>
              ) : (
                <p>Choose Payment Method</p>
              )}
            </DisclosureButton>

            <AnimatePresence>{open && (

            <motion.div className='overflow-hidden mt-1'
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{duration: 0.4, ease: 'easeOut'}}>

              {payments?.map((payment, index) => (
                <div key={index} onClick={() => {setChosenMethod(payment)}}
                className='cursor-pointer p-3 py-4 text-sm font-bold dark:bg-light-gray/60 dark:hover:bg-light-gray bg-gray/95 hover:bg-gray/85 text-white transition duration-500'>
                  <div className='flex items-center gap-3'>
                    <div className='text-2xl'>{chosenMethod?.method_id === payment.method_id ? <FaCheck /> : methodIcons[payment.method]}</div>
                    <p>{payment.method.toUpperCase()} - <span className='opacity-50'>{payment.method_id}</span></p>
                  </div>
                </div>
              ))}

            </motion.div>

            )}</AnimatePresence>
          </>
        )}
        </Disclosure>
  )
}

export default ChoosePayment
