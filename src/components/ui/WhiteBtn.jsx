import React from 'react'
import { motion } from 'motion/react'

const WhiteBtn = ({textContent}) => {
  return (
    <motion.button 
        initial={{backgroundColor: `var(--bg-white)`, color: `var(--bg-gray)`}}
        whileHover={{backgroundColor: `var(--bg-gray)`, color: "var(--bg-white)"}}
        className='font-display font-extrabold text-sm px-12 py-5 cursor-pointer'>

        {textContent}

    </motion.button>
  )
}

export default WhiteBtn
