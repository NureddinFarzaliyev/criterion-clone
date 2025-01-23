import { useState } from "react"
import supabase from "../utils/supabase"

const useBlog = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const [highlightedBlogs, setHighlightedBlogs] = useState([])

    const fetchHighlightedBlogs = async () => {
        setIsLoading(true)

        const { data, error } = await supabase
            .from('blog')
            .select('*')
            .eq('isHighlighted', true)
        if (error) {
            console.error(error)
            setError(error)
            setIsLoading(false)
            return
        }

        setHighlightedBlogs(data)
        setIsLoading(false)
    }

    return {
        isLoading,
        error,
        highlightedBlogs,
        fetchHighlightedBlogs
    }
}

export default useBlog