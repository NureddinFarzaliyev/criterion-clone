import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setProducts, setError, setLoading, setTotalPages } from "../features/products/products"
import supabase from "../tools/supabase"

const useProducts = () => {
    const dispatch = useDispatch()

    const {products, isLoading, error} = useSelector(state => state.products)

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
        dispatch(setLoading(false))
    }, [])

    return {getProducts, products, isLoading, error}
}

export default useProducts
