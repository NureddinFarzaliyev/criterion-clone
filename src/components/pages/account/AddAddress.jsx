import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { errorToast, successToast } from '../../../utils/toast'
import supabase from '../../../tools/supabase'
import { useSelector } from 'react-redux'
import spinner from '../../../assets/images/spinner.svg'
import StaticLang from '../../lang/StaticLang.jsx'
import { langFunc } from '../../lang/LangFunc'

const AddAddress = ({onAdd}) => {
    const {userId} = useSelector(state => state.auth)
    const [isOpen, setIsOpen] = useState(false)
    const [adding, setAdding] = useState(false)

    const defaultAddress = {
        country: '',
        city: '',
        street: '',
        building: '',
        note: ''
    }
    const [address, setAddress] = useState(defaultAddress)

    const inputHandler = (e) => {
        setAddress({...address, [e.target.name]: e.target.value})
    }

    const addAddress = async (address) => {
        const {error} = await supabase
        .from('address')
        .insert([{user_id: userId, address}])
        if(error) return console.log(error)
    }

    const handleAddress = async () => {
        setAdding(true)
        if(Object.values({...address, note: "_"}).every(value => value !== '')){
            await addAddress(Object.values(address).map((value, index) => `${value !== '' && index !== 0 ? ", " + value : value}`).join(' '))
            setAddress(defaultAddress)
            setIsOpen(false)
            successToast('Address added successfully.')
            onAdd()
        }else{
            errorToast('Please fill all the fields')
        }
        setAdding(false)
    }

  return (
    <>
    <button onClick={() => {setIsOpen(true)}} className='dark:bg-white/5 bg-gray text-white font-display p-5 text-md mt-4 shadow-lg w-full flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition duration-500 cursor-pointer'>
        <FaPlus /> <StaticLang en="ADD A NEW ADDRESS" az="YENİ ÜNVAN ƏLAVƏ EDİN" /> 
    </button>
    <Dialog transition open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-light p-10">
            <DialogTitle className="text-md font-bold font-display opacity-80"><StaticLang en="ADD NEW ADDRESS" az="YENİ ÜNVAN ƏLAVƏ EDİN" /></DialogTitle>

            <div className="my-10 flex flex-col gap-3 sm:w-96 font-text accent-gold">
                <input type="text" name='country' placeholder={langFunc("Country", "Ölkə")} className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='city' placeholder={langFunc("City", "Şəhər")} className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='street' placeholder={langFunc("Street", "Küçə")} className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='building' placeholder={langFunc("Building/House", "Bina/Ev")} className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='note' placeholder={langFunc("Extra Note", "Əlavə Qeyd")} className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <p className='opacity-50'>{Object.values(address).map((value, index) => `${value !== '' && index !== 0 ? ", " + value : value}`)}</p>
            </div>

            <div className="flex gap-4 justify-end font-display">
              <button disabled={adding} className='bg-gray/70 hover:bg-gray/90 text-white transition duration-500 p-3 px-5 cursor-pointer' onClick={() => setIsOpen(false)}><StaticLang en="CANCEL" az="LƏĞV ET" /></button>
              <button disabled={adding} onClick={handleAddress} className='bg-gold p-3 cursor-pointer text-white px-7 not-disabled:hover:bg-white not-disabled:hover:text-gray shadow-lg transition border-2 border-gold duration-700 not-disabled:hover:scale-110' >
                {adding ? <img className='h-7' src={spinner} alt="loading" /> : <StaticLang en="ADD" az="ƏLAVƏ ET" />}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default AddAddress
