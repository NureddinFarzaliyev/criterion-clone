import React, { useEffect, useState } from 'react'
import useBlog from '../../../hooks/useBlog'
import { errorToast } from '../../../utils/toast'
import HomeBlog from './HomeBlog'
import Dots from './Dots'

const Home = () => {
  const {highlightedBlogs, getHighlightedBlogs, isLoading, error} = useBlog()

  useEffect(() => {
      getHighlightedBlogs()
  }, [getHighlightedBlogs])

  useEffect(() => {
    if (error) errorToast(error)
  }, [error])

  const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <main className='snap-y snap-mandatory h-dvh overflow-y-scroll' onScroll={(e) => {setScrollPosition(e.target.scrollTop)}}>
      {highlightedBlogs?.map((blog, i) => <HomeBlog {...blog} key={i} />) }
      <Dots scrollPosition={scrollPosition} />
    </main>
  )
}

export default Home
