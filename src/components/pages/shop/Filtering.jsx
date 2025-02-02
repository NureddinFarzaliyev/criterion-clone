import React, { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'

const Filtering = () => {

    const FILTER_TYPES = ["countries", "years", "directors"]
    const FILTER_TYPES_SINGULAR = ["country", "year", "director"]

    const [allFilters, setAllFilters] = useState({"countries": [], "years": [], "directors": []})

    const fetchAllFilters = async () => {
        FILTER_TYPES.map(async (filter) => {
            const {data, error} = await supabase
            .from(filter)
            .select('*')

            setAllFilters((prevFilters) => ({...prevFilters, [filter]: data.map(item => item[FILTER_TYPES_SINGULAR[FILTER_TYPES.indexOf(filter)]])}))
        })
    }

    useEffect(() => {
        fetchAllFilters()
    }, [])

  return (
    <div>
        {FILTER_TYPES.map((filter, index) => (
            <select key={index} className='w-64 bg-red-900 m-5 p-5'>
                <option value=''>{`Filter by ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}</option>
                {allFilters[filter].map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
        ))}
    </div>
  )
}

export default Filtering