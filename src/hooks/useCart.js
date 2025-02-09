import { useCallback, useEffect, useState } from "react"
import supabase from "../tools/supabase"
import { errorToast, successToast } from "../utils/toast"
import { useSelector } from "react-redux"

const useCart = () => {
    const [cartProducts, setCartProducts] = useState([])
    const [isCartLoading, setIsLoading] = useState(false)
    const [localLoading, setLocalLoading] = useState(false)
    const [error, setError] = useState(null)
    const {userId} = useSelector(state => state.auth)

    const getTotal = () => {
        if(cartProducts){
            const total = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0)
            return {
                total,
                shipping: total > 250 ? 0 : 50
            }
        }
    }

    const fetchCart = useCallback(async () => {
        setIsLoading(true)

        if(userId){
            const {data, error} = await supabase
            .from('cart')
            .select("*, products(*)")
            .eq("user_id", userId)
    
            if(error){
                setError(error.message)
                errorToast("Failed to fetch cart")
                return
            }
    
            setCartProducts(data.map(data => ({...data.products, quantity: data.quantity})))
        }

        setIsLoading(false)
    }, [])

    const addToCart = async (product_id) => {
        setIsLoading(true)

        // Call the add_to_cart postgres function
        const {data, error} = await supabase
        .rpc('add_to_cart', {user_id: userId, product_id})

        if(error){
            console.log(error)
            setError(error.message)
            errorToast("Failed to add to cart")
            return
        }

        setCartProducts([...cartProducts, data])
        successToast("Added to Cart")
        setIsLoading(false)
    }

    const removeFromCart = async (product_id) => {
        setLocalLoading(true)

        const {data, error} = await supabase
        .from('cart')
        .delete()
        .eq("user_id", userId)
        .eq("product_id", product_id)

        if(error){
            setError(error.message)
            errorToast("Failed to remove from cart")
            return
        }

        setLocalLoading(false)
        setCartProducts(cartProducts.filter(product => product.id !== product_id))
    }

    const decrementCart = async (product_id) => {
        setLocalLoading(true)

        const {data, error} = await supabase
        .rpc('decrement_cart', {user_id: userId, product_id})

        if(error){
            setError(error.message)
            errorToast("Failed to decrement from cart")
            return
        }

        setCartProducts(cartProducts.map(product => {
            if(product.id === product_id){
                return {...product, quantity: product.quantity - 1 === 0 ? null : product.quantity - 1}
            }
            return product
        }))
        setLocalLoading(false)
    }

    const incrementCart = async (product_id) => {
        setLocalLoading(true)

        const {data, error} = await supabase
        .rpc('add_to_cart', {user_id: userId, product_id})

        if(error){
            setError(error.message)
            errorToast("Failed to increment from cart")
            return
        }

        setCartProducts(cartProducts.map(product => {
            if(product.id === product_id){
                return {...product, quantity: product.quantity + 1}
            }
            return product
        }))
        setLocalLoading(false)
    }

    return {
        isCartLoading,
        cartProducts,
        fetchCart,
        error,
        addToCart,
        removeFromCart,
        decrementCart,
        incrementCart,
        localLoading,
        getTotal
    }
}

export default useCart
