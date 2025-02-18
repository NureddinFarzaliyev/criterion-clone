import React from 'react'
import { useSelector } from 'react-redux'

const StaticLang = ({en, az}) => {
    const currentLang = useSelector(state => state.lang)
    return currentLang === 'en' ? <>{en}</> : <>{az}</>
}

export default StaticLang
