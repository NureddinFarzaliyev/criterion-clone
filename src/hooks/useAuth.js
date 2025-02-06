import { useCallback, useState } from "react"
import supabase from "../tools/supabase"

const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getUser = useCallback(async () => {
        setIsLoading(true)
        const { data: { user } } = await supabase.auth.getUser()
        setIsLoading(false)
        return user
    }, [])

    const register = useCallback(async (email, password, payload) => {
        setIsLoading(true)
        let { data, error } = await supabase.auth.signUp({email, password, payload})
        setIsLoading(false)
        if(error) {
            setError(error.message)
            return
        }
        return data
    }, [])

    const logout = useCallback(async () => {
        setIsLoading(true)
        let { error } = await supabase.auth.signOut()
        setIsLoading(false)
        if(error){
            setError(error.message)
            return
        }
        return {loggedOut: true}
    }, [])

    const login = useCallback(async (email, password) => {
        setIsLoading(true)
        let { data, error } = await supabase.auth.signInWithPassword({email, password})
        setIsLoading(false)
        if(error){
            setError(error.message)
            return
        }
        return data
    }, [])

    return {
        isLoading,
        error,
        getUser,
        register,
        logout,
        login
    }
}

export default useAuth
