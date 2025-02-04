import { AnimatePresence } from 'motion/react'
import React from 'react'
import { motion } from 'motion/react'

const FormInfoAnim = ({isVisible, children}) => {
  return (
    <AnimatePresence>
        {isVisible && (
            <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 0.5, height: "auto"}} exit={{opacity: 0, height: 0}} transition={{duration: .3}}>{children}</motion.div>
        )}
    </AnimatePresence>
  )
}

export default FormInfoAnim
