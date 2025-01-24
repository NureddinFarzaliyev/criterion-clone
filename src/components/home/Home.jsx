import React, { useEffect } from 'react'
import useBlog from '../../hooks/useBlog'
import { errorToast } from '../../utils/toast'
import HomeBlog from './HomeBlog'

const Home = () => {
    const {highlightedBlogs, getHighlightedBlogs, isLoading, error} = useBlog()

    useEffect(() => {
        getHighlightedBlogs()
    }, [getHighlightedBlogs])

    useEffect(() => {
      if (error) errorToast(error)
    }, [error])

  return (
    <main className='snap-y snap-mandatory h-dvh overflow-y-scroll'>
      {highlightedBlogs?.map((blog, i) => <HomeBlog {...blog} key={i} />) }
    </main>
  )
}

export default Home
