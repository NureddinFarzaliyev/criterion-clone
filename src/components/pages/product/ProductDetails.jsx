import React, { useEffect, useState } from 'react'
import { fetchMovieDetails } from '../../../utils/fetchMovieDetails'

const ProductDetails = ({singleProduct}) => {
  const [productDetails, setProductDetails] = useState(null)

  useEffect(() => {
      if(singleProduct){
          const getProductDetails = async () => {
              const details = await fetchMovieDetails(singleProduct.title)
              setProductDetails(details)
          }
        
          getProductDetails()
      }
  }, [singleProduct])

  return (
    <div className='lg:w-1/2'>
        <p className='font-display text-gold text-sm mb-5 font-bold'>{singleProduct.director.toUpperCase()}</p>
        <h1 className='font-text text-5xl'>{singleProduct.title}</h1>
        {productDetails && (
            <div className="mt-10 lg:mt-14 ">
                <p className='font-text text-sm lg:text-lg lg:pr-10'>&emsp;&emsp;{productDetails.overview}</p>
                <p className='font-display dark:opacity-60 opacity-90 text-sm mt-3'>&emsp;&emsp;{productDetails.original_title.toUpperCase()} ({productDetails.original_language.toUpperCase()})</p>

                <div className='mt-10 lg:mt-14 flex flex-col gap-2 font-text dark:opacity-60 opacity-90 text-md'>
                    <p>- {productDetails.release_date}</p>
                    {productDetails?.genres?.map(genre=><p>- {genre.name}</p>)}
                    <p>
                    - {productDetails?.production_companies?.map((company,index)=> index == productDetails.production_companies.length - 1 ? company.name : company.name + ", ")}
                    </p>
                    <p>
                    - {productDetails?.production_countries?.map((country,index)=> index == productDetails.production_countries.length - 1 ? country.name : country.name + ", ")}
                    </p>
                </div>

                <p className='font-display dark:opacity-60 opacity-90 text-sm mb-2 mt-10 lg:mt-20'>PURCHASE & SHIPPING DETAILS</p>
                <p className='dark:opacity-60 opacity-90 font-text text-md lg:pr-10'>&emsp;&emsp; Your movie will be shipped as a 4K Blu-Ray with high-quality packaging. Our products are shipped within 10-14 business days. We offer free shipping on orders over $50. For international orders, additional shipping charges may apply. If you have any questions about your order, please contact our customer service team at support@criterion.com.</p>
            </div>
        )}
    </div>
  )
}

export default ProductDetails
