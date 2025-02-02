import React, { useEffect } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import useProducts from '../../../hooks/useProducts'
import { useSelector } from 'react-redux'
import LoadingPage from '../../ui/LoadingPage'
import { useSearchParams } from 'react-router-dom'
import { errorToast } from '../../../utils/toast'
import Pagination from './Pagination'
import Filtering from './Filtering'
import Products from './Products'

const Shop = () => {
    const {getProducts, getFilteredProducts} = useProducts()
    const {products, isLoading, error, isPagination} = useSelector(state => state.products)

    useEffect(() => {if(error) errorToast(error)}, [error])
    
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const year = searchParams.get('year')
        const country = searchParams.get('country')
        const director = searchParams.get('director')
        const page = searchParams.get('page') || 1

        if(year || country || director){
            searchParams.delete('page')
            setSearchParams(searchParams, {replace: true})
            getFilteredProducts(year, country, director)
        }else{
            getProducts(page)
        }
    }, [getProducts, getFilteredProducts, searchParams])

    return (
        <GeneralSection>
            <div className='mb-28'>
                <h1 className='mt-5 text-3xl md:text-7xl font-text text-center'>Shop all Films</h1>
                <p className='text-sm md:text-lg font-text text-center mt-5 opacity-70 mx-4'> Browse our collection of the greatest films from around the world, available on disc and streaming. </p>
            </div>
            <Filtering />
            {isPagination && (<Pagination />)}
            <LoadingPage isLoading={isLoading}>
                <Products products={products} />
            </LoadingPage>
        </GeneralSection>
    )
}

export default Shop
