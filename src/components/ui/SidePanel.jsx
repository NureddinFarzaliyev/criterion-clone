import React from 'react'
import { motion } from 'motion/react'
import { RxCross1 } from "react-icons/rx";

const SidePanel = ({onClose, children}) => {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.7, ease: 'easeInOut' }}
    className='fixed top-0 right-0 h-full bg-white dark:bg-gray bg-opacity-50 z-30 p-10 pt-32 shadow-xl w-full md:w-1/2 xl:w-1/3'>
        <motion.button className='absolute right-10 top-10 cursor-pointer text-gray dark:text-white' whileHover={{color: `var(--color-gold)`, scale: 1.3}} onClick={onClose}><RxCross1 /></motion.button>
        {children}        
    </motion.div>
  )
}

export default SidePanel
