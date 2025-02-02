import React, { useEffect } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import useProducts from '../../../hooks/useProducts'
import { useSelector } from 'react-redux'
import LoadingPage from '../../ui/LoadingPage'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { errorToast } from '../../../utils/toast'
import Pagination from './Pagination'
import Filtering from './Filtering'

const Shop = () => {
    const {getProducts} = useProducts()
    const {products, isLoading, error, totalPages} = useSelector(state => state.products)

    useEffect(() => {if(error) errorToast(error)}, [error])
    
    const [searchParams, _] = useSearchParams();

    const currentPage = parseInt(searchParams.get('page')) || 1

    useEffect(() => {
        getProducts(searchParams.get('page') || 1)
    }, [currentPage, getProducts])

    return (
        <GeneralSection>
            <div className='mb-28'>
                <h1 className='mt-5 text-3xl md:text-7xl font-text text-center'>Shop all Films</h1>
                <p className='text-sm md:text-lg font-text text-center mt-5 opacity-70 mx-4'> Browse our collection of the greatest films from around the world, available on disc and streaming. </p>
            </div>

            <Filtering />

            <Pagination />

            <LoadingPage isLoading={isLoading}>
                <div>
                    {products.map(product => (
                        <Link to={`/shop/${product.id}`} key={product.id}>
                            <h1>{product.title}</h1>
                        </Link>
                    ))}
                </div>
            </LoadingPage>


        </GeneralSection>
    )
}

export default Shop
