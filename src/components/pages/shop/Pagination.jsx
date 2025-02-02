import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const Pagination = () => {
    const {totalPages, isLoading} = useSelector(state => state.products)
    const [searchParams, setSearchParams] = useSearchParams();    

    const currentPage = parseInt(searchParams.get('page')) || 1

    const handlePageChange = (page) => {
        setSearchParams({page})
    } 

  return (
    <div className={`text-display flex justify-center items-center mt-10 gap-5 ${isLoading ? 'opacity-0' : ''}`}> 
        <button className='disabled:opacity-20 dark:border-white/20 border-gray/20 not-disabled:hover:bg-gray/20 not-disabled:dark:hover:bg-black/20 transition not-disabled:cursor-pointer border-2 ml-2 h-14 w-14 flex items-center justify-center' 
        disabled={isLoading || currentPage === 1} onClick={() => {handlePageChange(currentPage === 1 ? 1 : currentPage - 1 ); window.scrollTo(0,0)}}>
          <GoChevronLeft />
        </button>
        <p className='font-text font-bold text-xl'>{currentPage} / {totalPages}</p>
        <button className='disabled:opacity-20 dark:border-white/20 border-gray/20 not-disabled:hover:bg-gray/20 not-disabled:dark:hover:bg-black/20 transition not-disabled:cursor-pointer border-2 ml-2 h-14 w-14 flex items-center justify-center' 
        disabled={isLoading || currentPage === totalPages} onClick={() => {handlePageChange(currentPage === totalPages ? currentPage : currentPage + 1); window.scrollTo(0,0)}}>
          <GoChevronRight />
        </button>
    </div>
  )
}

export default Pagination
