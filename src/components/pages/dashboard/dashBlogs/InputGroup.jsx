import React from 'react'

const InputGroup = ({name, defaultValue}) => {
    return (
        <>
            <label htmlFor={name} className='font-display uppercase opacity-80'>{name}</label>
            <input defaultValue={defaultValue && defaultValue} type="text" name={name} id={name} className='w-full bg-light-gray text-white p-2 mt-2 mb-7 accent-gold font-text md:text-lg' />
        </>
    )
}

export default InputGroup
