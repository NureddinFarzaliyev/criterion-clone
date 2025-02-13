import React from 'react'

const ParagraphTextArea = ({ index, defaultValue }) => {
    return (
        <div>
            <label htmlFor={`paragraph${index}`} className='font-display uppercase opacity-50 text-xs'>Paragraph {index + 1}</label>
            <textarea defaultValue={defaultValue && defaultValue} key={index} name={`paragraph${index}`} id={`paragraph${index}`}
                className='w-full bg-light-gray text-white p-2 my-2 accent-gold font-text min-h-32' />
        </div>
    )
}

export default ParagraphTextArea
