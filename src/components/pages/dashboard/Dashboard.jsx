import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React, { Fragment, useEffect } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import LoadingPage from '../../ui/LoadingPage'
import useAuth from '../../../hooks/useAuth'

// Icons
import { FaPenNib } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaBoxOpen } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";

// Dashboard Pages
import Home from './dashHome/Home'
import Orders from './dashOrders/Orders'
import Blogs from './dashBlogs/DashBlogs'
import Products from './dashProducts/DashProducts'

const Dashboard = () => {
    const { getUser, isLoading } = useAuth()

    const fetchUser = async () => {
        const user = await getUser()

        if (!user || user.user_metadata.role !== "admin") {
            window.location.href = "/"
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const tabs = [
        <><GoHomeFill /><h1>Home</h1></>,
        <><FaPenNib /><h1>Blog</h1></>,
        <><FaBoxOpen /><h1>Products</h1></>,
        <><MdOutlineAttachMoney /><h1>Orders</h1></>,
    ]

    const pages = [
        <Home />,
        <Blogs />,
        <Products />,
        <Orders />,
    ]

    return (
        <GeneralSection>
            <LoadingPage isLoading={isLoading}>
                <div className='w-[90%] md:w-[70%] mx-auto'>

                    <h1 className='mt-10 font-display text-3xl opacity-50 mb-5'>DASHBOARD</h1>

                    <TabGroup defaultIndex={0}>
                        <TabList className={`flex gap-4 flex-wrap`}>
                            {tabs.map((tab, index) => (
                                <Tab as={Fragment}>
                                    {({ hover, selected }) => (
                                        <button key={index}
                                            className={` py-3 px-6 w-40 transition duration-300 outline-none text-white flex items-center gap-3 rounded-full text-sm font-display uppercase cursor-pointer
                                            ${hover && !selected && 'dark:bg-black/40'} ${selected ? 'dark:bg-black/70 bg-gray shadow-lg scale-105' : 'dark:bg-black/10 bg-gray/70'}`}>
                                            {tab}
                                        </button>
                                    )}
                                </Tab>
                            ))}
                        </TabList>

                        <TabPanels className='mt-14'>
                            {pages.map((page, index) => (
                                <TabPanel key={index}>
                                    {page}
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </TabGroup>

                </div>
            </LoadingPage>
        </GeneralSection>
    )
}

export default Dashboard
