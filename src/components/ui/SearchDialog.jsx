import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import spinner from '../../assets/images/spinner-black.svg'
import supabase from '../../tools/supabase'

const SearchDialog = ({handleChosenElement, fromTable, fromField, isOpen, setIsOpen}) => {

    const [isSearching, setIsSearching] = useState(false)
    const [searchResult, setSearchResult] = useState(null)

    const handleSearch = async (e) => {
        e.preventDefault()
        setIsSearching(true)

        const {data, error} = await supabase
        .from(fromTable)
        .select('*')
        .textSearch(fromField, e.target.search.value?.replaceAll(" ", "+"))

        setIsSearching(false)
        setSearchResult(data)
    }

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition
            className="fixed inset-0 flex w-screen items-center justify-center z-50 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
            <DialogBackdrop className="fixed inset-0 bg-black/60" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="md:min-w-lg max-h-96 text-sm space-y-4 bg-white p-5">
                    <h1 className='font-display opacity-70 uppercase'>SEARCH</h1>
                    <form onSubmit={handleSearch} className='relative'>
                        <input type="text" name="search" id="" placeholder='SEARCH...' className='font-display bg-gray/20 p-3 w-full accent-gold' />
                        <button className='absolute top-[50%] translate-y-[-50%] cursor-pointer hover:opacity-100 transition right-4 text-2xl opacity-50'><FaMagnifyingGlass /></button>
                    </form>
                    <div className='mt-5 flex flex-col gap-2'>
                        {isSearching ? (
                            <img src={spinner} alt="spinner" className='mx-auto h-10 text-black' />
                        ) : (
                            searchResult?.map((result, index) => (
                                <p key={index} onClick={() => { handleChosenElement(result); setIsOpen(false); setSearchResult(null) }}
                                    className='bg-gray/20 p-3 shadow-md font-display text-sm cursor-pointer hover:bg-gray/40 transition duration-500' >{result.title}</p>
                            ))
                        )}
                    </div>

                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default SearchDialog
