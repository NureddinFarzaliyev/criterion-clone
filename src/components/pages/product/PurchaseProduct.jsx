import { useAnimationControls } from 'motion/react'
import { motion } from 'motion/react'

const PurchaseProduct = ({singleProduct}) => {

    const cartBtnControls = useAnimationControls()

    return (
        <div className='lg:w-1/2 flex flex-col items-center'>
            <img src={singleProduct.cover_large} alt={singleProduct.title} className='shadow-xl w-[80%]' />
            <div className='mt-10 w-[80%]'>
                <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} transition={{duration: 0.5}}
                onHoverStart={()=>cartBtnControls.start({height: '100%'})} onHoverEnd={()=>cartBtnControls.start({height: '0%'})}
                className='border-2 w-full border-gold h-20 px-5 flex items-center justify-between cursor-pointer relative overflow-hidden font-display font-bold'>
                    <motion.div animate={cartBtnControls} initial={{height: '0%'}} 
                    className='bg-gold h-full w-full absolute left-0 z-0 top-0 origin-top'></motion.div>
                    <div className='z-10'>ADD TO CART</div>
                    <div className='z-10 font-text text-2xl'>${singleProduct.price}</div>
                </motion.button>

                <motion.button whileHover={{scale: 1.05, opacity: 1}} whileTap={{scale: 0.95, opacity: 0.5}} transition={{duration: 0.5}}
                className='mt-4 border-2 w-full border-light-gray opacity-50 h-20 px-5 flex items-center justify-between cursor-pointer relative overflow-hidden font-display font-bold'>
                    <div className='z-10'>ADD TO WISHLIST</div>
                </motion.button>
            </div>
        </div>
    )
}

export default PurchaseProduct
