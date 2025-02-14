import React, { useEffect } from 'react'
import useProducts from '../../../../hooks/useProducts'
import { useSelector } from 'react-redux'
import DashHighlightedProducts from './DashHighlightedProducts'

const Products = () => {

  // const {getProducts} = useProducts()
  // const {dashboardProducts} = useSelector(state => state.products)

  // useEffect(() => {
  //   getProducts(13, true)
  // }, [])


  return (
    <div>

      <DashHighlightedProducts />
    </div>
  )
}

export default Products
