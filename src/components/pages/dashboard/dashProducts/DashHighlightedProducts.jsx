import { useEffect, useState } from 'react'
import useHighlightedProducts from '../../../../hooks/useHighlightedProducts'
import { RxCross1 } from 'react-icons/rx'
import { FiPlus } from 'react-icons/fi'
import SearchDialog from '../../../ui/SearchDialog'
import StaticLang from '../../../lang/StaticLang'

const DashHighlightedProducts = () => {
  const { getHighlightedProducts, highlightedProducts, removeHighlightedProduct, addHighlightedProduct } = useHighlightedProducts()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!highlightedProducts || highlightedProducts.length === 0) {
      getHighlightedProducts()
    }
  }, [])

  return (
    <div>
      <p className='font-display uppercase mb-5 mt-20 opacity-60'><StaticLang en="highlighted products" az="Önə çıxan məhsullar" /></p>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 xl:gap-10'>

        {highlightedProducts.map((product, index) => (
          <div key={index} className='relative shadow-lg'>
            <button onClick={() => { removeHighlightedProduct(product.id) }} className='cursor-pointer absolute right-0 bg-white text-black z-0 text-2xl m-3 p-2 opacity-50 hover:opacity-100 transition duration-500'><RxCross1 /></button>
            <img src={product.cover_small} alt={product.title} />
          </div>
        ))}

        {highlightedProducts && highlightedProducts.length < 4 && (
          Array(4 - highlightedProducts?.length).fill().map((_, index) => (
            <div key={index} onClick={() => { setIsOpen(true) }} className='shadow-lg border-2 dark:border-white border-gray opacity-15 hover:opacity-40 transition duration-300 flex items-center justify-center text-6xl cursor-pointer'>
              <FiPlus />
            </div>
          ))
        )}

        <SearchDialog fromTable={'products'} fromField={'title'} isOpen={isOpen} setIsOpen={setIsOpen} handleChosenElement={(product) => { addHighlightedProduct(product) }} />

      </div>
    </div>
  )
}

export default DashHighlightedProducts
