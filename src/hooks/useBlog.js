import { useDispatch, useSelector } from "react-redux"
import { fetchHighlightedBlogs } from "../features/blog/highlightedBlogs"
import { fetchBlogs, addBlog, removeBlog } from "../features/blog/blog"
import { useEffect, useState, useCallback } from "react"
import supabase from "../tools/supabase"
import { successToast } from "../utils/toast"

const useBlog = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const [isLocalLocading, setIsLocalLoading] = useState(false)
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
        console.log("BLOGS FETCHED")
        dispatch(fetchBlogs())
    }, [dispatch])

    const addPost = useCallback((post) => {
        dispatch(addBlog(post))
    })

    const removePost = useCallback(async (id) => {
        setIsLocalLoading(true)

        const {error} = await supabase
        .from('blog')
        .delete()
        .eq('id', id)

        setIsLocalLoading(false)

        if (error) {
            setError(error)
            return
        }

        dispatch(removeBlog(id))
        successToast('Post deleted successfully')
    })

    const editPost = useCallback(async (id, post) => {

        console.log(post)

        setIsLocalLoading(true)

        const {error} = await supabase
        .from('blog')
        .update(post)
        .eq('id', id)

        setIsLocalLoading(false)

        if (error) {
            setError(error)
            return
        }

        successToast('Post updated successfully')
    })

    return {
        getHighlightedBlogs,
        highlightedBlogs,
        getBlogs,
        blogs,
        isLoading,
        isLocalLocading,
        error,
        addPost,
        removePost,
        editPost
    }
}

export default useBlog