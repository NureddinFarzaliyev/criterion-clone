import { motion } from 'motion/react'
import ChoosePayment from './ChoosePayment'

const Payment = () => {


  return (
    <div className='overflow-x-hidden'>
      <p className='font-display text-xs xl:text-sm my-5 mt-10 opacity-70'>PAYMENT DETAILS</p>
      
      <ChoosePayment />

      <motion.button
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5 }}
        className='font-display shadow-xl text-center dark:bg-white bg-gray w-full h-16 dark:text-gray text-white font-bold mt-10 cursor-pointer'>
        PURCHASE
      </motion.button>
    </div>
  )
}

export default Payment
