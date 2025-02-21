import { useEffect, useState } from 'react'
import useBlog from '../../../../hooks/useBlog'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { addHighlightedBlog, removeHighlightedBlog } from '../../../../features/blog/highlightedBlogs';
import { useDispatch } from 'react-redux';
import supabase from '../../../../tools/supabase';
import { errorToast } from '../../../../utils/toast';
import { FiPlus } from "react-icons/fi";
import StaticLang from '../../../lang/StaticLang';

import SearchDialog from '../../../ui/SearchDialog';

const DashHighlightedBlogs = () => {
    const { highlightedBlogs, getHighlightedBlogs } = useBlog()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

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

        const { error } = await supabase
            .from('blog')
            .update({ isHighlighted: true })
            .eq('id', blog.id)

        if (error) {
            removeHighlightedBlog(blog)
            return errorToast('Failed to add blog. Please try again.')
        }

        setSearchResult([])
    }

    return (
        <div>
            <p className='font-display uppercase mb-5 mt-20 opacity-60'><StaticLang en="highlighted posts" az="Önə Çıxan Postlar" /></p>
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
                        <div key={index} onClick={() => { setIsOpen(true) }} className='h-48 shadow-lg border-2 dark:border-white border-gray opacity-15 hover:opacity-40 transition duration-300 flex items-center justify-center text-6xl cursor-pointer'>
                            <FiPlus />
                        </div>
                    ))
                )}
            </div>

            <SearchDialog fromTable={'blog'} fromField={'title'} handleChosenElement={(blog) => handleAddBlog(blog)} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default DashHighlightedBlogs
