import React, { useEffect, useState } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import { useSearchParams } from 'react-router-dom'
import supabase from '../../../tools/supabase'
import Products from '../shop/Products'
import SearchBar from '../shop/SearchBar'
import LoadingPage from '../../ui/LoadingPage'

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!query) return
        const search = async () => {
            setIsLoading(true)
            const {data, error} = await supabase
                .from('products')
                .select('*')
                // .textSearch('title', query)
                .or(`title.ilike.%${query}%, director.ilike.%${query}%, country.ilike.%${query}%`)

            setIsLoading(false)
            if(error){
                console.log(error)
                return
            }
            setResults(data)
        }
        search()
    }, [query])

    return (
        <GeneralSection>
            <div className='w-[90%] md:w-[70%] mx-auto'>
                <h1 className='mt-5 text-xl md:text-4xl font-text'>Search Results for <u>{query}</u></h1>
                <p className='text-sm md:text-lg font-text mt-2 opacity-70 mb-10'> Browse our collection of the greatest films from around the world, available on disc and streaming. </p>
                <SearchBar bgStyle={`bg-gray/20 text-black dark:text-white dark:bg-black/30`} />
                <div className='relative mt-10'>
                    <LoadingPage isLoading={isLoading}>
                        <Products products={results} />
                    </LoadingPage>
                </div>
            </div>
        </GeneralSection>
    )
}

export default Search
