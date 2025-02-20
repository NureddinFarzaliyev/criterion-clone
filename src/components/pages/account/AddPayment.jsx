import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { errorToast, successToast } from '../../../utils/toast'
import supabase from '../../../tools/supabase'
import { useSelector } from 'react-redux'
import spinner from '../../../assets/images/spinner.svg'
import { FaCreditCard } from 'react-icons/fa6'
import { IoWallet } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import StaticLang from '../../lang/StaticLang.jsx'

const AddPayment = ({onAdd}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [adding, setAdding] = useState(false)
  const {userId} = useSelector(state => state.auth)
  
  const defaultPayment = {
    method: '',
    method_id: ''
  }

  const [payment, setPayment] = useState(defaultPayment)

  const inputHandler = (e) => {
    setPayment({...payment, [e.target.name]: e.target.value})
  }

  const close = () => {
    setIsOpen(false)
    setPayment(defaultPayment)
  }

  const addMethod = async () => {
    if(payment.method === '' || payment.method_id === '') return errorToast('Please fill all fields.')
    setAdding(true)
    const {error} = await supabase
    .from('payment')
    .insert([{user_id: userId, ...payment}])
    if(error) return console.log(error)
    successToast('Payment method added successfully.')
    setAdding(false)
    close()
    onAdd()
  }

  const handleSelectChange = (value) => {
    setPayment({...payment, method: value})
  }

  const payment_methods = [
    {name: "card", icon: <FaCreditCard />},
    {name: "wallet", icon: <IoWallet />},
    {name: "giftcard", icon: <FiGift />}

  ]

  return (
    <>
      <button onClick={() => {setIsOpen(true)}} className='dark:bg-white/5 bg-gray text-white font-display p-5 text-md mt-4 shadow-lg w-full flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition duration-500 cursor-pointer'>
        <FaPlus /> <StaticLang en="ADD NEW METHOD" az="YENİ ÜSUL ƏLAVƏ ET" />      
      </button>

      <Dialog transition open={isOpen} onClose={close} className="fixed inset-0 z-50 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
              <DialogBackdrop className="fixed inset-0 bg-black/50" />
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-light p-10">
                  <DialogTitle className="text-md font-bold font-display opacity-80"><StaticLang en="ADD NEW PAYMENT METHOD" az="YENİ ÖDƏNİŞ ÜSULU ƏLAVƏ EDİN" /></DialogTitle>
      
                  <div className="my-10 flex flex-col gap-3 w-60 sm:w-96 font-text accent-gold relative">
                     <Listbox value={payment.method} onChange={handleSelectChange}>
                      <ListboxButton className='p-3 text-xl text-white shadow-lg cursor-pointer bg-gray hover:bg-gray/90 transition duration-500'>
                        {payment.method !== '' ? payment.method.toUpperCase()[0] + payment.method.slice(1) : <StaticLang en="Choose a Payment Method" az="Ödəniş Üsulu Seçin" />}
                      </ListboxButton>
                      <ListboxOptions anchor="bottom" transition
                        className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 w-60 sm:w-96 font-display">
                          {payment_methods.map((method, index) => (
                            <ListboxOption value={method.name} key={index} className="bg-light-gray hover:bg-gray cursor-pointer duration-500 p-3 py-4 text-white text-sm flex items-center font-bold">
                              <div className='text-2xl ml-2 mr-4'>{method.icon}</div>
                              {method.name.toUpperCase()}
                            </ListboxOption>
                          ))}
                      </ListboxOptions>
                    </Listbox>

                     {payment.method !== '' && (
                       <input type="text" name='method_id' placeholder={payment.method === "card" ? "Card Number" : payment.method === "giftcard" ? "Giftcard ID" : "Wallet ID"} className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                     )}
                     {
                      payment.method === "card" && (
                        <>
                        <input type='text' name='owner' placeholder='Card Owner' className="w-full p-3 border border-gray/50" />
                        <div className="flex gap-3">
                          <input type="text" name='expiry' placeholder="Expiry Date" className="w-full p-3 border border-gray/50" />
                          <input type="text" name='cvv' placeholder="CVV" className="w-full p-3 border border-gray/50" />
                        </div>
                        </>
                      )
                     }
                  </div>
      
                  <div className="flex gap-4 justify-end font-display">
                    <button disabled={adding} className='bg-gray/70 hover:bg-gray/90 text-white transition duration-500 p-3 px-5 cursor-pointer' onClick={close}><StaticLang en="CANCEL" az="LƏĞV ET" /></button>
                    <button disabled={adding} onClick={addMethod} className='bg-gold p-3 cursor-pointer text-white px-7 not-disabled:hover:bg-white not-disabled:hover:text-gray shadow-lg transition border-2 border-gold duration-700 not-disabled:hover:scale-110' >
                      {adding ? <img className='h-7' src={spinner} alt="loading" /> : <StaticLang en="ADD" az="ƏLAVƏ ET" />}
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
    </>
  )
}

export default AddPayment
