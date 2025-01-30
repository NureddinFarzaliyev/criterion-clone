import React, { useState } from 'react'
import SidePanel from '../../ui/SidePanel'
import { AnimatePresence } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'

const BurgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = {
    'Home': '/',
    'Shop the Collection': '/shop',
    'Read Our Blog': '/blog',
    'About Us': '/about',
    'Contact Us': '/contact',
    'FAQ': '/faq',
    'Login': '/login',
    'Register': '/register',
    'Your Account': '/account',
    'Wishlist': '/wishlist',
    'Shopping Cart': '/cart',
  }

  return (
    <>
      <div className='h-5 w-5 cursor-pointer' onClick={() => {setIsOpen(true)}}>
        <svg className='dark:fill-white fill-gray' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 11h24v2H0zM0 3h24v2H0zM0 19h24v2H0z"></path></svg>
      </div>
      <AnimatePresence>
      {isOpen && (
        <SidePanel onClose={() => {setIsOpen(false)}} >
          <ul className='text-white'>
            {Object.keys(navLinks).map((text, i) => (
              <NavLink to={navLinks[text]} key={i}>
                <motion.li initial={{x:"110%"}} animate={{x:"0%"}} transition={{duration: 0.25, delay: i*0.075, ease: 'easeIn'}} className='text-2xl md:text-3xl hover:text-gold transition duration-300 my-3 lg:ml-4' 
                    onClick={() => {setIsOpen(false)}}>
                  {text}
                </motion.li>
              </NavLink>
            ))}
          </ul>
        </SidePanel>
      )}
      </AnimatePresence>
    </>
  )
}

export default BurgerIcon
