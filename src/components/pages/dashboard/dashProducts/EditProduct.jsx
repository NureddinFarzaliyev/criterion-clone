import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useRef, useState } from 'react'
import { FaPenNib } from 'react-icons/fa'
import InputGroup from '../dashBlogs/InputGroup'
import spinner from '../../../../assets/images/spinner.svg'
import useProducts from '../../../../hooks/useProducts'
import { successToast } from '../../../../utils/toast'

const EditProduct = ({product}) => {
    const [isOpen, setIsOpen] = useState(false)
    const formRef = useRef(null)

    const {editProduct, localLoading} = useProducts()

    const handleEdit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(formRef.current).entries())
        editProduct(product.id, data, () => {
            setIsOpen(false)
            successToast('Product edited successfully')
        })
    }

    return (
        <>
            <button onClick={() => { setIsOpen(true) }}>
                <FaPenNib className='text-xl hover:text-gold opacity-70 hover:opacity-100 transition cursor-pointer' />
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition
                className="fixed inset-0 flex w-screen items-center justify-center z-50 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
                <DialogBackdrop className="fixed inset-0 bg-black/60" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="md:w-[50vw] max-h-[80vh] overflow-y-scroll text-sm space-y-4 bg-gray text-white p-5">
                        <p className='font-display uppercase my-5 opacity-60'>edit the product</p>

                        <form ref={formRef} className='xl:grid grid-cols-2 gap-5'>
                            <InputGroup defaultValue={product.title} name={"title"} />
                            <InputGroup defaultValue={product.director} name={"director"} />
                            <InputGroup defaultValue={product.country} name={"country"} />
                            <InputGroup defaultValue={product.year} name={"year"} />
                            <InputGroup defaultValue={product.price} name={"price"} />
                            <InputGroup defaultValue={product.cover_large} name={"cover_large"} />
                            <InputGroup defaultValue={product.cover_small} name={"cover_small"} />
                            <InputGroup defaultValue={product.description} name={"description"} />
                            <div className='flex justify-start items-center gap-4'> 
                                <button disabled={localLoading} className='h-min disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-light-gray hover:bg-light-gray/50' onClick={(e) => { e.preventDefault(); setIsOpen(false) }}>CANCEL</button>
                                <button disabled={localLoading} className='h-min disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-gold hover:bg-gold/70'
                                    onClick={(e) => { handleEdit(e) }}>
                                    {localLoading ? <img src={spinner} alt="spinner" className='h-6' /> : 'PUBLISH'}
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default EditProduct
