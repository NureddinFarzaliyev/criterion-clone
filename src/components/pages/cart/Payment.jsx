import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Payment = () => {

  return (
    <>
        <motion.button onClick={() => {setOpen(true)}} 
        whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} transition={{duration: 0.5}}
        className='font-display shadow-xl text-center dark:bg-white bg-gray w-full h-16 dark:text-gray text-white font-bold mt-10 cursor-pointer'>
            PURCHASE
        </motion.button> 
    </>
  )
}

export default Payment
