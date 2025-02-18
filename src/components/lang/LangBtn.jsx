import React from 'react'
import { BiGlobe } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from '../../features/lang/lang';

const LangBtn = () => {
    const dispatch = useDispatch()
    const currentLang = useSelector(state => state.lang)

    return (
        <button onClick={() => { dispatch(changeLang(currentLang === 'az' ? 'en' : 'az')); localStorage.setItem('lang', currentLang === 'az' ? 'en' : 'az') }}
            className='text-xl md:text-2xl hover:text-gold transition duration-300 lg:ml-4 cursor-pointer flex gap-2 items-center'><BiGlobe /> {currentLang.toUpperCase()}</button>
    )
}

export default LangBtn
