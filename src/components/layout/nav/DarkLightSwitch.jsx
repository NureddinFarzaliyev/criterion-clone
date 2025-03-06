import React, { useEffect, useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const DarkLightSwitch = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const localData = localStorage.getItem('darkMode')
        if (localData === null) {
            return true
        } else {
            return localData === 'true' ? true : false
        }
    })

    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
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
