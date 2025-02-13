import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../../../tools/supabase'
import { errorToast } from '../../../utils/toast'
import GeneralSection from '../../ui/GeneralSection'
import BigLetter from '../../ui/BigLetter'
import RecommendedPosts from '../product/RecommendedPosts'
import RecommendedProducts from '../product/RecommendedProducts'

const Post = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const getPost = async () => {
      const { data , error } = await supabase
        .from('blog')
        .select("*")
        .eq('id', id)

      if(error){
        errorToast(error)
        return
      }

      setPost(data[0])
    }

    getPost()
  }, [id])

  return (
    <GeneralSection>
      <div className='px-4 lg:px-32 xl:px-44'>
        {post && (
          <>
            <h1 className='mt-10 md:mt-14 text-3xl md:text-5xl xl:text-6xl font-text text-center'>{post.title}</h1>
            <p className='text-center mt-5 font-display text-gold italic text-sm md:text-lg'>By {post.author}</p>
            <img className='my-14 md:my-20 shadow-xl w-full' src={post.cover} alt="" />
            <div className='flex flex-col items-center'>
              {post.paragraphs.map((paragraph, index) => (
                <p key={index} className='text-md md:text-lg mb-5 font-text sm:px-10 xl:px-0 xl:w-1/2'>{index === 0 ? (
                  <>
                  <BigLetter>{paragraph[0]}</BigLetter>
                  {paragraph.slice(1)}
                  </>
                ) : paragraph}</p>
              ))}
            </div>
          </>
        )}
      </div>
      <RecommendedPosts />
      <RecommendedProducts />
    </GeneralSection>
  )
}

export default Post
