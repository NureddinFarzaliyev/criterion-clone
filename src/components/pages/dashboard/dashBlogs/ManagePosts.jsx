import React, { useEffect } from 'react'
import { TH, TD, TR } from '../../../ui/Table'
import { LuRefreshCcw } from 'react-icons/lu'
import useBlog from '../../../../hooks/useBlog'
import LoadingPage from '../../../ui/LoadingPage'
import { CgExternal } from 'react-icons/cg'
import { FaPenNib } from "react-icons/fa";
import DeleteBlog from './DeleteBlog'

const ManagePosts = () => {
  const { blogs, getBlogs, isLoading } = useBlog()

  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      getBlogs()
    }
  }, [])

  return (
    <div className='relative min-h-[30vh]'>
      <p className='font-display uppercase mb-5 mt-20 opacity-60'>manage posts</p>

      <LoadingPage isLoading={isLoading}>
        <table className="min-w-full font-display">
          <thead className='relative'>
            <button className='text-white absolute top-[50%] translate-y-[-50%] right-0  rounded-sm  shadow-lg cursor-pointer p-3 font-display uppercase text-lg mb-3 opacity-70 transition duration-500'
              onClick={getBlogs}>
              <LuRefreshCcw />
            </button>

            <tr>
              <TH>ID</TH>
              <TH>Title</TH>
              <TH>Author</TH>
              <TH></TH>
              <TH></TH>
              <TH></TH>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <TR key={index}>
                <TD>{blog.id}</TD>
                <TD>{blog.title}</TD>
                <TD>{blog.author}</TD>
                <TD>
                  <a href={`/blog/${blog.id}`} target='_blank'>
                    <CgExternal className='text-3xl hover:text-gold opacity-70 hover:opacity-100 transition cursor-pointer' />
                  </a>
                </TD>
                <TD><FaPenNib className='text-xl hover:text-gold opacity-70 hover:opacity-100 transition cursor-pointer' /></TD>
                <TD><DeleteBlog id={blog.id} /></TD>
              </TR>
            ))}
          </tbody>
        </table>
      </LoadingPage>
    </div>
  )
}

export default ManagePosts
