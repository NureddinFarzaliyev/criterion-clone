import React from 'react'

const BurgerIcon = ({color}) => {
  return (
    <div className='h-5 w-5 cursor-pointer'>
      <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 11h24v2H0zM0 3h24v2H0zM0 19h24v2H0z"></path></svg>
    </div>
  )
}

export default BurgerIcon
