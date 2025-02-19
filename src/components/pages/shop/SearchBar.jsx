import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useRef } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { langFunc } from '../../lang/LangFunc'

const SearchBar = ({bgStyle}) => {
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputRef.current.value === '') return
        window.location.href = `/search?q=${inputRef.current.value.replace(/\s/g, '+')}`
    }

  return (
    <div className='text-white text-sm font-display font-bold'>
        <form onSubmit={handleSubmit} className={`flex items-center gap-1 px-5 mt-5 ${bgStyle}`}>
        <IoIosSearch className='text-3xl' />
        <input ref={inputRef} type="text" placeholder={langFunc("SEARCH", "AXTAR")} className='p-5 w-[95%] text-2xl outline-none font-bold'/>
        <button type='submit' className='text-4xl opacity-20 cursor-pointer transition hover:opacity-100'><GoChevronRight /></button>
        </form>
    </div>
  )
}

export default SearchBar
