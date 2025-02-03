import React, { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'
import { Link } from 'react-router-dom'

const RecommendedPosts = () => {
    const [recommendedPosts, setRecommendedPosts] = useState([])

    useEffect(() => {
        const fetchRecommendedPosts = async () => {
            // NOTE: This requires creating a Postgres function which returns random items from the Supabase database
            const { data, error } = await supabase.rpc('random_posts', { limit_count: 2 });
    
            if (error) {
                errorToast(error.message)
            } else {
                setRecommendedPosts(data)
            }
    
        }
        fetchRecommendedPosts()
    }, [])

    return (
        <div className='w-[90%] md:w-[80%] xl:w-[70%] mx-auto mt-20'>
            <h1 className='text-xl md:text-4xl font-text mb-10'>Read the Current</h1>
            <div className='grid lg:grid-cols-2 gap-5'>
                {recommendedPosts.length > 0 && recommendedPosts.map(((blog, index) => (
                    <Link key={index} to={`/blog/${blog.id}`} className='dark:bg-white bg-gray dark:text-gray text-white shadow-xl'>
                        <div className={` hover:text-gold \\ transition duration-700 blog-card`}>
                            <div className='h-96 w-full overflow-hidden'>
                                <img src={blog.cover} alt="" className={`h-96 w-full object-cover transition-all duration-900`} />
                            </div>
                            <div className='p-7 md:p-10'>
                                <h1 className='font-text font-bold text-xl md:text-3xl'>{blog.title}</h1>
                                <span className='font-display font-bold text-sm opacity-70'>{blog.author}</span>
                            </div>
                        </div>
                    </Link>
                )))}
            </div>
        </div>
    )
}

export default RecommendedPosts
