import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ToastConfig from './components/ui/ToastConfig'
import Home from './components/pages/home/Home'
import Nav from './components/layout/nav/ Nav'
import Footer from './components/layout/footer/Footer'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'

const App = () => {
  const location = useLocation()
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
      <ToastConfig />
    </>
  )
}

export default App