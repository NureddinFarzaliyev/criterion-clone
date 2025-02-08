import { useCallback, useState } from "react"
import { getUserId } from "../utils/getUserId"
import supabase from "../tools/supabase"
import { errorToast, successToast } from "../utils/toast"

const useCart = () => {
    const [cartProducts, setCartProducts] = useState([])
    const [isCartLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchCart = useCallback(async () => {
        setIsLoading(true)
        const user_id = await getUserId()

        const {data, error} = await supabase
        .from('cart')
        .select("*, products(*)")
        .eq("user_id", user_id)

        if(error){
            setError(error.message)
            errorToast("Failed to fetch wishlist")
            return
        }

        setCartProducts(data.map(data => data.products))
        setIsLoading(false)
    }, [])

    const addToCart = async (product_id) => {
        setIsLoading(true)
        const user_id = await getUserId()

        // Call the add_to_cart postgres function
        const {data, error} = await supabase
        .rpc('add_to_cart', {user_id, product_id})

        if(error){
            console.log(error)
            setError(error.message)
            errorToast("Failed to add to cart")
            return
        }

        setCartProducts([...cartProducts, data])
        successToast("Added to cart")
        setIsLoading(false)
    }

    const removeFromCart = async (product_id) => {
        setIsLoading(true)
        const user_id = await getUserId()

        const {data, error} = await supabase
        .from('cart')
        .delete()
        .eq("user_id", user_id)
        .eq("product_id", product_id)

        if(error){
            setError(error.message)
            errorToast("Failed to remove from cart")
            return
        }

        setCartProducts(cartProducts.filter(product => product.id !== product_id))
        successToast("Removed from cart")
        setIsLoading(false)
    }

    return {
        isCartLoading,
        cartProducts,
        fetchCart,
        error,
        addToCart,
        removeFromCart,
    }
}

export default useCart
