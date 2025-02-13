import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useRef, useState } from 'react'
import { FaPenNib } from 'react-icons/fa'
import InputGroup from './InputGroup'
import ParagraphTextArea from './ParagraphTextArea'
import { FiPlus } from 'react-icons/fi'
import { createParagraphsArray } from '../../../../utils/createParagraphsArray'
import useBlog from '../../../../hooks/useBlog'
import spinner from '../../../../assets/images/spinner.svg'

const EditBlog = ({ blog }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [newBlog, setNewBlog] = useState(blog)
    const formRef = useRef(null)
    const {editPost, getBlogs, addPost, isLocalLocading} = useBlog()

    const handleEdit = async (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(formRef.current))
        formData.paragraphs = createParagraphsArray(formData)
        await editPost(blog.id, formData)
        await getBlogs()
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
                        <p className='font-display uppercase my-5 opacity-60'>edit the blog post</p>

                        <form ref={formRef}>
                            <InputGroup name='title' defaultValue={newBlog.title} />
                            <InputGroup name='author' defaultValue={newBlog.author} />
                            <InputGroup name='cover' defaultValue={newBlog.cover} />

                            {newBlog.paragraphs.map((paragraph, index) => (
                                <ParagraphTextArea index={index} key={index} defaultValue={paragraph} />
                            ))}

                            <div onClick={() => { setNewBlog({...newBlog, paragraphs: [...newBlog.paragraphs, '']}) }} className='h-12 mt-4 shadow-lg border-2 border-white opacity-15 hover:opacity-40 transition duration-300 flex items-center justify-center text-3xl cursor-pointer'>
                                <FiPlus />
                            </div>

                            <div className='flex gap-3 justify-end mt-10'>
                                <button disabled={isLocalLocading} className='disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-light-gray hover:bg-light-gray/50' 
                                onClick={(e) => { e.preventDefault(); setIsOpen(false) }}>
                                    CANCEL
                                </button>
                                <button disabled={isLocalLocading} className='disabled:opacity-50 py-3 px-7 font-display cursor-pointer transition duration-500 bg-gold hover:bg-gold/70'
                                    onClick={(e) => { handleEdit(e) }}>
                                    {isLocalLocading ? <img src={spinner} alt="spinner" className='h-6' /> : 'PUBLISH'}
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default EditBlog
