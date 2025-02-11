import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { errorToast, successToast } from '../../../utils/toast'
import supabase from '../../../tools/supabase'
import { useSelector } from 'react-redux'
import spinner from '../../../assets/images/spinner.svg'

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
    <button onClick={() => {setIsOpen(true)}} className='dark:bg-white/5 bg-black/10 font-text p-5 text-lg mt-4 shadow-lg w-full flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition duration-500 cursor-pointer'>
        <FaPlus /> Add a new address
    </button>
    <Dialog transition open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-light p-10">
            <DialogTitle className="text-md font-bold font-display opacity-80">ADD NEW ADDRESS</DialogTitle>

            <div className="my-10 flex flex-col gap-3 sm:w-96 font-text accent-gold">
                <input type="text" name='country' placeholder="Country" className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='city' placeholder="City" className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='street' placeholder="Street" className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='building' placeholder="Building/House" className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <input type="text" name='note' placeholder="Extra Note" className="w-full p-3 border border-gray/50" onChange={(e) => {inputHandler(e)}} />
                <p className='opacity-50'>{Object.values(address).map((value, index) => `${value !== '' && index !== 0 ? ", " + value : value}`)}</p>
            </div>

            <div className="flex gap-4 justify-end font-display">
              <button disabled={adding} className='bg-gray/70 hover:bg-gray/90 text-white transition duration-500 p-3 px-5 cursor-pointer' onClick={() => setIsOpen(false)}>CANCEL</button>
              <button disabled={adding} onClick={handleAddress} className='bg-gold p-3 cursor-pointer text-white px-7 hover:bg-white hover:text-gray shadow-lg transition border-2 border-gold duration-700 hover:scale-110' >
                {adding ? <img className='h-7' src={spinner} alt="loading" /> : "ADD"}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default AddAddress
