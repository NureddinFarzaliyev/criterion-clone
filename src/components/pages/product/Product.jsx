import { useEffect } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import { useParams } from 'react-router-dom'
import useProducts from '../../../hooks/useProducts'
import LoadingPage from '../../ui/LoadingPage'
import { errorToast } from '../../../utils/toast'
import ProductDetails from './ProductDetails'
import PurchaseProduct from './PurchaseProduct'
import RecommendedProducts from './RecommendedProducts'
import RecommendedPosts from './RecommendedPosts'

const Product = () => {
    const { id } = useParams()
    const { getSingleProduct, isProductLoading, productError, singleProduct } = useProducts()

    useEffect(() => { window.scrollTo(0, 0) }, [id])

    useEffect(() => {
        getSingleProduct(id)
        if (productError) errorToast(productError)
    }, [getSingleProduct, id])

    console.log(singleProduct)

    return (
        <GeneralSection>
            <LoadingPage isLoading={isProductLoading}>
                {singleProduct && (
                    <div className='w-[90%] md:w-[80%] xl:w-[70%] mx-auto md:mt-20 flex max-lg:flex-col gap-10'>
                        <ProductDetails singleProduct={singleProduct} />
                        <PurchaseProduct singleProduct={singleProduct} />
                    </div>
                )}
                <RecommendedProducts />
                <RecommendedPosts />
            </LoadingPage>
        </GeneralSection>
    )
}

export default Product
