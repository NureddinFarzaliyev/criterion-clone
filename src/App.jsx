import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ToastConfig from './components/ui/ToastConfig'
import HideFromLoggedin from './components/protected/HideFromLoggedin'
import HideFromNotLogged from './components/protected/HideFromNotLogged'

import Home from './components/pages/home/Home'
import Nav from './components/layout/nav/ Nav'
import Footer from './components/layout/footer/Footer'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Faq from './components/pages/faq/Faq'
import NotFound from './components/pages/404/NotFound'
import Blog from './components/pages/blog/Blog'
import Post from './components/pages/blog/Post'
import Shop from './components/pages/shop/Shop'
import Product from './components/pages/product/Product'
import Register from './components/pages/auth/Register'
import PleaseVerify from './components/pages/auth/PleaseVerify'
import Login from './components/pages/auth/Login'
import Account from './components/pages/account/Account'
import Wishlist from './components/pages/account/Wishlist'
import Search from './components/pages/search/Search'
import Cart from './components/pages/cart/Cart'
import CheckAuth from './components/protected/CheckAuth'

const App = () => {
  const location = useLocation()
  return (
    <>
      <CheckAuth />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/register" element={<HideFromLoggedin children={<Register />} />} />
        <Route path="/login" element={<HideFromLoggedin children={<Login />} />} />
        <Route path="/account" element={<HideFromNotLogged children={<Account />}/>} />
        <Route path="/wishlist" element={<HideFromNotLogged children={<Wishlist />}/>} />
        <Route path="/verify" element={<HideFromLoggedin children={<PleaseVerify />} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<HideFromNotLogged children={<Cart />} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
      <ToastConfig />
    </>
  )
}

export default App