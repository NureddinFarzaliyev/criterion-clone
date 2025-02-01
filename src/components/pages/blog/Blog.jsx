import { useEffect } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import useBlog from '../../../hooks/useBlog'
import { errorToast } from '../../../utils/toast'
import LoadingPage from '../../ui/LoadingPage'

import Spotlight from './Spotlight'

const Blog = () => {
    const {isLoading, error, getBlogs, blogs, highlightedBlogs, getHighlightedBlogs} = useBlog()

    useEffect(() => {
        getHighlightedBlogs()
    }, [getHighlightedBlogs])

     useEffect(() => {
        if(error) errorToast(error)
    }, [error])

    useEffect(() => {
        getBlogs()
    }, [getBlogs])

    return (
        <GeneralSection>
            <LoadingPage isLoading={isLoading}>
                <section className='px-4 lg:px-20 xl:px-44'>
                    <div>
                        <h1 className='mt-5 text-3xl md:text-7xl font-text text-center'>Current</h1>
                        <p className='text-sm md:text-lg font-text text-center mt-2 mb-20 opacity-70 mx-4'>An online magazine covering film culture past and present</p>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-5'>
                        <Spotlight highlightedBlogs={highlightedBlogs} />
                        <div>
                            hi
                        </div>
                    </div>


                </section>
            </LoadingPage>
        </GeneralSection>
    )
}

export default Blog