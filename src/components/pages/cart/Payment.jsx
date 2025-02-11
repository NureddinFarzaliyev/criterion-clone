import { motion } from 'motion/react'
import ChoosePayment from './ChoosePayment'
import ChooseAddress from './ChooseAddress'

const Payment = () => {
  return (
    <div>
      <hr className='my-10 opacity-20' />
      <p className='font-display text-xs xl:text-sm mb-5 opacity-70'>PAYMENT DETAILS</p>
      
      <ChoosePayment />
      <ChooseAddress />

      <motion.button
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5 }}
        className='font-display shadow-xl text-center dark:bg-white bg-gray w-full h-16 dark:text-gray text-white font-bold mt-14 cursor-pointer'>
        PURCHASE
      </motion.button>
    </div>
  )
}

export default Payment
