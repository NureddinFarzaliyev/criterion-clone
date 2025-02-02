import React, { useEffect, useState } from 'react'
import supabase from '../../../tools/supabase'
import { errorToast } from '../../../utils/toast'
import FilterSelect from './FilterSelect'
import { FILTER_TYPES, FILTER_TYPES_SINGULAR } from '../../../utils/filterTypes'

const Filtering = () => {

    const [allFilters, setAllFilters] = useState({"countries": [], "years": [], "directors": []})

    const fetchAllFilters = async () => {
        FILTER_TYPES.map(async (filter) => {
            const {data, error} = await supabase
            .from(filter)
            .select('*')

            if(error) return errorToast(error.message)

            setAllFilters((prevFilters) => ({...prevFilters, [filter]: data.map(item => item[FILTER_TYPES_SINGULAR[FILTER_TYPES.indexOf(filter)]])}))
        })
    }

    useEffect(() => {
        fetchAllFilters()
    }, [])

  return (
    <div>
        {FILTER_TYPES.map((filter, index) => <FilterSelect filter={filter} allFilters={allFilters} key={index} />)}
    </div>
  )
}

export default Filtering