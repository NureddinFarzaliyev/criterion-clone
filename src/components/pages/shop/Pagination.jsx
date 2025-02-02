import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
    const {totalPages, isLoading} = useSelector(state => state.products)
    const [searchParams, setSearchParams] = useSearchParams();    

    const currentPage = parseInt(searchParams.get('page')) || 1

    const handlePageChange = (page) => {
        setSearchParams({page})
    } 

  return (
    <div>
        <button className='disabled:opacity-20 not-disabled:cursor-pointer' disabled={isLoading || currentPage === 1} onClick={() => {handlePageChange(currentPage === 1 ? 1 : currentPage - 1 )}}>Prev</button>
        <p>{currentPage}/{totalPages}</p>
        <button className='disabled:opacity-20 not-disabled:cursor-pointer' disabled={isLoading || currentPage === totalPages} onClick={() => {handlePageChange(currentPage === totalPages ? currentPage : currentPage + 1)}}>Next</button>
    </div>
  )
}

export default Pagination
