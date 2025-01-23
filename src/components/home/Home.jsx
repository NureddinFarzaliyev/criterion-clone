import React, { useEffect } from 'react'
import useBlog from '../../hooks/useBlog'

const Home = () => {
    const {fetchHighlightedBlogs, highlightedBlogs, error } = useBlog()

    useEffect(() => {
        fetchHighlightedBlogs()
    }, [])

    useEffect(() => {
        if(error) console.error(error)
    }, [error])

  return (
    <div>
        home
    </div>
  )
}

export default Home
