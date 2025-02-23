import { useEffect, useState } from 'react'
import useBlog from '../../../hooks/useBlog'
import { errorToast } from '../../../utils/toast'
import HomeBlog from './HomeBlog'
import Dots from './Dots'
import StoreLink from './StoreLink'
import BlogAndStore from './BlogAndStore'
import HomeCC40 from './HomeCC40'
import HighlightedProducts from './HighlightedProducts'
import Footer from '../../layout/footer/Footer'
import { toast } from 'react-toastify'
import HomeThreeColors from './HomeThreeColors'

const Home = () => {
  const { highlightedBlogs, getHighlightedBlogs, error } = useBlog()

  useEffect(() => {
    if (window.location.hash.includes('otp_expired')) {
      toast.error("Verification link expired or invalid. Please try registering again.", {
        position: "top-center",
        theme: "colored",
        autoClose: 20000
      });
    }
  }, [])

  useEffect(() => {
    getHighlightedBlogs()
  }, [getHighlightedBlogs])

  useEffect(() => {
    if (error) errorToast(error)
  }, [error])

  const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <main className='snap-y snap-mandatory h-dvh overflow-y-scroll' onScroll={(e) => { setScrollPosition(e.target.scrollTop) }}>
      <StoreLink />
      {highlightedBlogs?.map((blog, i) => <HomeBlog {...blog} key={i} />)}
      <HomeThreeColors />
      <HomeCC40 />
      <HighlightedProducts />
      <BlogAndStore />
      <Footer />
      <Dots scrollPosition={scrollPosition} />
    </main>
  )
}

export default Home
