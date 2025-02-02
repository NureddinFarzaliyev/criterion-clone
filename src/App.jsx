import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ToastConfig from './components/ui/ToastConfig'
import Home from './components/pages/home/Home'
import Nav from './components/layout/nav/ Nav'
import Footer from './components/layout/footer/Footer'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Faq from './components/pages/faq/Faq'
import NotFound from './components/pages/404/NotFound'
import Blog from './components/pages/blog/Blog'
import Post from './components/pages/blog/Post'

const App = () => {
  const location = useLocation()
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
      <ToastConfig />
    </>
  )
}

export default App