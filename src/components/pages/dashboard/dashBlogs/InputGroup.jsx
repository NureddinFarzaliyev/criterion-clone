import React from 'react'

const InputGroup = ({name, defaultValue}) => {
    return (
        <div>
            <label htmlFor={name} className='font-display uppercase opacity-80'>{name.replaceAll("_", " ")}</label>
            <input defaultValue={defaultValue && defaultValue} type="text" name={name} id={name} className='w-full bg-light-gray text-white p-2 mt-2 mb-7 accent-gold font-text md:text-lg' />
        </div>
    )
}

export default InputGroup
