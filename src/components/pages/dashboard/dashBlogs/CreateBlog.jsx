import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useRef, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import InputGroup from './InputGroup'
import spinner from '../../../../assets/images/spinner.svg'
import supabase from '../../../../tools/supabase'
import { errorToast, successToast } from '../../../../utils/toast'

const CreateBlog = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [paragraphs, setParagraphs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const form = useRef(null)

    const handlePublish = async (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(form.current))

        let paragraphs = []
        for (let key in formData) {
            if (key.includes('paragraph')) {
                paragraphs.push(formData[key])
                delete formData[key]
            }
        }
        formData.paragraphs = paragraphs

        setIsLoading(true)

        const {error} = await supabase
            .from('blog')
            .insert([formData])

        if (error){
            console.log(error)
            return errorToast('Failed to publish blog post')
        }

        setIsLoading(false)
        setIsOpen(false)
        setParagraphs([])
        successToast('Blog post published successfully!')
    }

    return (
        <div>
            <p className='font-display uppercase mb-5 mt-20 opacity-60'>publish new blog post</p>
            <div onClick={() => { setIsOpen(true) }} className='h-48 shadow-lg border-2 dark:border-white border-gray opacity-15 hover:opacity-40 transition duration-300 flex items-center justify-center text-6xl cursor-pointer'>
                <FiPlus />
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition
                className="fixed inset-0 flex w-screen items-center justify-center z-50 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
                <DialogBackdrop className="fixed inset-0 bg-black/60" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="md:w-lg max-h-[80vh] overflow-y-scroll text-sm space-y-4 bg-gray text-white p-5">
                        <p className='font-display uppercase my-5 opacity-60'>publish new blog post</p>
                        <form ref={form} >
                            <InputGroup name='title' />
                            <InputGroup name='author' />
                            <InputGroup name='cover' />

                            <p className='font-display uppercase my-5 opacity-60'>Paragraphs</p>
                            {paragraphs.map((_, index) => (
                                <div key={index}>
                                    <label htmlFor={`paragraph${index}`} className='font-display uppercase opacity-50 text-xs'>Paragraph {index + 1}</label>
                                    <textarea key={index} name={`paragraph${index}`} id={`paragraph${index}`} className='w-full bg-light-gray text-white p-2 my-2 accent-gold font-text text-md min-h-20' />   
                                </div>                             
                            ))}
                            <div onClick={() => { setParagraphs([...paragraphs, '']) }} className='h-12 mt-4 shadow-lg border-2 dark:border-white border-gray opacity-15 hover:opacity-40 transition duration-300 flex items-center justify-center text-3xl cursor-pointer'>
                                <FiPlus />
                            </div>
                            
                            <div className='flex gap-3 justify-end mt-10'>
                                <button disabled={isLoading} className='disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-light-gray hover:bg-light-gray/50' onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>CANCEL</button>
                                <button disabled={isLoading} className='disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-gold hover:bg-gold/70' 
                                onClick={(e) => {handlePublish(e)}}>
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

export default CreateBlog
