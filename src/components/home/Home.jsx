import React, { useEffect } from 'react'
import useBlog from '../../hooks/useBlog'

const Home = () => {
    const {highlightedBlogs, getHighlightedBlogs, isLoading, error, getBlogs, blogs} = useBlog()

    useEffect(() => {
        getHighlightedBlogs()
        getBlogs()
    }, [])

    useEffect(() => {
      console.log("highlightedBlogs", highlightedBlogs)
    }, [highlightedBlogs])

    useEffect(() => {
      console.log("blogs", blogs)
    }, [blogs])


  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Home</p>}
    </div>
  )
}

export default Home
