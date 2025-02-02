import { useDispatch, useSelector } from "react-redux"
import { fetchHighlightedProducts } from "../features/products/highlightedProducts"
import { useCallback, useEffect, useState } from "react"

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


    return {
        getHighlightedProducts,
        highlightedProducts,
        isLoading,
        error
    }

}

export default useHighlightedProducts