import React from 'react'
import NumberCard from './NumberCard'

const StatisticsGroup = ({title, numbers, texts, isUsd}) => {
  return (
    <>
    <p className='font-display uppercase mb-5 mt-20 opacity-60'>{title}</p>
    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4'>
        {numbers.map((number, index) => (
            <NumberCard text={texts[index]} number={number} isUsd={isUsd} />
        ))}
    </div>
    </>
  )
}

export default StatisticsGroup
