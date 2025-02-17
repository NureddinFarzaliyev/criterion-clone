import React, { useEffect, useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const DarkLightSwitch = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' ? true : false)

    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'true') {
            document.querySelector('html').classList.add('dark')
        }
    }, [])

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('darkMode', !darkMode)
        document.querySelector('html').classList.toggle('dark')
    }

    return (
        <button onClick={handleDarkMode} className='dark:text-white text-gray cursor-pointer text-2xl'>
            {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
    )
}

export default DarkLightSwitch
