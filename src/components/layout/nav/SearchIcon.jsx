import React, { useState } from 'react'
import SidePanel from '../../ui/SidePanel'
import { AnimatePresence } from 'motion/react'
import SearchBar from '../../pages/shop/SearchBar';
import StaticLang from '../../lang/StaticLang';

const SearchIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <AnimatePresence>
      { isOpen && <SidePanel onClose={() => {setIsOpen(false)}}> 
        <div className='text-white text-sm font-display font-bold'>
          <h1 className=''><StaticLang az="AXTAR" en="SEARCH" /></h1>
          <SearchBar bgStyle={`bg-black/20 dark:bg-white/5`} />
        </div>
      </SidePanel>}
    </AnimatePresence>
    <div className='h-5 w-5 cursor-pointer' onClick={() => {setIsOpen(true)}}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><rect id="a" width="24" height="24"></rect></defs><g fill="none" fillRule="evenodd"><path d="M18,9 C18,5.13428475 14.8657153,2 11,2 C7.13428475,2 4,5.13428475 4,9 C4,12.8657153 7.13428475,16 11,16 C14.8657153,16 18,12.8657153 18,9 Z M20,9 C20,13.9702847 15.9702847,18 11,18 C6.02971525,18 2,13.9702847 2,9 C2,4.02971525 6.02971525,0 11,0 C15.9702847,0 20,4.02971525 20,9 Z" className='dark:fill-white fill-gray' fillRule="nonzero"></path><path d="M15.1484325,15.9124888 C14.8084522,15.4772511 14.8856735,14.8488128 15.3209112,14.5088325 C15.7561489,14.1688522 16.3845872,14.2460735 16.7245675,14.6813112 L22.5635675,22.1563112 C22.9035478,22.5915489 22.8263265,23.2199872 22.3910888,23.5599675 C21.9558511,23.8999478 21.3274128,23.8227265 20.9874325,23.3874888 L15.1484325,15.9124888 Z" className='dark:fill-white fill-gray' fillRule="nonzero"></path></g></svg>
    </div>
    </>
  )
}

export default SearchIcon
