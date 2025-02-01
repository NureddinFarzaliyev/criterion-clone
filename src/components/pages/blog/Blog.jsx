import { useEffect } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import useBlog from '../../../hooks/useBlog'
import { errorToast } from '../../../utils/toast'
import LoadingPage from '../../ui/LoadingPage'
import Logo from '../../ui/Logo'
import Spotlight from './Spotlight'
import WhiteBtn from '../../ui/WhiteBtn'
import { Link } from 'react-router-dom'

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
                    <div className='mb-28'>
                        <h1 className='mt-5 text-3xl md:text-7xl font-text text-center'>Current</h1>
                        <p className='text-sm md:text-lg font-text text-center mt-2 opacity-70 mx-4'>An online magazine covering film culture past and present</p>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-5'>
                        <Spotlight highlightedBlogs={highlightedBlogs} />
                        <div className='flex flex-col items-center justify-around gap-6 lg:w-1/2 px-4 lg:px-20'>
                            <Logo height={100} />
                            <p className='lg:text-lg font-text text-center md:w-1/2 lg:w-[80%]'>Current is an online magazine covering the past and the present of the film culture. We publish essays regarding to important, influential and unforgettable cinema pieces. Visit our shop to buy movies & collections.</p>
                            <Link to={'/shop'}>
                                <WhiteBtn textContent='Visit the Shop' />
                            </Link>
                        </div>
                    </div>
                </section>
            </LoadingPage>
        </GeneralSection>
    )
}

export default Blog