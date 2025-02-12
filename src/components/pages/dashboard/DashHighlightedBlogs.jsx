import { useEffect, useState } from 'react'
import useBlog from '../../../hooks/useBlog'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { addHighlightedBlog, removeHighlightedBlog } from '../../../features/blog/highlightedBlogs';
import { useDispatch } from 'react-redux';
import supabase from '../../../tools/supabase';
import { errorToast } from '../../../utils/toast';
import { FiPlus } from "react-icons/fi";
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import spinner from '../../../assets/images/spinner-black.svg';

const DashHighlightedBlogs = () => {
    const { highlightedBlogs, getHighlightedBlogs, isLoading } = useBlog()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const [searchResult, setSearchResult] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        if (!highlightedBlogs || highlightedBlogs.length === 0) {
            getHighlightedBlogs()
        }
    }, [])

    const handleRemoveBlog = async (e, id) => {
        e.stopPropagation()
        dispatch(removeHighlightedBlog(id))

        const { error } = await supabase
            .from('blog')
            .update({ isHighlighted: false })
            .eq('id', id)

        if (error) {
            addHighlightedBlog(id)
            return errorToast('Failed to remove blog')
        }
    }

    const handleAddBlog = async (blog) => {
        dispatch(addHighlightedBlog(blog))
        setIsOpen(false)

        const {error} = await supabase
            .from('blog')
            .update({isHighlighted: true})
            .eq('id', blog.id)
        
        if(error) {
            removeHighlightedBlog(blog)
            return errorToast('Failed to add blog. Please try again.')
        }

        setSearchResult([])
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        setIsSearching(true)

        const {data, error} = await supabase
        .from('blog')
        .select('*')
        .textSearch('title', e.target.search.value)

        setIsSearching(false)
        setSearchResult(data)
        // if(error) return errorToast('Failed to search for blog')
    }

    return (
        <div>
            <p className='font-display uppercase mb-5 mt-20 opacity-60'>highlighted blogs</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {highlightedBlogs.map((blog, index) => (
                    <div className='relative shadow-lg' key={index}>
                        <button onClick={(e) => { handleRemoveBlog(e, blog.id) }} className='cursor-pointer absolute right-0 bg-white text-black z-50 text-2xl m-3 p-2 opacity-50 hover:opacity-100 transition duration-500'><RxCross1 /></button>
                        <Link target='_blank' to={`/blog/${blog.id}`} className='blog-card'>
                            <div className="h-48 overflow-hidden">
                                <img src={blog.cover} className='overflow-hidden w-full h-full object-cover transition duration-500' />
                            </div>
                            <div className='bg-gradient-to-t from-black absolute bottom-0 w-full to-white/0 h-32 text-white font-text p-3 text-xl flex items-end justify-center'>
                                {blog.title}
                            </div>
                        </Link>
                    </div>
                ))}
                {highlightedBlogs && highlightedBlogs.length < 3 && (
                    Array(3 - highlightedBlogs?.length).fill().map((_, index) => (
                        <div key={index} onClick={() => {setIsOpen(true)}} className='h-48 shadow-lg border-2 dark:border-white border-gray opacity-15 hover:opacity-40 transition duration-300 flex items-center justify-center text-6xl cursor-pointer'>
                            <FiPlus />
                        </div>
                    ))
                )}
            </div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition 
            className="fixed inset-0 flex w-screen items-center justify-center z-50 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
                <DialogBackdrop className="fixed inset-0 bg-black/60"  />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="min-w-lg max-h-96 text-sm space-y-4 bg-white p-5">
                    <h1 className='font-display opacity-70 uppercase'>choose a blog post to highlight</h1>
                    <form onSubmit={handleSearch} className='relative'>
                        <input type="text" name="search" id="" placeholder='SEARCH...'  className='font-display bg-gray/20 p-3 w-full accent-gold' />
                        <button className='absolute top-[50%] translate-y-[-50%] cursor-pointer hover:opacity-100 transition right-4 text-2xl opacity-50'><FaMagnifyingGlass /></button>
                    </form>
                    <div className='mt-5'>
                        {isSearching ? (
                            <img src={spinner} alt="spinner" className='mx-auto h-10 text-black' />
                        ) : (
                            searchResult?.map((blog, index) => (
                                <p key={index} onClick={() => {handleAddBlog(blog)}}
                                className='bg-gray/20 p-3 shadow-md font-display text-sm cursor-pointer hover:bg-gray/40 transition duration-500' >{blog.title}</p>
                            ))
                        )}
                    </div>
                    
                </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default DashHighlightedBlogs
