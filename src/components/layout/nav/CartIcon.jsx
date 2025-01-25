import React from 'react'

const CartIcon = ({color}) => {
  return (
    <div className='h-5 w-5'>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><path id="a" d="M0 24h24V0H0z"></path></defs><g fill="none" fillRule="evenodd"><path fill={color} d="M7.5 21a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3.001 1.5 1.5 0 010-3.001zM4 .002a1 1 0 01.987.835L5.679 5H23a1 1 0 01.977 1.217l-2 9A1 1 0 0121 16H7.514l.332 2H20v2H7a1 1 0 01-.987-.835L3.153 2.002H1a1 1 0 110-2zM21.753 7H6.013l1.167 7h13.018l1.555-7z"></path></g></svg>
    </div>
  )
}

export default CartIcon
