import React from 'react'
import { motion } from 'motion/react'

const WhiteBtn = ({textContent}) => {
  return (
    <motion.button 
        initial={{backgroundColor: `var(--color-white)`, color: `var(--color-gray)`}}
        whileHover={{backgroundColor: `var(--color-gray)`, color: "var(--color-white)"}}
        className='font-display font-extrabold text-sm px-12 py-5 cursor-pointer'>

        {textContent}

    </motion.button>
  )
}

export default WhiteBtn
