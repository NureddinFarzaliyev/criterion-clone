import { motion } from 'motion/react'
import ChoosePayment from './ChoosePayment'
import ChooseAddress from './ChooseAddress'
import { useState } from 'react'
import { errorToast, successToast } from '../../../utils/toast'

const Payment = ({onPurchase}) => {
  const [chosenMethod, setChosenMethod] = useState({})
  const [chosenAddress, setChosenAddress] = useState({})

  const handlePurchase = async () => {
    if(!chosenMethod.method) return errorToast('Please choose a payment method.')
    if(!chosenAddress.address) return errorToast('Please choose a shipping address.')
    successToast('Purchase is successful.')

    onPurchase(chosenMethod, chosenAddress)

    setChosenMethod({})
    setChosenAddress({})
  }

  return (
    <div>
      <hr className='my-10 opacity-20' />
      <p className='font-display text-xs xl:text-sm mb-5 opacity-70'>PAYMENT DETAILS</p>
      
      <ChoosePayment chosenMethod={chosenMethod} setChosenMethod={setChosenMethod} />
      <ChooseAddress chosenAddress={chosenAddress} setChosenAddress={setChosenAddress} />

      <motion.button onClick={handlePurchase}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5 }}
        className='font-display shadow-xl text-center dark:bg-white bg-gray w-full h-16 dark:text-gray text-white font-bold mt-14 cursor-pointer'>
        PURCHASE
      </motion.button>
    </div>
  )
}

export default Payment
