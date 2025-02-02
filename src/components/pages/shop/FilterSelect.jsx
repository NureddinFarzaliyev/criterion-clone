import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FILTER_TYPES, FILTER_TYPES_SINGULAR } from '../../../utils/filterTypes'
import { RxCross1 } from "react-icons/rx";

const FilterSelect = ({allFilters, filter}) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const singular_filter = FILTER_TYPES_SINGULAR[FILTER_TYPES.indexOf(filter)]

    const handleChange = (e) => {   
      if(e.target.value === ''){
        searchParams.delete(singular_filter);
        return setSearchParams(searchParams, {replace: true})
      }

      setSearchParams(prev => {prev.set(singular_filter, e.target.value); return prev},{replace: true })
    }

    const removeFilter = () => {
      searchParams.delete(singular_filter)
      setSearchParams(searchParams, {replace: true})
    }

    return (
      <div className='flex items-center'>
        <select className={`font-display p-5 w-64 h-16 cursor-pointer border-2 font-bold transition duration-500 text-sm
        dark:border-white/20 border-gray/20 hover:bg-gray/20  dark:hover:bg-black/20 ${searchParams.get(singular_filter) && 'dark:bg-black/20 bg-gray/20'}`} onChange={handleChange}>
            <option value='' selected={!searchParams.get(singular_filter)} disabled>{`Filter by ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}</option>
            {allFilters[filter].map((item, index) => (
                <option selected={searchParams.get(singular_filter) == item} value={item} key={index}>{item}</option>
            ))}
        </select>
        <button className='disabled:opacity-20 dark:border-white/20 border-gray/20 not-disabled:hover:bg-gray/20 not-disabled:dark:hover:bg-black/20 transition not-disabled:cursor-pointer border-2 ml-2 h-16 w-16 flex items-center justify-center' 
        disabled={!searchParams.get(singular_filter)} onClick={removeFilter}>
          <RxCross1 />
        </button>
      </div>
    )
}

export default FilterSelect
