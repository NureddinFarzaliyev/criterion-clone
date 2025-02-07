import { useCallback, useState } from "react"
import supabase from "../tools/supabase"
import { getUserId } from "../utils/getUserId"
import { errorToast, successToast } from "../utils/toast"
import { setError } from "../features/products/products"

const useWishlist = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [wishlist, setWishlist] = useState([])

    const addToWishlist = useCallback(async (product_id) => {
        setIsLoading(true)
        const user_id = await getUserId()

        if(user_id){
            const {data, error} = await supabase
            .from('wishlist')
            .insert([{user_id, product_id}])

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
        const user_id = await getUserId()

        if(user_id){
            const {data, error} = await supabase
            .from('wishlist')
            .delete()
            .eq("user_id", user_id)
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
        const user_id = await getUserId()

        if(user_id){
            const {data, error} = await supabase
            .from('wishlist')
            .select()
            .eq("user_id", user_id)
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
        const user_id = await getUserId()

        const {data, error} = await supabase
        .from('wishlist')
        .select('*, products(*)')
        .eq("user_id", user_id)

        if(error){
            setError(error.message)
            errorToast("Failed to fetch wishlist")
            return
        }

        setWishlist(data.map(data => data.products))
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
