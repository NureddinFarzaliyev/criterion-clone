import React, { useEffect, useState } from 'react'
import LoadingPage from '../../../ui/LoadingPage'
import { LuRefreshCcw } from 'react-icons/lu'
import { TD, TH, TR } from '../../../ui/Table'
import { CgExternal } from 'react-icons/cg'
import useProducts from '../../../../hooks/useProducts'
import { useSelector } from 'react-redux'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import DeleteProduct from './DeleteProduct'
import EditProduct from './EditProduct'
import SearchDialog from '../../../ui/SearchDialog'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { RxCross1 } from "react-icons/rx";

const DashManageProducts = () => {
    const { isLoading, getProducts, changeDashboardCurrentPage } = useProducts()
    const { dashboardProducts, totalPages, dashCurrentPage } = useSelector(state => state.products)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchResult, setSearchResult] = useState(null)

    useEffect(() => {
        if (dashboardProducts.length === 0 || !dashboardProducts) {
            getProducts(dashCurrentPage, true)
        }
    }, [])

    const nextPage = () => {
        changeDashboardCurrentPage(dashCurrentPage - 1);
        getProducts(dashCurrentPage - 1, true);
        window.scrollTo(0, 700)
    }

    const prevPage = () => {
        changeDashboardCurrentPage(dashCurrentPage + 1);
        getProducts(dashCurrentPage + 1, true);
        window.scrollTo(0, 700)
    }

    return (
        <div className='relative min-h-[40vh]'>
            <p className='font-display uppercase mb-5 mt-20 opacity-60'>manage products</p>
            <LoadingPage isLoading={isLoading}>
                <table className="min-w-full font-display">
                    <thead className='relative'>
                        <button className='text-white absolute top-[50%] translate-y-[-50%] right-0  rounded-sm  shadow-lg cursor-pointer p-3 font-display uppercase text-lg mb-3 opacity-70 transition duration-500'
                            onClick={() => { getProducts(dashCurrentPage, true) }}>
                            <LuRefreshCcw />
                        </button>
                        <button className='text-white absolute top-[50%] translate-y-[-50%] right-10  rounded-sm  shadow-lg cursor-pointer p-3 font-display uppercase text-lg mb-3 opacity-70 transition duration-500'
                            onClick={() => { !searchResult ? setIsSearchOpen(true) : setSearchResult(null) }}>
                            {searchResult ? <RxCross1 /> : <FaMagnifyingGlass />}
                            <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} fromField={'title'} fromTable={'products'} handleChosenElement={(element) => setSearchResult(element)} />
                        </button>

                        <tr>
                            <TH>ID</TH>
                            <TH>Title</TH>
                            <TH>Director</TH>
                            <TH></TH>
                            <TH></TH>
                            <TH></TH>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResult ? (
                            <TR>
                                <TD>{searchResult.id}</TD>
                                <TD>{searchResult.title} ({searchResult.year})</TD>
                                <TD>{searchResult.director}</TD>
                                <TD>
                                    <a href={`/shop/${searchResult.id}`} target='_blank'>
                                        <CgExternal className='text-3xl hover:text-gold opacity-70 hover:opacity-100 transition cursor-pointer' />
                                    </a>
                                </TD>
                                <TD><EditProduct product={searchResult} /></TD>
                                <TD><DeleteProduct id={searchResult.id} /></TD>
                            </TR>
                        ) : (
                            dashboardProducts.map((product, index) => (
                                <TR key={index}>
                                    <TD>{product.id}</TD>
                                    <TD>{product.title} ({product.year})</TD>
                                    <TD>{product.director}</TD>
                                    <TD>
                                        <a href={`/shop/${product.id}`} target='_blank'>
                                            <CgExternal className='text-3xl hover:text-gold opacity-70 hover:opacity-100 transition cursor-pointer' />
                                        </a>
                                    </TD>
                                    <TD><EditProduct product={product} /></TD>
                                    <TD><DeleteProduct id={product.id} /></TD>
                                </TR>
                            ))
                        )}
                    </tbody>
                </table>
            </LoadingPage>
            {!searchResult && (
                <div className={`text-display flex justify-center items-center mt-10 gap-5 ${isLoading ? 'opacity-0' : ''}`}>
                    <button className='disabled:opacity-20 dark:border-white/20 border-gray/20 not-disabled:hover:bg-gray/20 not-disabled:dark:hover:bg-black/20 transition not-disabled:cursor-pointer border-2 ml-2 h-14 w-14 flex items-center justify-center'
                        disabled={isLoading || dashCurrentPage === 1} onClick={nextPage}>
                        <GoChevronLeft />
                    </button>
                    <p className='font-text font-bold text-xl'>{dashCurrentPage} / {totalPages}</p>
                    <button className='disabled:opacity-20 dark:border-white/20 border-gray/20 not-disabled:hover:bg-gray/20 not-disabled:dark:hover:bg-black/20 transition not-disabled:cursor-pointer border-2 ml-2 h-14 w-14 flex items-center justify-center'
                        disabled={isLoading || dashCurrentPage === totalPages} onClick={prevPage}>
                        <GoChevronRight />
                    </button>
                </div>
            )}
        </div>
    )
}

export default DashManageProducts
