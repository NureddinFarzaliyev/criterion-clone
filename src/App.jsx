import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToastConfig from './components/ui/ToastConfig'
import Home from './components/pages/home/Home'
import Nav from './components/layout/nav/ Nav'
import Footer from './components/layout/footer/Footer'

const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {window.location.pathname !== '/' && <Footer />}
      <ToastConfig />
    </BrowserRouter>
  )
}

export default App