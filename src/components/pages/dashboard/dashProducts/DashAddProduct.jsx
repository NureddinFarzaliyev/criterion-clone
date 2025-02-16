import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useRef, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import InputGroup from '../dashBlogs/InputGroup'
import spinner from '../../../../assets/images/spinner.svg'
import { errorToast, successToast } from '../../../../utils/toast'
import supabase from '../../../../tools/supabase'
import useProducts from '../../../../hooks/useProducts'
import { useSelector } from 'react-redux'

const DashAddProduct = () => {
    const formRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { getProducts } = useProducts()
    const { dashCurrentPage } = useSelector(state => state.products)

    const handleAdd = async (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(formRef.current))

        if(Object.values(formData).some(value => value === '')) {
            return errorToast('Please fill all fields')
        }

        setIsLoading(true)

        const {error} = await supabase
        .from('products')
        .insert([formData])

        setIsLoading(false)

        if (error){
            console.log(error)
            return errorToast('Failed to add product')
        }   

        setIsOpen(false)
        successToast('Product added successfully!')
        getProducts(dashCurrentPage, true)
    }

    return (
        <div>
            <p className='font-display uppercase mb-5 mt-20 opacity-60'>add new product</p>

            <div onClick={() => { setIsOpen(true) }} className='h-48 shadow-lg border-2 dark:border-white border-gray opacity-15 hover:opacity-40 transition duration-300 flex items-center justify-center text-6xl cursor-pointer'>
                <FiPlus />
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition
                className="fixed inset-0 flex w-screen items-center justify-center z-50 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
                <DialogBackdrop className="fixed inset-0 bg-black/60" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="md:w-[50vw] max-h-[80vh] overflow-y-scroll text-sm space-y-4 bg-gray text-white p-5">
                        <p className='font-display uppercase my-5 mb-10 opacity-60'>add new product</p>
                        <form ref={formRef} className='xl:grid grid-cols-2 gap-5'>
                            <InputGroup name={"title"} />
                            <InputGroup name={"director"} />
                            <InputGroup name={"country"} />
                            <InputGroup name={"year"} />
                            <InputGroup name={"price"} />
                            <InputGroup name={"cover_large"} />
                            <InputGroup name={"cover_small"} />
                            <div className='flex justify-end items-center gap-4'> 
                                <button disabled={isLoading} className='h-min disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-light-gray hover:bg-light-gray/50' onClick={(e) => { e.preventDefault(); setIsOpen(false) }}>CANCEL</button>
                                <button disabled={isLoading} className='h-min disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-gold hover:bg-gold/70'
                                    onClick={(e) => { handleAdd(e) }}>
                                    {isLoading ? <img src={spinner} alt="spinner" className='h-6' /> : 'PUBLISH'}
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default DashAddProduct
