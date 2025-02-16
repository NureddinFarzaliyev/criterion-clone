import React, { useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { errorToast } from '../../../../utils/toast'
import useProducts from '../../../../hooks/useProducts'

const DeleteProduct = ({ id }) => {
    const { error, deleteProduct, localLoading } = useProducts()

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (error) {
            console.error(error)
            errorToast("Failed to delete post. Please try again.")
        }
    }, [error])

    return (
        <>
            <button onClick={() => {setIsOpen(true)}} disabled={localLoading}>
                <FaRegTrashAlt className='text-xl hover:text-gold opacity-70 hover:opacity-100 transition cursor-pointer' />
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition
                className="fixed inset-0 flex w-screen items-center justify-center z-50 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
                <DialogBackdrop className="fixed inset-0 bg-black/60" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="md:w-lg max-h-[80vh] overflow-y-scroll text-sm space-y-4 bg-light-gray text-white p-5">
                        <p className='text-2xl text-center font-text'>Are you sure you want to delete the product?</p>
                        <div className='flex gap-3 justify-center mt-5'>
                            <button onClick={() => {setIsOpen(false)}} className='bg-white/70 hover:bg-white transition duration-500 text-gray py-2 px-5 shadow-md font-display uppercase cursor-pointer font-bold'>Cancel</button>
                            <button onClick={() => {   deleteProduct(id) ; setIsOpen(false)}} className='bg-gold hover:bg-gold/80 transition duration-500 text-white py-2 px-5 shadow-md font-display uppercase cursor-pointer font-bold'>Delete</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default DeleteProduct
