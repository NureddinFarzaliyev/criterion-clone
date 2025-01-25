import React from 'react'

const Dots = ({scrollPosition}) => {
  return (
    <div className='absolute z-[999] bottom-20 left-10'>
        {Array.from({length: document.querySelectorAll('.home-section').length}).map((_, i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${Math.round(scrollPosition / window.innerHeight) === i ? "bg-white/100" : "bg-white/30"} transition duration-400 m-2`}></div>
        ))}
    </div>
  )
}

export default Dots
