import React, { useEffect, useState } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import useProducts from '../../../hooks/useProducts'
import { useSelector } from 'react-redux'
import LoadingPage from '../../ui/LoadingPage'
import { useSearchParams } from 'react-router-dom'
import { errorToast } from '../../../utils/toast'
import Pagination from './Pagination'
import Filtering from './Filtering'
import Products from './Products'
import SearchBar from './SearchBar'
import ProductsList from './ProductsList'
import StaticLang from '../../lang/StaticLang'

const Shop = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    const { getProducts, getFilteredProducts } = useProducts()
    const { products, isLoading, error, isPagination } = useSelector(state => state.products)

    useEffect(() => { if (error) errorToast(error) }, [error])

    const [isList, setIsList] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const year = searchParams.get('year')
        const country = searchParams.get('country')
        const director = searchParams.get('director')
        const page = searchParams.get('page') || 1

        if (year || country || director) {
            searchParams.delete('page')
            setSearchParams(searchParams, { replace: true })
            getFilteredProducts(year, country, director)
        } else {
            getProducts(page)
        }
    }, [getProducts, getFilteredProducts, searchParams])

    return (
        <GeneralSection>
            <section className='px-5 lg:w-[70%] mx-auto min-h-[150vh]'>
                <div className='mb-28'>
                    <h1 className='mt-5 text-3xl md:text-7xl font-text text-center'><StaticLang en="Shop all Films" az="Bütün Məhsullar" /></h1>
                    <p className='text-sm md:text-lg font-text text-center mt-5 opacity-70 mx-4'>
                        <StaticLang en="Browse our collection of the greatest films from around the world, available on disc and streaming." az="Dünyanın hər yerindən ən yaxşı filmləri bizim kolleksiyada disk və ya rəqəmsal formada tapın." />
                    </p>
                </div>
                <SearchBar bgStyle={`bg-gray/20 text-black dark:text-white dark:bg-black/30`} />
                <Filtering toggleView={() => { setIsList(!isList) }} isList={isList} />
                <div className='relative'>
                    <LoadingPage isLoading={isLoading}>
                        {isList ? (
                            <ProductsList products={products} noProductsMessage={"Please try different filters."} />
                        ) : (
                            <Products products={products} noProductsMessage={"Please try different filters."} />
                        )}
                    </LoadingPage>
                </div>
                {isPagination && (<Pagination />)}
            </section>
        </GeneralSection>
    )
}

export default Shop
