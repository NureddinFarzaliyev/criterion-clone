import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import Logo from './Logo'

const LoadingPage = ({isLoading, children}) => {
  return (
    <>
        <AnimatePresence>
            {isLoading && (
                <div className='absolute h-96 w-full left-0 flex items-center justify-center top-0'>
                    <motion.div
                    transition={{duration: 1}} 
                    initial={{opacity: 0.5}} 
                    animate={{opacity: 0.5}} 
                    exit={{opacity: 0}} 
                    className="spin h-min w-min">
                        <Logo height={75} />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {!isLoading && (
                <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1, transition: {duration: 1}}} 
                exit={{opacity: 0, transition: {duration: 0.3}}} >
                        {children}
                </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}

export default LoadingPage
