import { useDispatch, useSelector } from "react-redux"
import { addProduct, fetchHighlightedProducts, removeProduct } from "../features/products/highlightedProducts"
import { useCallback, useEffect, useState } from "react"
import { errorToast } from "../utils/toast"
import supabase from "../tools/supabase"

const useHighlightedProducts = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const highlightedProducts = useSelector(state => state.highlightedProducts.products)
    const isHighlightedLoading = useSelector(state => state.highlightedProducts.isLoading)
    const isHighlightedError = useSelector(state => state.highlightedProducts.error)

    useEffect(() => {
        setIsLoading(isHighlightedLoading)
    }, [isHighlightedLoading])

    useEffect(() => {
        if (isHighlightedError) {
            setError(isHighlightedError)
        }
    }, [isHighlightedError])

    const getHighlightedProducts = useCallback(() => {
        dispatch(fetchHighlightedProducts())
    }, [dispatch])

    const removeHighlightedProduct = useCallback(async (id) => {
        dispatch(removeProduct(id))

        const {error} = await supabase
            .from('products')
            .update({isHighlighted: false})
            .eq('id', id)

        if (error) {
            dispatch(addProduct(id))
            errorToast('Could not remove product from highlighted')
            return console.error(error)
        }
    })

    const addHighlightedProduct = useCallback(async (product) => {
        dispatch(addProduct(product))

        const {error} = await supabase
            .from('products')
            .update({isHighlighted: true})
            .eq('id', product.id)

        if (error) {
            dispatch(removeProduct(product.id))
            errorToast('Could not add product to highlighted')
            return console.error(error)
        }
    })


    return {
        getHighlightedProducts,
        highlightedProducts,
        removeHighlightedProduct,
        addHighlightedProduct,
        isLoading,
        error
    }

}

export default useHighlightedProducts