import { useDispatch, useSelector } from "react-redux"
import { fetchHighlightedBlogs } from "../features/blog/highlightedBlogs"
import { fetchBlogs } from "../features/blog/blog"
import { useEffect, useState, useCallback } from "react"

const useBlog = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const highlightedBlogs = useSelector(state => state.highlightedBlogs.blogs)
    const isHighlightedLoading = useSelector(state => state.highlightedBlogs.isLoading)
    const isHighlightedError = useSelector(state => state.highlightedBlogs.error)
    
    const blogs = useSelector(state => state.blog.blogs)
    const isBlogsLoading = useSelector(state => state.blog.isLoading)
    const isBlogsError = useSelector(state => state.blog.error)

    useEffect(() => {
        setIsLoading(isHighlightedLoading || isBlogsLoading)
    }, [isHighlightedLoading, isBlogsLoading])

    useEffect(() => {
        if (isHighlightedError || isBlogsError) {
            setError(isHighlightedError || isBlogsError)
        }
    }, [isHighlightedError, isBlogsError])

    const getHighlightedBlogs = useCallback(async () => {
        dispatch(fetchHighlightedBlogs())
    }, [dispatch])

    const getBlogs = useCallback(async () => {
        dispatch(fetchBlogs())
    }, [dispatch])

    return {
        getHighlightedBlogs,
        highlightedBlogs,
        getBlogs,
        blogs,
        isLoading,
        error
    }
}

export default useBlog