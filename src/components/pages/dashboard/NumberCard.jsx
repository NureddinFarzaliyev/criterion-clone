import React from 'react'
import CountUp from 'react-countup'

const NumberCard = ({ number, text, isUsd }) => {
    return (
        <div className='border-2 dark:border-white/15 border-gray/20 h-72 flex items-center justify-center flex-col gap-10'>
            <CountUp className={`font-text ${isUsd ? 'text-4xl' : 'text-6xl'}`} end={number} prefix={isUsd && '$'} />
            <h1 className='font-display uppercase opacity-60'>{text}</h1>
        </div>
    )
}

export default NumberCard
