import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import React from 'react'
import Logo from './Logo'

const LoadingPage = ({isLoading, children}) => {
  return (
    <>
        <MotionConfig transition={{duration: 1}}>

        <AnimatePresence>
            {isLoading && (
                <div className='absolute h-96 w-dvw flex items-center justify-center top-0'>
                    <motion.div initial={{opacity: 0.5}} animate={{opacity: 0.5}} exit={{opacity: 0}} className="spin h-min w-min">
                        <Logo height={75} />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {!isLoading && (
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
                        {children}
                </motion.div>
            )}
        </AnimatePresence>

        </MotionConfig>
    </>
  )
}

export default LoadingPage
