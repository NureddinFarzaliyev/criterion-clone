import React, { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'
import { errorToast } from '../../../utils/toast'
import FilterSelect from './FilterSelect'
import { FILTER_TYPES, FILTER_TYPES_SINGULAR } from '../../../utils/filterTypes'
import { IoGridOutline, IoList } from "react-icons/io5";

const Filtering = ({toggleView, isList}) => {
    const [allFilters, setAllFilters] = useState({"countries": [], "years": [], "directors": []})

    const fetchAllFilters = async () => {
        FILTER_TYPES.map(async (filter) => {
            const query = supabase.from(filter).select('*')
            if(filter === 'years') query.order('year', {ascending: true})
            const {data, error} = await query
        
            if(error) return errorToast(error.message)

            setAllFilters((prevFilters) => ({...prevFilters, [filter]: data.map(item => item[FILTER_TYPES_SINGULAR[FILTER_TYPES.indexOf(filter)]])}))
        })
    }

    useEffect(() => {
        fetchAllFilters()
    }, [])

  return (
    <div className='my-10 flex gap-5 flex-col md:flex-row flex-wrap max-md:items-center'>
        <button className='font-display h-16 cursor-pointer border-2 font-bold transition duration-500 text-sm w-16 flex items-center justify-center
        dark:border-white/20 border-gray/20 hover:bg-gray/20  dark:hover:bg-black/20' onClick={toggleView}>
            {isList ? <IoGridOutline className='text-2xl' /> : <IoList className='text-2xl' />}
        </button>
        {FILTER_TYPES.map((filter, index) => <FilterSelect filter={filter} allFilters={allFilters} key={index} />)}
    </div>
  )
}

export default Filtering