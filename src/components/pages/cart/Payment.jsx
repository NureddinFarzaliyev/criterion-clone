import { motion } from 'motion/react'
import ChoosePayment from './ChoosePayment'
import ChooseAddress from './ChooseAddress'
import { useState } from 'react'
import { errorToast, successToast } from '../../../utils/toast'
import StaticLang from '../../lang/StaticLang.jsx'

const Payment = ({onPurchase}) => {
  const [chosenMethod, setChosenMethod] = useState({})
  const [chosenAddress, setChosenAddress] = useState({})

  const handlePurchase = async () => {
    if(!chosenMethod.method) return errorToast(<StaticLang en="Please choose a payment method." az="Zəhmət olmasa, ödəniş üsulu seçin." />)
    if(!chosenAddress.address) return errorToast(<StaticLang en="Please choose a shipping address." az="Zəhmət olmasa, çatdırılma məkanı seçin." />)
    successToast(<StaticLang en="Purchased successfully." az="Alış uğurla həyata keçirildi" />)

    onPurchase(chosenMethod, chosenAddress)

    setChosenMethod({})
    setChosenAddress({})
  }

  return (
    <div>
      <hr className='my-10 opacity-20' />
      <p className='font-display text-xs xl:text-sm mb-5 opacity-70'><StaticLang en="PAYMENT DETAILS" az="ALIŞ DETALLARI" /></p>
      
      <ChoosePayment chosenMethod={chosenMethod} setChosenMethod={setChosenMethod} />
      <ChooseAddress chosenAddress={chosenAddress} setChosenAddress={setChosenAddress} />

      <motion.button onClick={handlePurchase}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5 }}
        className='font-display shadow-xl text-center dark:bg-white bg-gray w-full h-16 dark:text-gray text-white font-bold mt-14 cursor-pointer'>
        <StaticLang en="PURCHASE" az="TƏSDİQLƏ" />
      </motion.button>
    </div>
  )
}

export default Payment
