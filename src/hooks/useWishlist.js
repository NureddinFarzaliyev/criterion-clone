import { useCallback, useState } from "react"
import supabase from "../tools/supabase"
import { errorToast, successToast } from "../utils/toast"
import { setError } from "../features/products/products"
import { useSelector } from "react-redux"

const useWishlist = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [wishlist, setWishlist] = useState([])
    const {userId} = useSelector(state => state.auth)

    const addToWishlist = useCallback(async (product_id) => {
        setIsLoading(true)

        if(userId){
            const {data, error} = await supabase
            .from('wishlist')
            .insert([{user_id: userId, product_id}])

            if(error){
                console.log(error)
                errorToast("Failed to add product to wishlist")
                return
            }

            setIsLoading(false)
            successToast("Product added to wishlist")
        }
    }, [])

    const removeFromWishlist = useCallback(async (product_id) => {
        setIsLoading(true)

        if(userId){
            const {data, error} = await supabase
            .from('wishlist')
            .delete()
            .eq("user_id", userId)
            .eq("product_id", product_id)

            if(error){
                console.log(error)
                errorToast("Failed to add product to wishlist")
                return
            }

            setIsLoading(false)
            successToast("Product removed from wishlist")
        }
    }, [])

    const checkIfInWishlist = useCallback(async (product_id) => {
        setIsLoading(true)

        if(userId){
            const {data, error} = await supabase
            .from('wishlist')
            .select()
            .eq("user_id", userId)
            .eq("product_id", product_id)

            setIsLoading(false)
            if(error){
                console.log(error)
                return false
            }

            if(data.length > 0) {
                return true
            }
        }

        setIsLoading(false)
        return false
    }, [])

    const fetchWishlist = useCallback(async () => {
        setIsLoading(true)
        if(userId){
            const {data, error} = await supabase
            .from('wishlist')
            .select('*, products(*)')
            .eq("user_id", userId)
    
            if(error){
                setError(error.message)
                errorToast("Failed to fetch wishlist")
                return
            }
    
            setWishlist(data.map(data => data.products))
        }
        setIsLoading(false)
    }, [])


    return {
        isLoading,
        addToWishlist,
        removeFromWishlist,
        checkIfInWishlist,
        fetchWishlist,
        wishlist
    }
}

export default useWishlist
