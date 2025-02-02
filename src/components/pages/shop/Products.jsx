import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
  return (
    <div>
        {products.length === 0 && <h1>No products found</h1>}
        {products.map(product => (
            <Link to={`/shop/${product.id}`} key={product.id}>
                <h1>{product.title}</h1>
            </Link>
        ))}
    </div>
  )
}

export default Products
