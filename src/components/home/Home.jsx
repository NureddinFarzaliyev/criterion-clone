import React, { useEffect } from 'react'
import useBlog from '../../hooks/useBlog'
import { errorToast } from '../../utils/toast'

const Home = () => {
    const {highlightedBlogs, getHighlightedBlogs, isLoading, error, getBlogs, blogs} = useBlog()

    useEffect(() => {
        getHighlightedBlogs()
        getBlogs()
    }, [getHighlightedBlogs, getBlogs])

    useEffect(() => {
      console.log("highlightedBlogs", highlightedBlogs)
    }, [highlightedBlogs])

    useEffect(() => {
      console.log("blogs", blogs)
    }, [blogs])

    useEffect(() => {
      if (error) errorToast(error)
    }, [error])

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Home</p>}
    </div>
  )
}

export default Home
