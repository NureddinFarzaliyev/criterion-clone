import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { FILTER_TYPES, FILTER_TYPES_SINGULAR } from '../../../utils/filterTypes'

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
      <>
      <select className='w-64 bg-gold m-5 p-5' onChange={handleChange}>
          <option value='' selected={!searchParams.get(singular_filter)} disabled>{`Filter by ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}</option>
          {allFilters[filter].map((item, index) => (
              <option selected={searchParams.get(singular_filter) == item} value={item} key={index}>{item}</option>
          ))}
      </select>
      <button className='disabled:opacity-20 cursor-pointer disabled:cursor-auto' disabled={!searchParams.get(singular_filter)} onClick={removeFilter}>X</button>
      </>
    )
}

export default FilterSelect
