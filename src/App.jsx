import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App