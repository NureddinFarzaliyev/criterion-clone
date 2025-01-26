import React, { useState } from 'react'
import SidePanel from '../../ui/SidePanel'
import { AnimatePresence } from 'motion/react'
import { NavLink } from 'react-router-dom'

const BurgerIcon = ({color}) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = {
    'Home': '/',
    'Shop the Collection': '/shop',
    'Read Our Blog': '/blog',
    'Login': '/login',
    'Register': '/register',
    'Your Account': '/account',
    'Wishlist': '/wishlist',
    'Shopping Cart': '/cart',
  }

  return (
    <>
      <div className='h-5 w-5 cursor-pointer' onClick={() => {setIsOpen(true)}}>
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 11h24v2H0zM0 3h24v2H0zM0 19h24v2H0z"></path></svg>
      </div>
      <AnimatePresence>
      {isOpen && (
        <SidePanel onClose={() => {setIsOpen(false)}} >
          <ul className='text-gray dark:text-white'>
            {Object.keys(navLinks).map((text, i) => (
              <NavLink to={navLinks[text]} key={i}>
                <li className='text-3xl hover:text-gold transition duration-300 my-4 lg:ml-4' 
                    onClick={() => {setIsOpen(false)}}>
                  {text}
                </li>
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
