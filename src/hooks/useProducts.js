import { useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setProducts, setError, setLoading, setTotalPages, setIsPagination } from "../features/products/products"
import supabase from "../tools/supabase"
import { useSearchParams } from "react-router-dom"

const useProducts = () => {
    const dispatch = useDispatch()
    const {products, isLoading, error} = useSelector(state => state.products)
    
    const [searchParams, _] = useSearchParams();

    const getProducts = useCallback(async (page) => {
        dispatch(setLoading(true))
        
        const {data, error} = await supabase
            .from('products')
            .select('*')
            .range((page - 1) * 20, page * 20 - 1)

        const {count, countError} = await supabase
            .from('products')
            .select('id', {count: 'exact'})

        if(error || countError){
            dispatch(setError(error.message || countError.message))
            dispatch(setLoading(false))
            return 
        }

        dispatch(setProducts(data))
        dispatch(setTotalPages(Math.ceil(count / 20)))
        dispatch(setIsPagination(true))
        dispatch(setLoading(false))
    }, [])

    const getFilteredProducts = useCallback(async (year, country, director) => {
        if(year || country || director){
            dispatch(setLoading(true))
            dispatch(setProducts([]))

            let query = supabase.from("products").select("*");

            if (year) query = query.eq("year", year);
            if (director) query = query.ilike("director", director);
            if (country) query = query.eq("country", country);              

            const { data, error } = await query;

            dispatch(setLoading(false))

            if (error) {
                dispatch(setError(error.message))
                return
            }

            dispatch(setProducts(data))
            dispatch(setIsPagination(false))
        }else{
            getProducts(searchParams.get('page') || 1)
        }
    }, [])

    const [isProductLoading, setIsProductLoading] = useState(false)
    const [productError, setProductError] = useState(null)
    const [singleProduct, setSingleProduct] = useState(null)

    const getSingleProduct = useCallback(async (id) => {
        setIsProductLoading(true)

        const {data, error} = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single()

        setIsProductLoading(false)
        if(error){
            setProductError(error.message)
            return
        }

        setSingleProduct(data)
        return data
    }, [])


    return {getProducts, products, isLoading, error, getFilteredProducts, getSingleProduct, isProductLoading, productError, singleProduct}
}

export default useProducts
